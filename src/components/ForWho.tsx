"use client";

const PROFILES = [
  {
    role: "Responsable de production",
    desc: "Vision temps réel de toute la ligne. Suivi des KPIs, alertes critiques, et rapports quotidiens en automatique.",
    sectors: ["Automobile", "Agroalimentaire", "Énergie"],
    accent: true,
  },
  {
    role: "Technicien de maintenance",
    desc: "Historique complet des pannes, tendances machine, et alertes préventives avant que ça casse.",
    sectors: ["Mécanique", "Électrotechnique"],
    accent: false,
  },
  {
    role: "Directeur technique",
    desc: "Tableau de bord exécutif multi-sites, suivi OEE, et export des données pour reporting auprès du comité.",
    sectors: ["Industrie 4.0", "PME / ETI"],
    accent: false,
  },
];

export function ForWho() {
  return (
    <section
      id="for-who"
      style={{ background: "var(--light-bg)", borderTop: "1px solid var(--bd-light)" }}
    >
      <div className="c sp">
        <p className="kicker kicker--dark"><span className="kicker__sym">✦</span> Pour qui</p>
        <h2 className="title-d" style={{ maxWidth: 560, marginBottom: "3.5rem" }}>
          Pensé pour ceux<br />qui font tourner l&apos;usine.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            marginBottom: "4rem",
          }}
          className="forwho-grid"
        >
          {PROFILES.map(p => (
            <div
              key={p.role}
              style={{
                background: "var(--white)",
                border: "1px solid var(--bd-light)",
                borderTop: p.accent ? `3px solid var(--accent)` : "1px solid var(--bd-light)",
                borderRadius: 16,
                padding: "2rem",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.07)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
            >
              <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--text-dark)", lineHeight: 1.3, margin: "0 0 0.75rem" }}>
                {p.role}
              </h3>
              <p style={{ fontSize: 14, color: "var(--text-muted-d)", lineHeight: 1.7, margin: "0 0 1.5rem" }}>
                {p.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.sectors.map(s => (
                  <span
                    key={s}
                    style={{
                      fontSize: 11, padding: "3px 10px",
                      borderRadius: 999, background: "var(--white)",
                      border: "1px solid var(--bd-light)",
                      color: "var(--text-muted-d)", letterSpacing: "0.04em",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <p style={{ fontSize: 15, color: "var(--text-muted-d)", margin: 0 }}>
            Votre profil n&apos;est pas dans la liste ?
          </p>
          <a href="#demo" className="btn-ad" style={{ textDecoration: "none" }}>
            <span className="btn-ad__t">Parlons-en</span>
            <span className="btn-ad__i">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .forwho-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
