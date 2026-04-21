"use client";
import type { CSSProperties } from "react";
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

export function CTA() {
  return (
    <>
      <div className="line" />
      <section id="contact" className="c sp">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "flex-start" }}
          className="cta-grid"
        >
          {/* Gauche : accroche */}
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

          {/* Droite : formulaire (FormSubmit — sans backend) */}
          <form
            action="https://formsubmit.co/contact@fawd.be"
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: 0 }}
          >
            <input type="hidden" name="_subject" value="Arcos — Contact depuis la vitrine" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <label style={{ ...labelStyle, marginTop: 0 }}>
              Nom complet *
              <input name="Nom" type="text" required placeholder="Jean Dupont" style={inputStyle} />
            </label>
            <label style={labelStyle}>
              E-mail professionnel *
              <input name="email" type="email" required placeholder="vous@entreprise.com" style={inputStyle} />
            </label>
            <label style={labelStyle}>
              Entreprise
              <input name="Entreprise" type="text" placeholder="Nom de l&apos;organisation" style={inputStyle} />
            </label>
            <label style={labelStyle}>
              Message *
              <textarea
                name="Message"
                required
                rows={5}
                placeholder="Nombre de sites, type de machines, délai souhaité…"
                style={{ ...inputStyle, marginTop: 6, resize: "vertical", minHeight: 120 }}
              />
            </label>

            <div style={{ marginTop: "1.5rem" }}>
              <button
                type="submit"
                className="btn-hg"
                style={{ border: "none", font: "inherit", width: "auto" }}
              >
                Envoyer le message
                <HGArrow size={12} color="currentColor" />
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
      `}</style>
    </>
  );
}
