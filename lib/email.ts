export async function sendEmail(options: {
  from: string;
  to: string | string[];
  replyTo?: string;
  subject: string;
  html: string;
}) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) throw new Error("BREVO_API_KEY is not set");

  const toAddresses = (Array.isArray(options.to) ? options.to : [options.to]).map(
    (email) => ({ email })
  );

  const body: Record<string, unknown> = {
    sender: { email: options.from },
    to: toAddresses,
    subject: options.subject,
    htmlContent: options.html,
  };

  if (options.replyTo) {
    body.replyTo = { email: options.replyTo };
  }

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Brevo API error [${res.status}]: ${text}`);
  }

  return res.json();
}
