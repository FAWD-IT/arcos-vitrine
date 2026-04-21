"use client";

const LINKS = [
  { href: "#features",      label: "Fonctionnalités" },
  { href: "#integrations",  label: "Connectivité" },
  { href: "#for-who",       label: "Pour qui" },
  { href: "#pricing",       label: "Tarifs" },
  { href: "#demo",          label: "Contact" },
  { href: "https://fawd.be",label: "FAWD Studio" },
  { href: "https://github.com/FAWD-IT", label: "GitHub" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ position: "relative", overflow: "hidden" }}>
      {/* Logo band - partenaires */}
      <div className="line" />
      <section className="c spm">
        <div style={{ display: "flex", alignItems: "center", gap: 0, overflowX: "auto" }}>
          {["Siemens", "Schneider Electric", "Rockwell", "ABB", "Mitsubishi Electric", "Bosch"].map((b, i) => (
            <span key={b} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              {i > 0 && <span style={{ color: "rgba(255,255,255,0.06)", marginInline: 24 }}>|</span>}
              <span style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.18)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{b}</span>
            </span>
          ))}
        </div>
      </section>

      {/* Top footer info bar */}
      <div className="line" />
      <div
        className="c"
        style={{
          paddingTop: "1.75rem",
          paddingBottom: "1.75rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <p style={{ fontSize: 12, color: "var(--muted)", fontWeight: 500 }}>
          © {year} FAWD SRL — Arcos. Tous droits réservés.
        </p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {LINKS.map(l => (
            <a
              key={l.label} href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{ fontSize: 12, color: "var(--muted)", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Status + location bar */}
      <div className="line" />
      <div
        className="c"
        style={{
          paddingTop: "1.5rem",
          paddingBottom: "2rem",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.12)", fontWeight: 500, lineHeight: 1.6 }}>
            Lun–Ven, 9h – 18h<br />
            Week-end sur RDV
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: 12, color: "var(--muted)", fontWeight: 500 }}>
            Bruxelles, Belgique
          </p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.15)", fontWeight: 500 }}>
            50.8503° N, 4.3517° E
          </p>
        </div>
      </div>

      {/* Giant ARCOS watermark */}
      <div
        aria-hidden="true"
        style={{
          textAlign: "center",
          fontSize: "clamp(8rem, 22vw, 18rem)",
          fontFamily: "'PP Neue Montreal', Arial, sans-serif",
          fontWeight: 500,
          color: "var(--white)",
          opacity: 0.045,
          letterSpacing: "-0.04em",
          lineHeight: 0.85,
          userSelect: "none",
          pointerEvents: "none",
          overflow: "hidden",
          paddingBottom: "0.5rem",
        }}
      >
        ARCOS
      </div>
    </footer>
  );
}
