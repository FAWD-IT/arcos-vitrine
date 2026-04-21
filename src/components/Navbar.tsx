"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { HGArrow } from "./TiltCard";

const NAV = [
  { href: "#features",     label: "Fonctionnalités" },
  { href: "#integrations", label: "Connectivité" },
  { href: "#for-who",      label: "Pour qui" },
  { href: "#pricing",      label: "Tarifs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  // ref toujours à jour pour les event handlers (évite closure périmée)
  const scrolledRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    const h = () => {
      const s = window.scrollY > 50;
      scrolledRef.current = s;
      setScrolled(s);
    };
    window.addEventListener("scroll", h, { passive: true });
    h();
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      aria-label="Navigation principale"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        padding: "12px 20px",
        pointerEvents: "none",
      }}
    >
      {/* Pill container — exactement comme HG */}
      <div
        style={{
          width: "100%",
          maxWidth: scrolled ? "1080px" : "1300px",
          background: scrolled ? "#EAEAEA" : "rgb(21,22,21)",
          border: scrolled
            ? "1.5px solid #E3E3E3"
            : "1.5px solid rgba(255,255,255,0.07)",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          height: 62,
          padding: "0 20px 0 32px",
          transform: scrolled ? "scaleY(0.94)" : "scaleY(0.98)",
          transition:
            "max-width 0.45s cubic-bezier(0.4,0,0.2,1), background 0.45s cubic-bezier(0.4,0,0.2,1), border-color 0.45s cubic-bezier(0.4,0,0.2,1), transform 0.45s cubic-bezier(0.4,0,0.2,1)",
          pointerEvents: "auto",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "'PP Neue Montreal', Arial, sans-serif",
            fontWeight: 500,
            fontSize: 15,
            color: scrolled ? "#131514" : "#f1f1f1",
            textDecoration: "none",
            letterSpacing: "0.06em",
            flexShrink: 0,
            transition: "color 0.35s ease",
          }}
        >
          ARCOS
        </Link>

        {/* Links desktop */}
        <div
          className="nav-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            marginLeft: 32,
            flex: 1,
          }}
        >
          {NAV.map((l, i) => (
            <span key={l.href} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && (
                <span
                  style={{
                    color: scrolled ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.10)",
                    marginInline: 14,
                    fontSize: 11,
                    transition: "color 0.35s ease",
                  }}
                >
                  |
                </span>
              )}
              <a
                href={l.href}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: scrolled ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "none" : "translateY(6px)",
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.color = scrolledRef.current ? "#131514" : "#f1f1f1")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.color = scrolledRef.current
                    ? "rgba(0,0,0,0.45)"
                    : "rgba(255,255,255,0.45)")
                }
              >
                {l.label}
              </a>
            </span>
          ))}
        </div>

        {/* Right: status + CTA */}
        <div className="nav-right" style={{ display: "flex", alignItems: "center", gap: 14, marginLeft: "auto" }}>
          <span
            style={{
              fontSize: 12,
              color: scrolled ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.35)",
              display: "flex",
              alignItems: "center",
              gap: 5,
              fontWeight: 500,
              transition: "color 0.35s ease",
            }}
          >
            <span className="status-dot" />
            Disponible
          </span>

          <a
            href="#demo"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              fontWeight: 500,
              /* scrolled=true → pill claire → bouton sombre (bg #131514, texte blanc)  */
              /* scrolled=false → pill sombre → bouton clair (bg #f1f1f1, texte sombre) */
              color:      scrolled ? "#f1f1f1" : "#131514",
              background: scrolled ? "#131514" : "#f1f1f1",
              border:     scrolled ? "1.5px solid #131514" : "1.5px solid #f1f1f1",
              borderRadius: 3,
              padding: "10px 14px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "background 0.22s ease, color 0.22s ease, border-color 0.22s ease",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              const s = scrolledRef.current;
              /* hover = gris intermédiaire, pas transparent */
              el.style.background  = s ? "#2a2a28" : "#d8d8d6";
              el.style.color       = s ? "#f1f1f1" : "#131514";
              el.style.borderColor = s ? "#2a2a28" : "#d8d8d6";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              const s = scrolledRef.current;
              el.style.background  = s ? "#131514" : "#f1f1f1";
              el.style.color       = s ? "#f1f1f1" : "#131514";
              el.style.borderColor = s ? "#131514"  : "#f1f1f1";
            }}
          >
            Parler à l&apos;équipe
            <HGArrow size={11} color="currentColor" />
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="burger"
          onClick={() => setOpen(o => !o)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: scrolled ? "#131514" : "#f1f1f1",
            cursor: "pointer",
            padding: 4,
            marginLeft: "auto",
          }}
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {open ? (
              <path d="M3 3l14 14M17 3L3 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            ) : (
              <>
                <line x1="2" y1="6"  x2="18" y2="6"  stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="2" y1="14" x2="18" y2="14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 4px)",
            left: 20,
            right: 20,
            background: "rgb(21,22,21)",
            border: "1.5px solid rgba(255,255,255,0.08)",
            borderRadius: 8,
            padding: "1rem 20px 1.5rem",
            pointerEvents: "auto",
          }}
        >
          {NAV.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "10px 0",
                fontSize: 15,
                fontWeight: 500,
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#demo"
            onClick={() => setOpen(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginTop: 16,
              fontSize: 14,
              fontWeight: 500,
              color: "#f1f1f1",
              border: "1.5px solid rgba(255,255,255,0.18)",
              borderRadius: 5,
              padding: "8px 16px",
              textDecoration: "none",
            }}
          >
            <span style={{ opacity: 0.6, fontSize: 12 }}>→</span>
            Parler à l&apos;équipe
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-right { display: none !important; }
          .burger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
