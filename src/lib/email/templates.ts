import { escapeHtml } from "./escape";

const BRAND_BG = "#131514";
const BRAND_TEXT = "#d5d6d5";
const BRAND_HEAD = "#f1f1f1";
const BRAND_MUTED = "#8a8b8a";
const BRAND_BORDER = "rgba(255,255,255,0.12)";
const BRAND_ACCENT = "#14a9cf";
const BRAND_LOGO_BLUE = "#082d44";

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

function emailShell(opts: {
  title: string;
  preheader: string;
  innerHtml: string;
  siteUrl: string;
}): string {
  const logoUrl = `${opts.siteUrl.replace(/\/$/, "")}/logo-arcos-nobg2.svg`;
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <title>${escapeHtml(opts.title)}</title>
  <!--[if mso]><style type="text/css">table { border-collapse: collapse; }</style><![endif]-->
</head>
<body style="margin:0;padding:0;background:#0a0b0b;">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:transparent;width:0;height:0;">
    ${escapeHtml(opts.preheader)}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a0b0b;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:${BRAND_BG};border-radius:12px;border:1px solid ${BRAND_BORDER};overflow:hidden;">
          <tr>
            <td style="padding:28px 32px 20px;border-bottom:1px solid ${BRAND_BORDER};">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td valign="middle" style="padding-right:12px;">
                    <img src="${escapeHtml(logoUrl)}" width="140" height="36" alt="Arcos" style="display:block;height:36px;width:auto;max-width:160px;border:0;outline:none;text-decoration:none;" />
                  </td>
                  <td valign="middle" align="right" style="font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:${BRAND_MUTED};">
                    Supervision industrielle
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px 32px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.55;color:${BRAND_TEXT};">
              ${opts.innerHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 24px;border-top:1px solid ${BRAND_BORDER};font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:1.5;color:${BRAND_MUTED};">
              FAWD · <a href="${escapeHtml(opts.siteUrl)}" style="color:${BRAND_ACCENT};text-decoration:none;">${escapeHtml(opts.siteUrl.replace(/^https?:\/\//, ""))}</a>
              <br /><span style="color:${BRAND_LOGO_BLUE};">—</span> Cet e-mail concerne la plateforme <strong style="color:${BRAND_HEAD};font-weight:600;">Arcos</strong>.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function teamNotificationHtml(
  p: ContactPayload,
  siteUrl: string,
  submittedAtIso: string
): string {
  const inner = `
    <p style="margin:0 0 16px;font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND_ACCENT};">
      Nouvelle demande · vitrine web
    </p>
    <h1 style="margin:0 0 20px;font-size:20px;font-weight:600;color:${BRAND_HEAD};letter-spacing:-0.02em;">
      ${escapeHtml(p.name)}
    </h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BRAND_BORDER};border-radius:8px;overflow:hidden;">
      <tr><td style="padding:12px 16px;background:rgba(255,255,255,0.03);font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${BRAND_MUTED};width:120px;">E-mail</td>
          <td style="padding:12px 16px;font-size:15px;color:${BRAND_HEAD};"><a href="mailto:${escapeHtml(p.email)}" style="color:${BRAND_ACCENT};text-decoration:none;">${escapeHtml(p.email)}</a></td></tr>
      <tr><td colspan="2" style="height:1px;background:${BRAND_BORDER};font-size:0;line-height:0;">&nbsp;</td></tr>
      <tr><td style="padding:12px 16px;background:rgba(255,255,255,0.03);font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${BRAND_MUTED};">Entreprise</td>
          <td style="padding:12px 16px;font-size:15px;color:${BRAND_TEXT};">${p.company ? escapeHtml(p.company) : "—"}</td></tr>
      <tr><td colspan="2" style="height:1px;background:${BRAND_BORDER};font-size:0;line-height:0;">&nbsp;</td></tr>
      <tr><td colspan="2" style="padding:14px 16px;background:rgba(255,255,255,0.03);font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${BRAND_MUTED};">Message</td></tr>
      <tr><td colspan="2" style="padding:0 16px 18px;font-size:15px;color:${BRAND_TEXT};white-space:pre-wrap;">${escapeHtml(p.message)}</td></tr>
    </table>
    <p style="margin:20px 0 0;font-size:12px;color:${BRAND_MUTED};">
      Reçu le ${escapeHtml(submittedAtIso)} · répondre directement à cet e-mail pour joindre ${escapeHtml(p.name)}.
    </p>`;
  return emailShell({
    title: "Arcos — nouvelle demande",
    preheader: `Message de ${p.name} (${p.email})`,
    innerHtml: inner,
    siteUrl,
  });
}

export function userConfirmationHtml(p: ContactPayload, siteUrl: string): string {
  const inner = `
    <p style="margin:0 0 12px;font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND_ACCENT};">
      Merci pour votre message
    </p>
    <h1 style="margin:0 0 16px;font-size:20px;font-weight:600;color:${BRAND_HEAD};letter-spacing:-0.02em;">
      Nous revenons vers vous sous 24h ouvrées
    </h1>
    <p style="margin:0 0 20px;">
      Bonjour ${escapeHtml(p.name.split(/\s+/)[0] || p.name)},
    </p>
    <p style="margin:0 0 16px;">
      Votre demande concernant <strong style="color:${BRAND_HEAD};font-weight:600;">Arcos</strong> a bien été transmise à l&apos;équipe produit. Nous vous contacterons à l&apos;adresse <a href="mailto:${escapeHtml(p.email)}" style="color:${BRAND_ACCENT};text-decoration:none;">${escapeHtml(p.email)}</a>.
    </p>
    <p style="margin:0 0 20px;color:${BRAND_MUTED};font-size:14px;">
      En attendant, vous pouvez préciser votre contexte (nombre de sites, types de machines, délais) en répondant simplement à cet e-mail.
    </p>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:8px;border:1px solid ${BRAND_BORDER};border-radius:8px;background:rgba(255,255,255,0.02);">
      <tr><td style="padding:14px 18px;font-size:13px;color:${BRAND_MUTED};">Récapitulatif de votre message</td></tr>
      <tr><td style="padding:0 18px 16px;font-size:14px;color:${BRAND_TEXT};white-space:pre-wrap;">${escapeHtml(p.message)}</td></tr>
    </table>`;
  return emailShell({
    title: "Arcos — accusé de réception",
    preheader: "Votre message a bien été reçu par l'équipe Arcos.",
    innerHtml: inner,
    siteUrl,
  });
}

export function teamNotificationText(p: ContactPayload, siteUrl: string, submittedAtIso: string): string {
  return [
    "ARCOS — Nouvelle demande (vitrine)",
    "",
    `Nom : ${p.name}`,
    `E-mail : ${p.email}`,
    `Entreprise : ${p.company || "—"}`,
    "",
    "Message :",
    p.message,
    "",
    `Reçu le : ${submittedAtIso}`,
    `Site : ${siteUrl}`,
    "",
    "Répondre à cet e-mail pour contacter l'expéditeur.",
  ].join("\n");
}

export function userConfirmationText(p: ContactPayload, siteUrl: string): string {
  const first = p.name.split(/\s+/)[0] || p.name;
  return [
    "ARCOS — Accusé de réception",
    "",
    `Bonjour ${first},`,
    "",
    "Nous avons bien reçu votre message. L'équipe Arcos vous recontactera sous 24 heures ouvrées.",
    "",
    "Récapitulatif de votre message :",
    p.message,
    "",
    `— Arcos · ${siteUrl}`,
  ].join("\n");
}
