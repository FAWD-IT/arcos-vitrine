"use client";
import Image from "next/image";
import { HGButton } from "./TiltCard";

/* Grille fantôme : mêmes bordures / padding que les stats d’origine pour conserver l’emprise exacte */
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
      {/* Top : titre + photo — colonnes resserrées, alignement vertical, cadre photo adouci */}
      <div className="hero-top">
        <h1 className="h-hero hero-headline anim-load anim-load-2">
          Supervisez vos machines.<br />
          Anticipez les pannes.{" "}
          <span style={{ color: "var(--muted)" }}>Décidez vite.</span>
        </h1>

        {/* Même grille 2×2 fantôme ; cadre visuel autour de la photo */}
        <div className="hero-photo-outer anim-load anim-load-2">
          <div
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 0,
            }}
          >
          {STATS.map((s, i) => (
            <div
              key={s.value}
              aria-hidden
              style={{
                borderTop: "1px solid var(--border)",
                borderLeft: i % 2 === 1 ? "1px solid var(--border)" : "none",
                padding: "1.75rem 1.5rem",
                visibility: "hidden",
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
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            <Image
              src="/hero-technician.png"
              alt="Technicien en intervention sur une armoire électrique industrielle"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              style={{ objectFit: "cover", objectPosition: "52% 42%" }}
              priority
            />
          </div>
        </div>
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
        .hero-top {
          flex: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
          column-gap: clamp(1rem, 3vw, 1.75rem);
          row-gap: 2rem;
          align-items: center;
          padding-top: clamp(3.5rem, 8vh, 5.25rem);
        }
        .hero-headline {
          margin: 0;
          max-width: 16em;
          padding-right: clamp(0rem, 1.5vw, 0.75rem);
        }
        .hero-photo-outer {
          border-radius: 10px;
          overflow: hidden;
          box-shadow:
            0 28px 56px rgba(0, 0, 0, 0.42),
            0 0 0 1px rgba(255, 255, 255, 0.07);
        }
        @media (max-width: 768px) {
          .hero-top {
            grid-template-columns: 1fr !important;
            padding-top: 4.5rem !important;
            align-items: stretch !important;
          }
          .hero-headline { max-width: none !important; padding-right: 0 !important; }
          .hero-bottom { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 480px) { section { padding-inline: 20px !important; } }
      `}</style>
    </section>
  );
}
