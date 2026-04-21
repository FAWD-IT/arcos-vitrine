"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const NAV = [
  { href: "#features",     label: "Fonctionnalités" },
  { href: "#integrations", label: "Connectivité" },
  { href: "#for-who",      label: "Pour qui" },
  { href: "#pricing",      label: "Tarifs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    h();
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(19,21,20,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background 0.3s ease",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div
        className="c"
        style={{
          height: 56,
          display: "flex",
          alignItems: "center",
          gap: 32,
        }}
      >
        {/* Logo text */}
        <Link
          href="/"
          style={{
            fontFamily: "'PP Neue Montreal', Arial, sans-serif",
            fontWeight: 500,
            fontSize: 15.875,
            color: "var(--white)",
            textDecoration: "none",
            letterSpacing: "0.04em",
            flexShrink: 0,
          }}
        >
          ARCOS
        </Link>

        {/* Nav links desktop */}
        <div
          className="nav-desktop"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            flex: 1,
          }}
        >
          {NAV.map((l, i) => (
            <span key={l.href} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && (
                <span style={{ color: "rgba(255,255,255,0.12)", marginInline: 14, fontSize: 12 }}>|</span>
              )}
              <a
                href={l.href}
                style={{
                  fontSize: 15.875,
                  fontWeight: 500,
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--white)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              >
                {l.label}
              </a>
            </span>
          ))}
        </div>

        {/* Right: CTA + status */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: "auto" }}>
          {/* Status: Online */}
          <span
            className="status-desktop"
            style={{
              fontSize: 12,
              color: "var(--muted)",
              display: "flex",
              alignItems: "center",
              gap: 5,
              fontWeight: 500,
            }}
          >
            <span className="status-dot" />
            Disponible
          </span>

          <a href="#demo" className="btn-hg" style={{ textDecoration: "none" }}>
            <span className="arr">→</span> Parler à l&apos;équipe
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="burger"
          onClick={() => setOpen(o => !o)}
          style={{
            display: "none", background: "none", border: "none",
            color: "var(--white)", cursor: "pointer", padding: 4,
          }}
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {open
              ? <path d="M3 3l14 14M17 3L3 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              : <>
                  <line x1="2" y1="6"  x2="18" y2="6"  stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <line x1="2" y1="14" x2="18" y2="14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "rgba(19,21,20,0.97)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "1rem 20px 1.5rem" }}>
          {NAV.map(l => (
            <a
              key={l.href} href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block", padding: "10px 0",
                fontSize: 15.875, fontWeight: 500,
                color: "var(--text)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a href="#demo" onClick={() => setOpen(false)} className="btn-hg" style={{ marginTop: 16, textDecoration: "none", display: "inline-flex" }}>
            <span className="arr">→</span> Parler à l&apos;équipe
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .status-desktop { display: none !important; }
          .burger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
