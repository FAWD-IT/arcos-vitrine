"use client";
import type { CSSProperties, FormEvent } from "react";
import { useState } from "react";
import { AnimateIn } from "./AnimateIn";
import { HGArrow } from "./TiltCard";
import { WordReveal } from "./WordReveal";

const inputStyle: CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  marginTop: 6,
  padding: "10px 12px",
  fontFamily: "'PP Neue Montreal', Arial, sans-serif",
  fontSize: 15,
  fontWeight: 500,
  color: "var(--white)",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid var(--border)",
  borderRadius: 3,
  outline: "none",
  transition: "border-color 0.2s ease",
};

const labelStyle: CSSProperties = {
  fontSize: 11,
  color: "var(--muted)",
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  fontWeight: 500,
  display: "block",
  marginTop: 14,
};

type FormStatus = "idle" | "loading" | "success" | "error";

export function CTA() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const website = (fd.get("website") as string | null)?.trim() ?? "";
    if (website) {
      setStatus("success");
      return;
    }

    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim().toLowerCase();
    const phone = String(fd.get("phone") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    setStatus("loading");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          message,
          website: String(fd.get("website") ?? "").trim(),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Une erreur est survenue.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Réseau indisponible. Réessayez ou écrivez à infra@fawd.be.");
    }
  }

  return (
    <>
      <div className="line" />
      <section id="contact" className="c sp">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "flex-start" }}
          className="cta-grid"
        >
          <div>
            <AnimateIn>
              <p style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: "1.5rem", fontWeight: 500 }}>
                Contact
              </p>
            </AnimateIn>
            <WordReveal
              className="h-statement"
              segments={[
                { text: "Parler à l'équipe " },
                { text: "produit.", dim: true },
              ]}
            />
            <AnimateIn delay={300}>
              <p style={{ fontSize: 15.875, color: "var(--text)", lineHeight: 1.6, marginTop: "1.5rem", fontWeight: 500, maxWidth: 400 }}>
                Décrivez votre contexte (machines, sites, besoins). Nous revenons vers vous sous 24h ouvrées.
              </p>
            </AnimateIn>
          </div>

          <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />

            <label style={{ ...labelStyle, marginTop: 0 }}>
              Nom complet *
              <input name="name" type="text" required placeholder="Jean Dupont" style={inputStyle} disabled={status === "loading"} />
            </label>
            <label style={labelStyle}>
              E-mail professionnel *
              <input name="email" type="email" required placeholder="vous@entreprise.com" style={inputStyle} disabled={status === "loading"} autoComplete="email" />
            </label>
            <label style={labelStyle}>
              Téléphone *
              <input
                name="phone"
                type="tel"
                required
                placeholder="+32 470 12 34 56"
                inputMode="tel"
                autoComplete="tel"
                style={inputStyle}
                disabled={status === "loading"}
              />
            </label>
            <label style={labelStyle}>
              Entreprise
              <input name="company" type="text" placeholder="Nom de l&apos;organisation" style={inputStyle} disabled={status === "loading"} />
            </label>
            <label style={labelStyle}>
              Message *
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Nombre de sites, type de machines, délai souhaité…"
                style={{ ...inputStyle, marginTop: 6, resize: "vertical", minHeight: 120 }}
                disabled={status === "loading"}
              />
            </label>

            {status === "success" && (
              <p style={{ marginTop: "1.25rem", fontSize: 14, color: "var(--teal)", fontWeight: 500 }} role="status">
                Message envoyé. Vous recevrez un accusé de réception par e-mail.
              </p>
            )}
            {status === "error" && errorMessage && (
              <p style={{ marginTop: "1.25rem", fontSize: 14, color: "#e57373", fontWeight: 500 }} role="alert">
                {errorMessage}
              </p>
            )}

            <div style={{ marginTop: "1.5rem" }}>
              <button
                type="submit"
                className="btn-hg cta-submit-btn"
                style={{ border: "none", font: "inherit", width: "auto" }}
                disabled={status === "loading"}
                aria-busy={status === "loading"}
              >
                {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
                {status === "loading" ? (
                  <span className="cta-submit-loader" aria-hidden />
                ) : (
                  <HGArrow size={12} color="currentColor" />
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .cta-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        #contact input:focus,
        #contact textarea:focus {
          border-color: rgba(255,255,255,0.28);
        }
        @keyframes cta-submit-spin {
          to { transform: rotate(360deg); }
        }
        .cta-submit-loader {
          display: inline-block;
          width: 14px;
          height: 14px;
          box-sizing: border-box;
          border: 2px solid rgba(19, 21, 20, 0.2);
          border-top-color: #131514;
          border-radius: 50%;
          animation: cta-submit-spin 0.65s linear infinite;
          flex-shrink: 0;
          vertical-align: middle;
        }
        @media (prefers-reduced-motion: reduce) {
          .cta-submit-loader { animation: none; border-color: rgba(19, 21, 20, 0.35); }
        }
      `}</style>
    </>
  );
}
