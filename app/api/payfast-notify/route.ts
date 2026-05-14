import { NextRequest, NextResponse } from "next/server";

/**
 * PayFast ITN (Instant Transaction Notification) Handler
 * -------------------------------------------------------
 * PayFast POSTs to this endpoint after every payment attempt.
 * We must respond with HTTP 200 to acknowledge receipt.
 *
 * Full signature validation should be added once live testing is confirmed.
 * See: https://developers.payfast.co.za/docs#step_4_notify_url
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const params = new URLSearchParams(body);

    const paymentStatus = params.get("payment_status");
    const pfPaymentId   = params.get("pf_payment_id");
    const amountGross   = params.get("amount_gross");
    const itemName      = params.get("item_name");
    const emailAddress  = params.get("email_address");
    const firstName     = params.get("name_first");
    const lastName      = params.get("name_last");

    // Log the notification for audit trail
    console.log("[PayFast ITN]", {
      paymentStatus,
      pfPaymentId,
      amountGross,
      itemName,
      email: emailAddress,
      name: `${firstName} ${lastName}`,
      timestamp: new Date().toISOString(),
    });

    if (paymentStatus === "COMPLETE") {
      // TODO: Record confirmed donation in database or Notion log
      // TODO: Send thank-you email via Brevo to donor
      console.log(`[PayFast] Confirmed donation: R${amountGross} from ${firstName} ${lastName} <${emailAddress}>`);
    }

    // PayFast requires a plain 200 response — any other status retries the ITN
    return new NextResponse("OK", { status: 200 });
  } catch (err) {
    console.error("[PayFast ITN] Error:", err);
    // Still return 200 so PayFast doesn't keep retrying
    return new NextResponse("OK", { status: 200 });
  }
}
