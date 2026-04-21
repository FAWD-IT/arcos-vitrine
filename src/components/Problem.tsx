"use client";

const LOGOS = [
  { name: "Siemens",    abbr: "SIE" },
  { name: "Schneider",  abbr: "SE"  },
  { name: "Rockwell",   abbr: "ROK" },
  { name: "Bosch",      abbr: "BSH" },
  { name: "ABB",        abbr: "ABB" },
  { name: "Mitsubishi", abbr: "MEL" },
  { name: "Fanuc",      abbr: "FAN" },
];

const PROBLEMS = [
  {
    num: "01",
    title: "Données dispersées",
    desc: "Chaque machine parle son propre protocole. Il faut 3 outils différents pour avoir une vue globale — et encore, elle est déjà obsolète.",
  },
  {
    num: "02",
    title: "Alertes ignorées",
    desc: "Les dépassements de seuil restent dans les logs. Sans système centralisé, une alerte critique se perd entre deux équipes.",
  },
  {
    num: "03",
    title: "Historique inaccessible",
    desc: "L'analyse post-incident prend des jours. Les données sont là, mais personne ne sait où les trouver ni comment les lire.",
  },
  {
    num: "04",
    title: "Maintenance réactive",
    desc: "On répare quand ça casse. Sans visibilité temps réel ni tendances, la maintenance préventive reste un vœu pieux.",
  },
];

export function Problem() {
  return (
    <>
      {/* Logo band */}
      <section style={{ background: "var(--black-1)", borderTop: "1px solid var(--bd-dark)" }}>
        <div className="c" style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 0, overflowX: "auto" }}>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.09em", textTransform: "uppercase", whiteSpace: "nowrap", marginRight: 32, flexShrink: 0 }}>
              Compatible avec
            </p>
            {LOGOS.map((l, i) => (
              <div key={l.name} style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.08)", marginInline: 20 }} />}
                <span
                  style={{
                    fontSize: 12, fontWeight: 600, letterSpacing: "0.08em",
                    color: "rgba(255,255,255,0.45)", textTransform: "uppercase",
                    whiteSpace: "nowrap", flexShrink: 0,
                  }}
                >
                  {l.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section style={{ background: "var(--light-bg)", borderTop: "1px solid var(--bd-light)" }}>
        <div className="c sp">
          <p className="kicker kicker--dark"><span className="kicker__sym">✦</span> Le problème</p>
          <h2 className="title-d" style={{ maxWidth: 560, marginBottom: "3.5rem" }}>
            Ce que l&apos;industrie vit<br />sans couche temps réel.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
            }}
          >
            {PROBLEMS.map(p => (
              <div
                key={p.num}
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--bd-light)",
                  borderRadius: 16,
                  padding: "2.5rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
              >
                <p
                  style={{
                    fontSize: 11, fontWeight: 600,
                    color: "var(--accent)", letterSpacing: "0.1em",
                    fontFamily: "'JetBrains Mono', monospace",
                    margin: "0 0 1rem",
                  }}
                >
                  {p.num}
                </p>
                <h3
                  style={{
                    fontSize: 20, fontWeight: 600,
                    color: "var(--text-dark)", lineHeight: 1.3,
                    margin: "0 0 0.75rem",
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-muted-d)", lineHeight: 1.7, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
