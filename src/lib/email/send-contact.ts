import nodemailer from "nodemailer";
import type { ContactPayload } from "./templates";
import {
  teamNotificationHtml,
  teamNotificationText,
  userConfirmationHtml,
  userConfirmationText,
} from "./templates";

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const secure = String(process.env.SMTP_SECURE || "false").toLowerCase() === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    throw new Error("Configuration SMTP incomplète (SMTP_HOST, SMTP_USER, SMTP_PASSWORD).");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    requireTLS: !secure && port === 587,
  });
}

function messageIdDomain(from: string): string {
  const at = from.indexOf("@");
  return at > 0 ? from.slice(at + 1) : "localhost";
}

export async function sendContactEmails(
  payload: ContactPayload,
  opts: { siteUrl: string; submittedAtIso: string }
): Promise<void> {
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  const teamTo = process.env.CONTACT_TEAM_TO || "infra@fawd.be";
  if (!from) throw new Error("SMTP_FROM ou SMTP_USER requis.");

  const transporter = getTransporter();
  const domain = messageIdDomain(from);
  const idBase = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

  const commonHeaders = {
    "X-Mailer": "Arcos vitrine",
    Importance: "normal",
  };

  await transporter.sendMail({
    from: `Arcos <${from}>`,
    to: teamTo,
    replyTo: payload.email,
    subject: `[Arcos vitrine] Demande de ${payload.name}`,
    messageId: `<${idBase}.team@${domain}>`,
    headers: {
      ...commonHeaders,
    },
    text: teamNotificationText(payload, opts.siteUrl, opts.submittedAtIso),
    html: teamNotificationHtml(payload, opts.siteUrl, opts.submittedAtIso),
  });

  await transporter.sendMail({
    from: `Arcos <${from}>`,
    to: payload.email,
    subject: "Arcos — Nous avons bien reçu votre message",
    messageId: `<${idBase}.user@${domain}>`,
    headers: {
      ...commonHeaders,
      "Auto-Submitted": "auto-generated",
    },
    text: userConfirmationText(payload, opts.siteUrl),
    html: userConfirmationHtml(payload, opts.siteUrl),
  });
}
