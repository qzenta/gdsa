import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_LOGIN,
    pass: process.env.BREVO_SMTP_KEY,
  },
});

export async function sendEmail(options: {
  from: string;
  to: string | string[];
  replyTo?: string;
  subject: string;
  html: string;
}) {
  return transporter.sendMail({
    from: options.from,
    to: Array.isArray(options.to) ? options.to.join(", ") : options.to,
    replyTo: options.replyTo,
    subject: options.subject,
    html: options.html,
  });
}
