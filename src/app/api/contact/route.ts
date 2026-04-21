import { NextResponse } from "next/server";
import type { ContactPayload } from "@/lib/email/templates";
import { sendContactEmails } from "@/lib/email/send-contact";

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 8;
const hits = new Map<string, number[]>();

function clientIp(headerList: Headers): string {
  const xff = headerList.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  return headerList.get("x-real-ip") || "unknown";
}

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (arr.length >= MAX_PER_WINDOW) return true;
  arr.push(now);
  hits.set(ip, arr);
  return false;
}

const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function validPayload(body: unknown): body is ContactPayload & { website?: string } {
  if (!body || typeof body !== "object") return false;
  const o = body as Record<string, unknown>;
  const name = typeof o.name === "string" ? o.name.trim() : "";
  const email = typeof o.email === "string" ? o.email.trim().toLowerCase() : "";
  const company = typeof o.company === "string" ? o.company.trim() : "";
  const message = typeof o.message === "string" ? o.message.trim() : "";
  if (name.length < 2 || name.length > 120) return false;
  if (!EMAIL_RE.test(email) || email.length > 254) return false;
  if (company.length > 200) return false;
  if (message.length < 10 || message.length > 5000) return false;
  return true;
}

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Corps JSON invalide." }, { status: 400 });
  }

  const o = json as Record<string, unknown>;
  const honeypot = typeof o.website === "string" ? o.website.trim() : "";
  if (honeypot.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (!validPayload(json)) {
    return NextResponse.json(
      { ok: false, error: "Vérifiez les champs obligatoires (nom, e-mail valide, message 10–5000 caractères)." },
      { status: 400 }
    );
  }

  const ip = clientIp(req.headers);
  if (rateLimit(ip)) {
    return NextResponse.json({ ok: false, error: "Trop de demandes. Réessayez plus tard." }, { status: 429 });
  }

  const payload: ContactPayload = {
    name: (json as ContactPayload).name.trim(),
    email: (json as ContactPayload).email.trim().toLowerCase(),
    company: (json as ContactPayload).company.trim(),
    message: (json as ContactPayload).message.trim(),
  };

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    new URL(req.url).origin;

  try {
    await sendContactEmails(payload, {
      siteUrl,
      submittedAtIso: new Date().toLocaleString("fr-BE", {
        dateStyle: "long",
        timeStyle: "short",
        timeZone: "Europe/Brussels",
      }),
    });
  } catch (e) {
    console.error("[contact]", e);
    return NextResponse.json(
      { ok: false, error: "L’envoi a échoué. Réessayez dans quelques minutes ou écrivez-nous directement à infra@fawd.be." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
