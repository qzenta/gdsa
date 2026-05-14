import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { SITE } from "@/lib/site";
import { upsertMemberContact, salesforceConfigured } from "@/lib/salesforce";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, nationality, tier, address, message } = data;

    if (!name || !email || !phone || !nationality || !tier) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ── Split full name into first / last ─────────────────────────────────────
    const nameParts = (name as string).trim().split(/\s+/);
    const firstName = nameParts[0] ?? name;
    const lastName  = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "—";

    // ── 1. Admin notification email ───────────────────────────────────────────
    await sendEmail({
      from:    `GDSA Website <info@${SITE.domain}>`,
      to:      SITE.email,
      subject: `[GDSA Membership] New Application — ${name} (${tier})`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#8B1A1A;padding:24px;border-radius:12px 12px 0 0;">
            <h1 style="color:#fff;margin:0;font-size:18px;">New Membership Application</h1>
          </div>
          <div style="padding:24px;background:#F7F4EF;border:1px solid #EDE8E0;border-radius:0 0 12px 12px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#888;font-size:13px;width:140px;">Name</td><td style="font-size:14px;color:#1C1C1C;">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#888;font-size:13px;">Email</td><td style="font-size:14px;"><a href="mailto:${email}" style="color:#8B1A1A;">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#888;font-size:13px;">Phone</td><td style="font-size:14px;color:#1C1C1C;">${phone}</td></tr>
              <tr><td style="padding:8px 0;color:#888;font-size:13px;">Nationality</td><td style="font-size:14px;color:#1C1C1C;">${nationality}</td></tr>
              <tr><td style="padding:8px 0;color:#888;font-size:13px;">Tier</td><td style="font-size:14px;color:#1C1C1C;font-weight:600;">${tier}</td></tr>
              <tr><td style="padding:8px 0;color:#888;font-size:13px;">Address</td><td style="font-size:14px;color:#1C1C1C;">${address || "Not provided"}</td></tr>
              <tr><td style="padding:8px 0;color:#888;font-size:13px;">Referral</td><td style="font-size:14px;color:#1C1C1C;">${message || "—"}</td></tr>
            </table>
          </div>
        </div>
      `,
    });

    // ── 2. Applicant confirmation email ───────────────────────────────────────
    await sendEmail({
      from:    `Ghana Diaspora SA <info@${SITE.domain}>`,
      to:      email,
      subject: "Membership Application Received — Ghana Diaspora SA",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#8B1A1A;padding:24px;border-radius:12px 12px 0 0;">
            <h1 style="color:#fff;margin:0;font-size:18px;">Welcome to GDSA, ${firstName}!</h1>
          </div>
          <div style="padding:24px;background:#F7F4EF;border:1px solid #EDE8E0;border-radius:0 0 12px 12px;">
            <p style="color:#1C1C1C;line-height:1.7;">We have received your membership application for <strong>${tier}</strong>.</p>
            <p style="color:#1C1C1C;line-height:1.7;">Our membership team will contact you within <strong>48 hours</strong> with payment instructions and your membership number.</p>
            <p style="color:#1C1C1C;line-height:1.7;">For urgent assistance in the meantime, WhatsApp us at <strong>${SITE.whatsapp}</strong>.</p>
            <p style="color:#888;font-size:13px;margin-top:24px;">Ghana Diaspora SA | ${SITE.email}</p>
          </div>
        </div>
      `,
    });

    // ── 3. Salesforce NPSP — create / update Contact ──────────────────────────
    // Runs after emails so a Salesforce outage never blocks the member's confirmation.
    // Skipped gracefully if env vars are not yet configured.
    let sfResult: { action: string; id: string } | null = null;

    if (salesforceConfigured()) {
      try {
        sfResult = await upsertMemberContact({
          firstName,
          lastName,
          email,
          phone,
          nationality,
          tier,
          address: address ?? "",
          referral: message ?? "",
        });
        console.log(`[Salesforce] Contact ${sfResult.action}: ${sfResult.id}`);
      } catch (sfErr) {
        // Log but do not fail the request — member still gets their confirmation email
        console.error("[Salesforce] Contact upsert failed:", sfErr);
      }
    } else {
      console.warn("[Salesforce] Not configured — skipping Contact creation. Add SF_* env vars to enable.");
    }

    return NextResponse.json({
      ok: true,
      ...(sfResult ? { sf: sfResult } : {}),
    });
  } catch (err) {
    console.error("[Membership API] Error:", err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
