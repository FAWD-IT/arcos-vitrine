"use client";
import { AnimateIn } from "./AnimateIn";

const PROFILES = [
  {
    role: "Responsable de production",
    desc: "Vision temps réel de toute la ligne. Suivi des KPIs, alertes critiques et rapports quotidiens automatiques.",
    sectors: ["Automobile", "Agroalimentaire", "Énergie"],
  },
  {
    role: "Technicien de maintenance",
    desc: "Historique complet des pannes, tendances machine et alertes préventives avant que ça casse.",
    sectors: ["Mécanique", "Électrotechnique"],
  },
  {
    role: "Directeur technique",
    desc: "Tableau de bord exécutif multi-sites, suivi OEE et export des données pour reporting dirigeant.",
    sectors: ["Industrie 4.0", "PME / ETI"],
  },
];

export function ForWho() {
  return (
    <>
      <div className="line" />
      <section id="for-who" className="c sp">
        {/* Header */}
        <AnimateIn as="div" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginBottom: "4rem" }} className="forwho-header">
          <h2 className="h-statement">
            Pensé pour ceux <span className="dim">qui font tourner l&apos;usine.</span>
          </h2>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <p style={{ fontSize: 15.875, color: "var(--text)", lineHeight: 1.6, fontWeight: 500 }}>
              Qu&apos;il s&apos;agisse d&apos;un opérateur terrain ou d&apos;un DSI, Arcos adapte son niveau de détail et ses accès à chaque profil.
            </p>
          </div>
        </AnimateIn>

        {/* Profiles: row layout */}
        {PROFILES.map(p => (
          <div
            key={p.role}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 40,
              borderTop: "1px solid var(--border)",
              paddingTop: "2rem",
              paddingBottom: "2rem",
              alignItems: "flex-start",
              transition: "border-color 0.2s",
            }}
            className="profile-row"
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderTopColor = "var(--border-hover)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderTopColor = "var(--border)"; }}
          >
            <h3 className="h-section">{p.role}</h3>
            <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.6, fontWeight: 500 }}>{p.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {p.sectors.map(s => (
                <span
                  key={s}
                  style={{
                    fontSize: 11, padding: "3px 10px",
                    border: "1px solid var(--border)",
                    borderRadius: 3,
                    color: "var(--muted)",
                    fontWeight: 500, letterSpacing: "0.04em",
                    transition: "border-color 0.2s",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
        <div className="line" />

        <div style={{ paddingTop: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 15.875, color: "var(--muted)", fontWeight: 500 }}>Votre profil n&apos;est pas listé ?</p>
          <a href="#demo" className="btn-hg" style={{ textDecoration: "none" }}>
            <span className="arr">→</span> Parlons-en
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .forwho-header { grid-template-columns: 1fr !important; }
          .profile-row { grid-template-columns: 1fr !important; gap: 1rem !important; }
        }
      `}</style>
    </>
  );
}
