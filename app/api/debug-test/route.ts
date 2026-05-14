/**
 * Temporary diagnostic endpoint — DELETE after issue is resolved.
 * Usage: GET https://www.ghanadiasporasa.org/api/debug-test
 * Tests email (Brevo) and Salesforce independently.
 */
import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { upsertMemberContact, salesforceConfigured } from "@/lib/salesforce";
import { SITE } from "@/lib/site";

export async function GET() {
  const results: Record<string, unknown> = {
    timestamp: new Date().toISOString(),
    env: {
      brevo_login_set:  Boolean(process.env.BREVO_SMTP_LOGIN),
      brevo_key_set:    Boolean(process.env.BREVO_SMTP_KEY),
      sf_configured:    salesforceConfigured(),
      sf_client_id_set: Boolean(process.env.SF_CLIENT_ID),
      sf_username_set:  Boolean(process.env.SF_USERNAME),
      sf_password_set:  Boolean(process.env.SF_PASSWORD),
      sf_token_set:     Boolean(process.env.SF_SECURITY_TOKEN),
    },
  };

  // ── Test Brevo email ──────────────────────────────────────────────────────
  try {
    await sendEmail({
      from:    `GDSA Test <info@${SITE.domain}>`,
      to:      SITE.email,
      subject: "[GDSA DEBUG] Email test — ignore",
      html:    "<p>This is a diagnostic test email. Safe to delete.</p>",
    });
    results.email = "OK";
  } catch (err) {
    results.email = `FAILED: ${err instanceof Error ? err.message : String(err)}`;
  }

  // ── Test Salesforce ───────────────────────────────────────────────────────
  if (salesforceConfigured()) {
    try {
      const sf = await upsertMemberContact({
        firstName:   "GDSA",
        lastName:    "DebugTest",
        email:       "debug-test@ghanadiasporasa.org",
        phone:       "+27000000000",
        nationality: "Test",
        tier:        "Debug",
        address:     "Test",
        referral:    "Diagnostic test — safe to delete this Contact",
      });
      results.salesforce = `OK — ${sf.action} id:${sf.id}`;
    } catch (err) {
      results.salesforce = `FAILED: ${err instanceof Error ? err.message : String(err)}`;
    }
  } else {
    results.salesforce = "SKIPPED — SF env vars not set";
  }

  return NextResponse.json(results, { status: 200 });
}
