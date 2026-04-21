"use client";
import { AnimateIn } from "./AnimateIn";
export function CTA() {
  return (
    <>
      <div className="line" />
      <section id="demo" className="c sp">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "flex-start" }}
          className="cta-grid"
        >
          {/* Left */}
          <AnimateIn>
            <p style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: "1.5rem", fontWeight: 500 }}>
              Contact
            </p>
            <h2 className="h-statement">
              Parler à l&apos;équipe <span className="dim">produit.</span>
            </h2>
            <p style={{ fontSize: 15.875, color: "var(--text)", lineHeight: 1.6, marginTop: "1.5rem", fontWeight: 500, maxWidth: 400 }}>
              Montrez-nous votre infrastructure, on vous montre Arcos en live — en moins de 30 minutes.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: "2rem", flexWrap: "wrap" }}>
              <a href="mailto:contact@fawd.be" className="btn-hg" style={{ textDecoration: "none" }}>
                <span className="arr">→</span> Écrire à l&apos;équipe
              </a>
              <a href="tel:+32" className="btn-hg" style={{ textDecoration: "none", borderColor: "rgba(255,255,255,0.06)", color: "var(--muted)" }}>
                <span className="arr">→</span> Planifier un appel
              </a>
            </div>
          </AnimateIn>

          {/* Right: info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              ["Siège",   "Bruxelles, Belgique"],
              ["E-mail",  "contact@fawd.be"],
              ["Réponse", "Sous 24h ouvrées"],
              ["Langues", "Français · Anglais"],
            ].map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: 20,
                  borderTop: "1px solid var(--border)",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  alignItems: "center",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderTopColor = "var(--border-hover)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderTopColor = "var(--border)"; }}
              >
                <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 500, letterSpacing: "0.05em" }}>{k}</span>
                <span style={{ fontSize: 14, color: "var(--white)", fontWeight: 500 }}>{v}</span>
              </div>
            ))}
            <div className="line" />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .cta-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </>
  );
}
