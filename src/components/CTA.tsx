"use client";
export function CTA() {
  return (
    <section
      id="demo"
      style={{ background: "var(--black)", borderTop: "1px solid var(--bd-dark)" }}
    >
      <div className="c sp">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "flex-start",
          }}
          className="cta-grid"
        >
          {/* Left */}
          <div>
            <p className="kicker kicker--light"><span className="kicker__sym">✦</span> Contact</p>
            <h2
              className="title-l"
              style={{ marginBottom: "2rem" }}
            >
              Parler à l&apos;équipe<br />produit.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: 380 }}>
              Montrez-nous votre infrastructure, on vous montre Arcos en live — en moins de 30 minutes.
            </p>
            <a href="mailto:contact@fawd.be" className="btn-a" style={{ textDecoration: "none" }}>
              <span className="btn-a__t">Écrire à l&apos;équipe</span>
              <span className="btn-a__i">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Right: info card */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--bd-dark)",
              borderRadius: 16,
              padding: "2.5rem",
            }}
          >
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 1.5rem" }}>
              FAWD SRL
            </p>
            {[
              ["Siège",    "Bruxelles, Belgique"],
              ["E-mail",   "contact@fawd.be"],
              ["Réponse",  "Sous 24h ouvrées"],
              ["Langues",  "Français · Anglais"],
            ].map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: "flex", alignItems: "flex-start", gap: 14,
                  paddingBlock: "0.85rem",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span
                  style={{
                    width: 6, height: 6, borderRadius: "50%", marginTop: 6,
                    background: "var(--accent)", flexShrink: 0,
                    boxShadow: "0 0 6px var(--accent)",
                  }}
                />
                <div>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", margin: "0 0 2px", letterSpacing: "0.06em", textTransform: "uppercase" }}>{k}</p>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", margin: 0 }}>{v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
