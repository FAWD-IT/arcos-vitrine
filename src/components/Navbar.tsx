"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Intégrations",    href: "#integrations" },
  { label: "Tarifs",          href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "var(--black)", borderBottom: "1px solid var(--border-dark)" }}
    >
      <div className="c flex h-[60px] items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center shrink-0">
          <img
            src="/logo-arcos.svg"
            alt="Arcos"
            className="h-7 w-auto max-w-[130px] object-contain brightness-0 invert"
          />
        </a>

        {/* Links — desktop */}
        <div className="hidden items-center gap-0 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-4 py-2 text-[13px] transition-colors duration-150"
              style={{ color: "var(--text-muted-light)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted-light)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right — desktop */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Pill teal — disponibilité */}
          <span className="pill pill--teal">
            <span className="pill__dot" />
            Disponible
          </span>
          {/* CTA */}
          <a
            href="#demo"
            className="inline-flex items-center gap-0 text-[13px] font-medium cursor-pointer"
          >
            <span
              className="px-4 py-2 transition-colors duration-150"
              style={{
                border: "1px solid rgba(255,255,255,0.18)",
                borderRight: "none",
                borderRadius: "var(--r-md) 0 0 var(--r-md)",
                color: "#fff",
              }}
            >
              Parler à l&apos;équipe
            </span>
            <span
              className="flex items-center justify-center px-3 py-2"
              style={{
                background: "var(--teal)",
                borderRadius: "0 var(--r-md) var(--r-md) 0",
                color: "#fff",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Burger — mobile */}
        <button
          className="cursor-pointer p-1 transition-colors md:hidden"
          style={{ color: "var(--text-muted-light)" }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div
          className="border-t px-5 pb-6 pt-4 md:hidden"
          style={{ background: "var(--black)", borderColor: "var(--border-dark)" }}
        >
          <div className="flex flex-col gap-1 mb-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] transition-colors"
                style={{ color: "var(--text-muted-light)" }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <a href="#demo" className="btn-arrow w-full justify-center">
            <span className="btn-arrow__text flex-1 text-center">Parler à l&apos;équipe</span>
            <span className="btn-arrow__icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      )}
    </nav>
  );
}
