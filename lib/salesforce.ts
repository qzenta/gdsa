/**
 * Salesforce NPSP REST API helper
 * ---------------------------------
 * Uses the OAuth2 Username-Password flow — credentials live in Vercel env vars:
 *   SF_CLIENT_ID        → Connected App Consumer Key
 *   SF_CLIENT_SECRET    → Connected App Consumer Secret
 *   SF_USERNAME         → Salesforce admin / integration user email
 *   SF_PASSWORD         → User password
 *   SF_SECURITY_TOKEN   → User security token (emailed from "Reset My Security Token")
 *
 * The token is obtained per invocation — appropriate for Vercel serverless functions
 * where module-level state cannot be guaranteed across requests.
 */

const SF_TOKEN_URL = "https://login.salesforce.com/services/oauth2/token";
const SF_API_VERSION = "v61.0";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SalesforceToken {
  access_token: string;
  instance_url: string;
}

export interface MemberPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  tier: string;
  address: string;
  referral?: string;
}

interface SalesforceResult {
  action: "created" | "updated";
  id: string;
}

// ─── Auth ─────────────────────────────────────────────────────────────────────

async function getToken(): Promise<SalesforceToken> {
  const clientId     = process.env.SF_CLIENT_ID;
  const clientSecret = process.env.SF_CLIENT_SECRET;
  const username     = process.env.SF_USERNAME;
  const password     = process.env.SF_PASSWORD;
  const token        = process.env.SF_SECURITY_TOKEN ?? "";

  if (!clientId || !clientSecret || !username || !password) {
    throw new Error("Salesforce env vars not configured (SF_CLIENT_ID / SF_CLIENT_SECRET / SF_USERNAME / SF_PASSWORD)");
  }

  const params = new URLSearchParams({
    grant_type:    "password",
    client_id:     clientId,
    client_secret: clientSecret,
    username,
    password:      password + token,
  });

  const res = await fetch(SF_TOKEN_URL, {
    method:  "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body:    params.toString(),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Salesforce auth failed [${res.status}]: ${body}`);
  }

  return res.json() as Promise<SalesforceToken>;
}

// ─── Contact upsert ───────────────────────────────────────────────────────────

/**
 * Creates or updates a Salesforce Contact for a GDSA membership applicant.
 * If a Contact with the same email already exists it is updated, not duplicated.
 *
 * NPSP automatically creates a linked Household Account when a Contact is created.
 */
export async function upsertMemberContact(data: MemberPayload): Promise<SalesforceResult> {
  const { access_token, instance_url } = await getToken();

  const base = `${instance_url}/services/data/${SF_API_VERSION}`;
  const headers = {
    Authorization:  `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  // Check for existing Contact by email
  const query  = encodeURIComponent(`SELECT Id FROM Contact WHERE Email = '${data.email.replace(/'/g, "\\'")}' LIMIT 1`);
  const search = await fetch(`${base}/query/?q=${query}`, { headers });

  if (!search.ok) {
    const err = await search.text();
    throw new Error(`Salesforce query failed [${search.status}]: ${err}`);
  }

  const { records } = (await search.json()) as { records: Array<{ Id: string }> };

  // Build the Contact payload — standard + NPSP-friendly fields
  const contact = {
    FirstName:      data.firstName,
    LastName:       data.lastName,
    Email:          data.email,
    MobilePhone:    data.phone,
    MailingStreet:  data.address || "",
    MailingCity:    "Gauteng",
    MailingCountry: "South Africa",
    LeadSource:     "Web",
    Description:    [
      `Nationality: ${data.nationality}`,
      `Membership Tier: ${data.tier}`,
      data.referral ? `Referral: ${data.referral}` : null,
      `Applied via: GDSA Website`,
    ].filter(Boolean).join("\n"),
  };

  // ── UPDATE existing ──
  if (records.length > 0) {
    const id  = records[0].Id;
    const res = await fetch(`${base}/sobjects/Contact/${id}`, {
      method:  "PATCH",
      headers,
      body:    JSON.stringify(contact),
    });

    if (!res.ok && res.status !== 204) {
      const err = await res.text();
      throw new Error(`Salesforce update failed [${res.status}]: ${err}`);
    }

    return { action: "updated", id };
  }

  // ── CREATE new ──
  const res = await fetch(`${base}/sobjects/Contact`, {
    method:  "POST",
    headers,
    body:    JSON.stringify(contact),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Salesforce create failed [${res.status}]: ${err}`);
  }

  const result = (await res.json()) as { id: string };
  return { action: "created", id: result.id };
}

// ─── Guard ────────────────────────────────────────────────────────────────────

/** Returns true only when all required Salesforce env vars are present. */
export function salesforceConfigured(): boolean {
  return Boolean(
    process.env.SF_CLIENT_ID &&
    process.env.SF_CLIENT_SECRET &&
    process.env.SF_USERNAME &&
    process.env.SF_PASSWORD
  );
}
