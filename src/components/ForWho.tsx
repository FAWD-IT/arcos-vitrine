"use client";
import { AnimateIn } from "./AnimateIn";
import { HGButton } from "./TiltCard";

const PROFILES = [
  {
    role: "Directeur d'usine & responsable maintenance",
    desc: "Vision consolidée de tout le parc sans déployer un SCADA lourd. Alertes critiques, rapports automatiques et KPIs en temps réel — accessibles depuis n'importe où, sans dépendance à l'équipe IT.",
    sectors: ["Agroalimentaire", "Énergie", "Automobile", "Chimie"],
  },
  {
    role: "Ingénieur automation & intégrateur",
    desc: "Vous configurez des passerelles industrielles (Ewon Flexy ou équivalent) ? Arcos prend le relais côté cloud : historique, alarmes, analyse P&ID et IA disponibles dès la connexion de l'appareil.",
    sectors: ["Automatisme", "Électrotechnique", "Bureau d'études"],
  },
  {
    role: "PME industrielle multi-sites",
    desc: "Gérez plusieurs sites ou plusieurs clients dans une seule plateforme avec séparation stricte des données par organisation. Chaque entité ne voit que ses machines et ses utilisateurs.",
    sectors: ["Multi-sites", "Multi-tenant", "PME / ETI"],
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
            Pensé pour ceux <span className="dim">qui gèrent des machines,</span> pas des serveurs.
          </h2>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <p style={{ fontSize: 15.875, color: "var(--text)", lineHeight: 1.6, fontWeight: 500 }}>
              Du responsable maintenance à l&apos;intégrateur terrain, Arcos adapte son niveau de détail et ses accès à chaque profil — sans formation longue.
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
          <HGButton href="#demo">Parlons-en</HGButton>
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
