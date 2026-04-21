"use client";
import { HGButton } from "./TiltCard";

const STATS = [
  { value: "99.7%", label: "Uptime garanti" },
  { value: "5j",    label: "Déploiement" },
  { value: "48+",   label: "Sites live" },
  { value: "<1s",   label: "Latence" },
];

export function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "0 40px",
        paddingTop: 56,
        maxWidth: 1200,
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* Top: headline + stats */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "flex-start",
          paddingTop: "5.5rem",
        }}
        className="hero-top"
      >
        {/* H1 top-left */}
        <h1 className="h-hero anim-load anim-load-2">
          Supervisez vos machines.<br />
          Anticipez les pannes.{" "}
          <span style={{ color: "var(--muted)" }}>Décidez vite.</span>
        </h1>

        {/* Stats grid top-right */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
          {STATS.map((s, i) => (
            <div
              key={s.value}
              className={`anim-load anim-load-${i + 2}`}
              style={{
                borderTop: "1px solid var(--border)",
                borderLeft: i % 2 === 1 ? "1px solid var(--border)" : "none",
                padding: "1.75rem 1.5rem",
              }}
            >
              <p className="stat-giant">{s.value}</p>
              <p
                style={{
                  fontSize: 11,
                  color: "var(--muted)",
                  marginTop: 6,
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: status + description + CTAs */}
      <div
        style={{
          paddingBottom: "4rem",
          paddingTop: "3rem",
          borderTop: "1px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "flex-end",
        }}
        className="hero-bottom"
      >
        <div className="anim-load anim-load-4">
          <p
            style={{
              fontSize: 15.875,
              color: "var(--text)",
              lineHeight: 1.6,
              maxWidth: 400,
              fontWeight: 500,
            }}
          >
            Arcos connecte vos machines industrielles, centralise mesures
            et alarmes en temps réel, et met l&apos;IA au service
            de vos équipes terrain — sans cycle SCADA classique.
          </p>
        </div>

        <div
          className="anim-load anim-load-5"
          style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
        >
          <HGButton href="#contact">Obtenir une démo</HGButton>
          <HGButton href="#contact" ghost>Voir la plateforme</HGButton>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-top    { grid-template-columns: 1fr !important; padding-top: 5rem !important; }
          .hero-bottom { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 480px) { section { padding-inline: 20px !important; } }
      `}</style>
    </section>
  );
}
