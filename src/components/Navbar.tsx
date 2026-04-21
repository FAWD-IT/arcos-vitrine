"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#features",     label: "Fonctionnalités" },
  { href: "#integrations", label: "Connectivité" },
  { href: "#for-who",      label: "Pour qui" },
  { href: "#pricing",      label: "Tarifs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(10,10,10,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease",
      }}
    >
      <div className="c" style={{ display: "flex", alignItems: "center", height: 64, gap: 40 }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image
            src="/logo-arcos.svg"
            alt="Arcos"
            width={96}
            height={28}
            priority
            style={{ filter: "brightness(0) invert(1)", objectFit: "contain" }}
          />
        </Link>

        {/* Nav links */}
        <div
          className="nav-links-desktop"
          style={{ display: "flex", alignItems: "center", gap: 32, flex: 1 }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={{
                fontSize: 13, color: "rgba(255,255,255,0.6)",
                textDecoration: "none", fontWeight: 400,
                transition: "color 0.2s",
                display: "flex", alignItems: "center", gap: 4,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            >
              <span style={{ opacity: 0.35, fontSize: 9 }}>✦</span>
              {label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginLeft: "auto" }}>
          <span className="pill pill--teal" style={{ display: "flex" }}>
            <span className="pill__dot" />
            Disponible
          </span>

          {/* CTA split button */}
          <a href="#demo" className="btn-a" style={{ textDecoration: "none" }}>
            <span className="btn-a__t">Parler à l&apos;équipe</span>
            <span className="btn-a__i">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>

          {/* Mobile burger */}
          <button
            className="mobile-burger"
            onClick={() => setOpen(o => !o)}
            style={{
              display: "none", background: "none", border: "none",
              cursor: "pointer", padding: 4, color: "#fff",
            }}
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {open ? (
                <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              ) : (
                <>
                  <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  <line x1="3" y1="15" x2="19" y2="15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(10,10,10,0.97)", borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "1rem 20px 1.5rem",
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href} href={href}
              onClick={() => setOpen(false)}
              style={{
                display: "block", padding: "10px 0",
                fontSize: 15, color: "rgba(255,255,255,0.8)",
                textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#demo"
            onClick={() => setOpen(false)}
            style={{
              display: "inline-block", marginTop: 16,
              padding: "9px 20px", background: "var(--accent)",
              color: "#fff", borderRadius: "var(--r)",
              fontSize: 13, fontWeight: 500, textDecoration: "none",
            }}
          >
            Parler à l&apos;équipe →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
