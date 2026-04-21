import { escapeHtml } from "./escape";

/**
 * Tokens alignés sur `src/app/globals.css` (:root + .btn-hg).
 * Bordures / fonds en hex (pas de rgba) pour limiter les dérives
 * Gmail / Apple Mail en mode sombre ou « auto ».
 */
const BG = "#131514";
const BG_OUTER = "#131514";
const TEXT = "#d5d6d5";
const WHITE = "#f1f1f1";
const MUTED = "#6b6c6b";
const BORDER = "#2f2f2f";
const PANEL = "#1a1b1a";
const TEAL = "#14a9cf";
const NAVY = "#082d44";
const BTN_FG = "#131514";
const BTN_BG = "#f1f1f1";
const BTN_BORDER = "#f1f1f1";

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

function base(siteUrl: string): string {
  return siteUrl.replace(/\/$/, "");
}

/** Pile identique au site ; PP Neue Montreal chargée si le client mail l’autorise. */
function fontFaces(siteUrl: string): string {
  const b = base(siteUrl);
  const book = `${b}/fonts/ppneuemontreal-book.woff`;
  const medium = `${b}/fonts/ppneuemontreal-medium.woff`;
  const bold = `${b}/fonts/ppneuemontreal-bold.woff`;
  return `
@font-face {
  font-family: 'PP Neue Montreal';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('${book}') format('woff');
}
@font-face {
  font-family: 'PP Neue Montreal';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('${medium}') format('woff');
}
@font-face {
  font-family: 'PP Neue Montreal';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('${bold}') format('woff');
}`;
}

const FONT_STACK =
  "'PP Neue Montreal','Helvetica Neue',Helvetica,Arial,sans-serif";

function fontInline(weight: 400 | 500 | 700 = 500): string {
  return `font-family:${FONT_STACK};font-weight:${weight};`;
}

/** Bouton type `.btn-hg` (primaire vitrine). */
function btnHgPrimary(label: string, href: string): string {
  const safeHref = escapeHtml(href);
  const safeLabel = escapeHtml(label);
  return `<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:4px;">
  <tr>
    <td bgcolor="${BTN_BG}" style="border-radius:3px;background-color:${BTN_BG};border:1.5px solid ${BTN_BORDER};mso-padding-alt:11px 16px;">
      <a href="${safeHref}" target="_blank" rel="noopener noreferrer"
        style="display:inline-block;padding:11px 16px;${fontInline(500)}font-size:16px;line-height:1.2;color:${BTN_FG};text-decoration:none;border-radius:3px;">
        ${safeLabel}
      </a>
    </td>
  </tr>
</table>`;
}

/** Lien secondaire type `.btn-hg-ghost` (outline). */
function btnHgGhost(label: string, href: string): string {
  const safeHref = escapeHtml(href);
  const safeLabel = escapeHtml(label);
  return `<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:10px;">
  <tr>
    <td style="border-radius:3px;border:1.5px solid ${BORDER};background-color:transparent;mso-padding-alt:11px 16px;">
      <a href="${safeHref}" target="_blank" rel="noopener noreferrer"
        style="display:inline-block;padding:11px 16px;${fontInline(500)}font-size:16px;line-height:1.2;color:${MUTED};text-decoration:none;border-radius:3px;">
        ${safeLabel}
      </a>
    </td>
  </tr>
</table>`;
}

function labelPill(text: string): string {
  return `<p style="margin:0 0 14px;${fontInline(500)}font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:${MUTED};">${escapeHtml(text)}</p>`;
}

/** Logo plus grand + monochrome blanc (lisible sur fond sombre ; Gmail mode sombre). */
function logoImgTag(logoUrl: string): string {
  const u = escapeHtml(logoUrl);
  return `<img src="${u}" width="220" height="56" alt="Arcos"
      style="display:block;width:220px;height:auto;max-width:240px;border:0;outline:none;text-decoration:none;
      -webkit-filter:brightness(0) invert(1);filter:brightness(0) invert(1);" />`;
}

function emailShell(opts: {
  title: string;
  preheader: string;
  innerHtml: string;
  siteUrl: string;
}): string {
  const logoUrl = `${base(opts.siteUrl)}/logo-arcos-nobg2.svg`;
  const faces = fontFaces(opts.siteUrl);
  const grad = `linear-gradient(${BG},${BG})`;

  return `<!DOCTYPE html>
<html lang="fr" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
  <title>${escapeHtml(opts.title)}</title>
  <!--[if mso]><style type="text/css">table, td { border-collapse: collapse; }</style><![endif]-->
  <style type="text/css">
    ${faces}
    :root { color-scheme: light dark; }
    /* Gmail (surtout iOS) : inversion des couleurs — contournement documenté (hteumeuleu.com) */
    u + .body .gmail-blend-screen { background: #000000 !important; mix-blend-mode: screen !important; }
    u + .body .gmail-blend-difference { background: #000000 !important; mix-blend-mode: difference !important; }
    body, table, td, p, a, h1, span { ${fontInline(500)} -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    h1 { font-weight: 500; }
    a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; }
    @media (prefers-color-scheme: dark) {
      .arc-card { background-color: ${BG} !important; }
    }
  </style>
</head>
<body class="body arc-wrap" bgcolor="${BG_OUTER}" style="margin:0;padding:0;background-color:${BG_OUTER};color:${TEXT};">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:transparent;width:0;height:0;">
    ${escapeHtml(opts.preheader)}
  </div>
  <div style="background-color:${BG};background-image:${grad};color:${WHITE};">
    <div class="gmail-blend-screen">
      <div class="gmail-blend-difference">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${BG_OUTER}" style="background-color:${BG_OUTER};padding:24px 12px;">
          <tr>
            <td align="center" style="padding:0;">
              <table role="presentation" class="arc-card" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${BG}" style="max-width:560px;background-color:${BG};border-radius:12px;border:1px solid ${BORDER};overflow:hidden;">
                <tr>
                  <td bgcolor="${BG}" style="padding:28px 32px 22px;border-bottom:1px solid ${BORDER};background-color:${BG};">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tr>
                        <td valign="middle" style="padding-right:14px;">
                          ${logoImgTag(logoUrl)}
                        </td>
                        <td valign="middle" align="right" style="${fontInline(500)}font-size:11px;letter-spacing:0.10em;text-transform:uppercase;color:${MUTED};">
                          Supervision industrielle
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td bgcolor="${BG}" style="padding:28px 32px 32px;background-color:${BG};color:${TEXT};${fontInline(500)}font-size:16px;line-height:1.55;">
                    ${opts.innerHtml}
                  </td>
                </tr>
                <tr>
                  <td bgcolor="${BG}" style="padding:20px 32px 24px;border-top:1px solid ${BORDER};background-color:${BG};${fontInline(500)}font-size:12px;line-height:1.5;color:${MUTED};">
                    FAWD · <a href="${escapeHtml(opts.siteUrl)}" style="color:${TEAL};text-decoration:none;">${escapeHtml(opts.siteUrl.replace(/^https?:\/\//, ""))}</a>
                    <br /><span style="color:${NAVY};">—</span> Plateforme <strong style="color:${WHITE};font-weight:500;">Arcos</strong>.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</body>
</html>`;
}

function fieldTableRow(label: string, valueHtml: string, withTopBorder: boolean): string {
  const top = withTopBorder ? `border-top:1px solid ${BORDER};` : "";
  return `<tr>
    <td bgcolor="${PANEL}" style="padding:12px 16px;${top}background-color:${PANEL} !important;${fontInline(500)}font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:${MUTED};width:118px;vertical-align:top;">${escapeHtml(label)}</td>
    <td bgcolor="${BG}" style="padding:12px 16px;${top}background-color:${BG} !important;${fontInline(500)}font-size:16px;color:${TEXT};vertical-align:top;">${valueHtml}</td>
  </tr>`;
}

export function teamNotificationHtml(
  p: ContactPayload,
  siteUrl: string,
  submittedAtIso: string
): string {
  const inner = `
    ${labelPill("Nouvelle demande · vitrine web")}
    <h1 style="margin:0 0 20px;${fontInline(500)}font-size:20px;line-height:1.15;color:${WHITE};letter-spacing:-0.01em;">
      ${escapeHtml(p.name)}
    </h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${BORDER};border-radius:8px;overflow:hidden;">
      ${fieldTableRow("E-mail", `<a href="mailto:${escapeHtml(p.email)}" style="color:${TEAL};text-decoration:none;">${escapeHtml(p.email)}</a>`, false)}
      ${fieldTableRow("Entreprise", p.company ? escapeHtml(p.company) : `<span style="color:${MUTED};">—</span>`, true)}
      <tr>
        <td colspan="2" bgcolor="${PANEL}" style="padding:12px 16px;border-top:1px solid ${BORDER};background-color:${PANEL} !important;${fontInline(500)}font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:${MUTED};">Message</td>
      </tr>
      <tr>
        <td colspan="2" bgcolor="${BG}" style="padding:0 16px 18px;background-color:${BG} !important;${fontInline(500)}font-size:16px;color:${TEXT};white-space:pre-wrap;">${escapeHtml(p.message)}</td>
      </tr>
    </table>
    <p style="margin:22px 0 0;${fontInline(500)}font-size:12px;color:${MUTED};line-height:1.5;">
      Reçu le ${escapeHtml(submittedAtIso)} · répondre à cet e-mail pour joindre ${escapeHtml(p.name)}.
    </p>
    <p style="margin:18px 0 0;">
      ${btnHgPrimary("Ouvrir la vitrine", base(siteUrl) + "/")}
    </p>`;

  return emailShell({
    title: "Arcos — nouvelle demande",
    preheader: `Message de ${p.name} (${p.email})`,
    innerHtml: inner,
    siteUrl,
  });
}

export function userConfirmationHtml(p: ContactPayload, siteUrl: string): string {
  const origin = base(siteUrl);
  const first = escapeHtml(p.name.split(/\s+/)[0] || p.name);
  const inner = `
    ${labelPill("Merci pour votre message")}
    <h1 style="margin:0 0 16px;${fontInline(500)}font-size:20px;line-height:1.15;color:${WHITE};letter-spacing:-0.01em;">
      Nous revenons vers vous sous 24h ouvrées
    </h1>
    <p style="margin:0 0 18px;color:${TEXT};">
      Bonjour ${first},
    </p>
    <p style="margin:0 0 16px;color:${TEXT};">
      Votre demande concernant <strong style="color:${WHITE};font-weight:500;">Arcos</strong> a bien été transmise à l&apos;équipe produit. Nous vous contacterons à l&apos;adresse
      <a href="mailto:${escapeHtml(p.email)}" style="color:${TEAL};text-decoration:none;">${escapeHtml(p.email)}</a>.
    </p>
    <p style="margin:0 0 20px;color:${MUTED};font-size:15px;line-height:1.55;">
      Vous pouvez préciser votre contexte (sites, machines, délais) en répondant à cet e-mail.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${BORDER};border-radius:8px;background-color:${PANEL} !important;" bgcolor="${PANEL}">
      <tr>
        <td style="padding:14px 18px;${fontInline(500)}font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:${MUTED};">Récapitulatif</td>
      </tr>
      <tr>
        <td style="padding:0 18px 18px;${fontInline(500)}font-size:15px;color:${TEXT};white-space:pre-wrap;background-color:${BG} !important;" bgcolor="${BG}">${escapeHtml(p.message)}</td>
      </tr>
    </table>
    <p style="margin:24px 0 0;">
      ${btnHgPrimary("Visiter le site", origin + "/")}
    </p>
    <p style="margin:0;">
      ${btnHgGhost("Section contact", origin + "/#contact")}
    </p>`;

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
