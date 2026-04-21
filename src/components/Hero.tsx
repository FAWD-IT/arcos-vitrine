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

        {/* Même grille 2×2 fantôme + photo + overlay survol (grain, texte, CTA) */}
        <div className="hero-photo-outer anim-load anim-load-2">
          <div className="hero-photo-inner">
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

          <div className="hero-photo-overlay" role="region" aria-label="Invitation à contacter Arcos">
            <span className="hero-photo-grain" aria-hidden />
            <div className="hero-photo-overlay-content">
              <p className="hero-photo-overlay-text">
                Vous aussi, vous pourriez <span className="hero-photo-overlay-accent">connecter votre parc</span> à
                Arcos.
              </p>
              <HGButton href="#contact">Parler à l&apos;équipe</HGButton>
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
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          box-shadow:
            0 28px 56px rgba(0, 0, 0, 0.42),
            0 0 0 1px rgba(255, 255, 255, 0.07);
        }
        .hero-photo-inner {
          position: relative;
          z-index: 0;
        }
        /* Overlay : visible au survol (appareils avec hover) */
        .hero-photo-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(1rem, 3vw, 1.5rem);
          opacity: 0;
          visibility: hidden;
          transition:
            opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            visibility 0s linear 0.4s;
          pointer-events: none;
          background: linear-gradient(
            165deg,
            rgba(19, 21, 20, 0.25) 0%,
            rgba(19, 21, 20, 0.55) 45%,
            rgba(8, 45, 68, 0.5) 100%
          );
        }
        @media (hover: hover) and (pointer: fine) {
          .hero-photo-outer:hover .hero-photo-overlay {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transition:
              opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1),
              visibility 0s linear 0s;
          }
        }
        .hero-photo-grain {
          position: absolute;
          inset: -28%;
          opacity: 0.38;
          mix-blend-mode: overlay;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E");
          background-size: 140px 140px;
          animation: heroGrain 0.48s steps(5) infinite;
          will-change: transform;
        }
        @keyframes heroGrain {
          0% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(-1.2%, 1.4%) rotate(0.12deg); }
          40% { transform: translate(1.1%, -0.8%) rotate(-0.1deg); }
          60% { transform: translate(-0.7%, -1.1%) rotate(0.08deg); }
          80% { transform: translate(1%, 0.6%) rotate(-0.05deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        .hero-photo-overlay-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          max-width: 18rem;
          text-align: center;
        }
        .hero-photo-overlay-text {
          margin: 0;
          font-family: 'PP Neue Montreal', Arial, sans-serif;
          font-size: clamp(0.95rem, 1.8vw, 1.125rem);
          font-weight: 500;
          line-height: 1.45;
          color: rgba(241, 241, 241, 0.92);
          letter-spacing: -0.01em;
        }
        .hero-photo-overlay-accent {
          color: #f1f1f1;
          font-weight: 500;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-photo-grain {
            animation: none !important;
            opacity: 0.22;
          }
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
