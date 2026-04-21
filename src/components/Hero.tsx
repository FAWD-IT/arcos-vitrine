"use client";
export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        background: "var(--black)",
        overflow: "hidden",
      }}
    >
      {/* Subtle depth gradient */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background:
            "radial-gradient(ellipse 80% 60% at 70% 30%, #1a1a1a 0%, transparent 60%)," +
            "radial-gradient(ellipse 50% 40% at 20% 80%, rgba(20,169,207,0.03) 0%, transparent 60%)",
        }}
      />

      {/* Grain texture overlay */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.025,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      {/* Content: positionné en bas-gauche */}
      <div className="c" style={{ paddingBottom: "5rem", position: "relative", zIndex: 2 }}>

        {/* Kicker */}
        <p className="kicker kicker--light" style={{ marginBottom: "1.5rem" }}>
          <span className="kicker__sym">✦</span>
          Supervision industrielle MQTT
        </p>

        {/* H1 — pleine largeur, blanc */}
        <h1
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: "-0.04em",
            color: "#ffffff",
            margin: 0,
            maxWidth: "820px",
          }}
        >
          Vos machines parlent.<br />Vous écoutez.
        </h1>

        {/* Sous-titre + CTA */}
        <div
          style={{
            marginTop: "2.5rem",
            display: "flex",
            alignItems: "flex-end",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
              color: "rgba(255,255,255,0.50)",
              lineHeight: 1.6,
              maxWidth: 420,
              margin: 0,
            }}
          >
            Arcos centralise vos données MQTT en temps réel — alertes,
            historique et IA — dans une interface pensée pour l&apos;atelier.
          </p>

          <a href="#demo" className="btn-a" style={{ textDecoration: "none", flexShrink: 0 }}>
            <span className="btn-a__t">Obtenir une démo</span>
            <span className="btn-a__i">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute", bottom: "2rem", right: "2.5rem",
          color: "rgba(255,255,255,0.2)", fontSize: 11,
          letterSpacing: "0.15em", textTransform: "uppercase",
          display: "flex", alignItems: "center", gap: 8, zIndex: 2,
        }}
      >
        Défiler
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 2v10M3 9l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
