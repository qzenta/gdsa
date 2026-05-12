import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/site";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY ?? "placeholder");
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resend = getResend();
    await resend.emails.send({
      from: `GDSA Website <noreply@${SITE.domain}>`,
      to: [SITE.email],
      replyTo: email,
      subject: `[GDSA Contact] ${subject} — from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #8B1A1A; padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 18px;">New Contact Message — GDSA</h1>
          </div>
          <div style="padding: 24px; background: #F7F4EF; border: 1px solid #EDE8E0; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #888; font-size: 13px; width: 120px;">Name</td><td style="padding: 8px 0; font-size: 14px; color: #1C1C1C;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #888; font-size: 13px;">Email</td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #8B1A1A;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #888; font-size: 13px;">Phone</td><td style="padding: 8px 0; font-size: 14px; color: #1C1C1C;">${phone || "Not provided"}</td></tr>
              <tr><td style="padding: 8px 0; color: #888; font-size: 13px;">Subject</td><td style="padding: 8px 0; font-size: 14px; color: #1C1C1C; font-weight: 600;">${subject}</td></tr>
            </table>
            <hr style="margin: 16px 0; border: none; border-top: 1px solid #EDE8E0;" />
            <p style="font-size: 13px; color: #888; margin-bottom: 8px;">Message:</p>
            <p style="font-size: 14px; color: #1C1C1C; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to sender
    const resend2 = getResend();
    await resend2.emails.send({
      from: `Ghana Diaspora SA <noreply@${SITE.domain}>`,
      to: [email],
      subject: "We received your message — Ghana Diaspora SA",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #8B1A1A; padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 18px;">Thank You, ${name}</h1>
          </div>
          <div style="padding: 24px; background: #F7F4EF; border: 1px solid #EDE8E0; border-radius: 0 0 12px 12px;">
            <p style="color: #1C1C1C; line-height: 1.7;">We have received your message and our team will respond within <strong>24 hours</strong>.</p>
            <p style="color: #1C1C1C; line-height: 1.7;">For urgent matters, please WhatsApp us directly at <strong>${SITE.whatsapp}</strong>.</p>
            <p style="color: #888; font-size: 13px; margin-top: 24px;">Ghana Diaspora SA | ${SITE.address.full} | ${SITE.email}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
