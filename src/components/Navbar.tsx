"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Intégrations",    href: "#integrations" },
  { label: "Tarifs",          href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E7EB]">
      <div className="container-arcos flex h-[64px] items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/logo-arcos.svg"
            alt="Arcos"
            className="h-8 w-auto max-w-[140px] object-contain object-left"
          />
          <span className="sr-only">Arcos</span>
        </a>

        {/* Nav links — desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-4 py-2 text-[14px] text-[#6B7280] transition-colors duration-150 hover:text-[#0A0A0A] rounded-[6px] hover:bg-[#F3F4F6]"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA — desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <a href="#demo" className="text-[14px] text-[#6B7280] transition-colors hover:text-[#0A0A0A]">
            Connexion
          </a>
          <a href="#demo" className="btn-primary">
            Demander une démo
          </a>
        </div>

        {/* Burger — mobile */}
        <button
          className="cursor-pointer p-1 text-[#6B7280] transition-colors hover:text-[#0A0A0A] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-[#E5E7EB] bg-white px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-[6px] px-3 py-2.5 text-[15px] text-[#6B7280] transition-colors hover:bg-[#F3F4F6] hover:text-[#0A0A0A]"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a href="#demo" className="btn-primary mt-4 w-full justify-center">
            Demander une démo
          </a>
        </div>
      )}
    </nav>
  );
}
