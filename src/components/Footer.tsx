"use client";
import Image from "next/image";

const LINKS = {
  "Produit":  [
    { href: "#features",     label: "Fonctionnalités" },
    { href: "#integrations", label: "Connectivité"    },
    { href: "#pricing",      label: "Tarifs"          },
  ],
  "Équipe":  [
    { href: "https://fawd.be",          label: "FAWD Studio"    },
    { href: "https://github.com/FAWD-IT", label: "GitHub"       },
    { href: "#demo",                    label: "Contact"         },
  ],
  "Légal":    [
    { href: "#",  label: "Mentions légales"    },
    { href: "#",  label: "Confidentialité"     },
    { href: "#",  label: "CGU"                 },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--black)", borderTop: "1px solid var(--bd-dark)", position: "relative", overflow: "hidden" }}>

      {/* Giant ARCOS watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "clamp(6rem, 18vw, 14rem)",
          fontWeight: 800,
          letterSpacing: "-0.05em",
          color: "#fff",
          opacity: 0.04,
          whiteSpace: "nowrap",
          userSelect: "none",
          lineHeight: 1,
          pointerEvents: "none",
        }}
      >
        ARCOS
      </div>

      <div className="c" style={{ paddingTop: "5rem", paddingBottom: "3rem", position: "relative", zIndex: 1 }}>

        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr repeat(3, 1fr)",
            gap: "3rem",
            paddingBottom: "3.5rem",
            borderBottom: "1px solid var(--bd-dark)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Image
              src="/logo-arcos.svg"
              alt="Arcos"
              width={88}
              height={26}
              style={{ filter: "brightness(0) invert(1)", objectFit: "contain", marginBottom: "1rem", display: "block" }}
            />
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 240, margin: 0 }}>
              Supervision industrielle temps réel — MQTT, alertes, historique et IA, en une seule plateforme.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([col, items]) => (
            <div key={col}>
              <h4 style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: "0.10em", textTransform: "uppercase", margin: "0 0 1.25rem" }}>
                {col}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map(l => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", margin: 0 }}>
            © {year} FAWD SRL — Arcos. Tous droits réservés.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {[
              { href: "https://github.com/FAWD-IT", label: "GitHub" },
              { href: "https://linkedin.com",       label: "LinkedIn" },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > *:first-child { grid-column: 1 / -1; }
        }
      `}</style>
    </footer>
  );
}
