"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { id: "solution" as const, label: "Solution", hasDropdown: true },
  { id: "for-who" as const, label: "Pour qui", hasDropdown: true },
  { id: "pricing" as const, label: "Pricing", href: "#pricing", hasDropdown: false },
  { id: "integrations" as const, label: "Intégrations", href: "#integrations", hasDropdown: false },
] as const;

function IlluHistorique() {
  return (
    <svg viewBox="0 0 120 72" className="h-[72px] w-full text-white/[0.08]" aria-hidden>
      <path d="M8 52 L28 38 L48 44 L72 22 L92 30 L112 18" fill="none" stroke="rgba(20,169,207,0.55)" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 52 L28 38 L48 44 L72 22 L92 30 L112 18" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3 5" opacity="0.35" />
      <rect x="36" y="8" rx="4" width="48" height="14" fill="white" opacity="0.06" />
      <text x="42" y="18" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="system-ui">
        7j → 14j
      </text>
    </svg>
  );
}

function IlluAlertes() {
  return (
    <svg viewBox="0 0 120 72" className="h-[72px] w-full text-white/[0.08]" aria-hidden>
      <path d="M10 48 Q40 12 110 40" fill="none" stroke="white" strokeWidth="1.25" opacity="0.22" strokeLinecap="round" />
      <line x1="78" y1="28" x2="78" y2="52" stroke="rgba(250,204,21,0.55)" strokeWidth="1" strokeDasharray="2 3" />
      <circle cx="78" cy="26" r="3" fill="rgba(250,204,21,0.85)" />
      <rect x="68" y="6" rx="3" width="44" height="14" fill="rgba(250,204,21,0.12)" stroke="rgba(250,204,21,0.25)" strokeWidth="0.5" />
      <text x="72" y="15" fill="rgba(250,204,21,0.75)" fontSize="7" fontWeight="600" fontFamily="system-ui">
        SEUIL
      </text>
    </svg>
  );
}

function IlluIA() {
  return (
    <svg viewBox="0 0 120 72" className="h-[72px] w-full" aria-hidden>
      {[
        [24, 22],
        [60, 14],
        [96, 28],
        [44, 52],
        [78, 58],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={i === 1 ? "rgba(20,169,207,0.5)" : "rgba(255,255,255,0.12)"} stroke="rgba(20,169,207,0.35)" strokeWidth="0.5" />
      ))}
      <path d="M24 22 L60 14 M96 28 L60 14 M44 52 L24 22 M78 58 L44 52 M78 58 L96 28" stroke="white" strokeWidth="0.75" opacity="0.2" />
      <rect x="14" y="58" width="92" height="4" rx="2" fill="white" opacity="0.06" />
      <rect x="14" y="58" width="36" height="4" rx="2" fill="rgba(20,169,207,0.45)" />
    </svg>
  );
}

function IlluTerrain() {
  return (
    <svg viewBox="0 0 120 72" className="h-[72px] w-full" aria-hidden>
      <rect x="14" y="18" width="92" height="40" rx="4" fill="white" opacity="0.04" stroke="white" strokeOpacity="0.1" />
      <path d="M28 46 L48 32 L68 40 L92 24" fill="none" stroke="rgba(20,169,207,0.45)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="48" cy="32" r="3" fill="rgba(20,169,207,0.35)" />
      <circle cx="92" cy="24" r="3" fill="rgba(20,169,207,0.2)" />
    </svg>
  );
}

function IlluBT() {
  return (
    <svg viewBox="0 0 120 72" className="h-[72px] w-full" aria-hidden>
      <rect x="22" y="16" width="76" height="44" rx="3" fill="white" opacity="0.04" />
      <line x1="32" y1="28" x2="88" y2="28" stroke="white" strokeOpacity="0.12" strokeWidth="1" />
      <line x1="32" y1="38" x2="72" y2="38" stroke="white" strokeOpacity="0.12" strokeWidth="1" />
      <line x1="32" y1="48" x2="80" y2="48" stroke="white" strokeOpacity="0.12" strokeWidth="1" />
      <rect x="30" y="24" width="8" height="8" rx="1" fill="rgba(20,169,207,0.25)" />
    </svg>
  );
}

function IlluSecteurs() {
  return (
    <svg viewBox="0 0 120 72" className="h-[72px] w-full" aria-hidden>
      <path d="M60 14 L88 58 L32 58 Z" fill="none" stroke="rgba(20,169,207,0.35)" strokeWidth="1" />
      <circle cx="60" cy="36" r="6" fill="rgba(20,169,207,0.2)" />
      <path d="M24 50 Q60 20 96 50" fill="none" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
    </svg>
  );
}

const solutionMega = [
  {
    href: "#features",
    title: "Dashboard & historique",
    desc: "Courbes, plages temporelles et état live par machine.",
    illu: <IlluHistorique />,
  },
  {
    href: "#features",
    title: "Alertes & seuils",
    desc: "Notifications sur comportement et dérives mesurables.",
    illu: <IlluAlertes />,
  },
  {
    href: "#features",
    title: "Assistant IA",
    desc: "Questions en langage naturel sur vos tags et événements.",
    illu: <IlluIA />,
  },
];

const forWhoMega = [
  {
    href: "#for-who",
    title: "Terrain & production",
    desc: "Opérateurs et responsables ligne : vue opérationnelle.",
    illu: <IlluTerrain />,
  },
  {
    href: "#for-who",
    title: "Bureaux techniques",
    desc: "Maintenance, planning et analyse sur la même donnée.",
    illu: <IlluBT />,
  },
  {
    href: "#for-who",
    title: "Process & infrastructure",
    desc: "Eau, énergie, sites distants : supervision homogène.",
    illu: <IlluSecteurs />,
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mega, setMega] = useState<null | "solution" | "for-who">(null);
  const [mobileSub, setMobileSub] = useState<null | "solution" | "for-who">(null);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-background/95 backdrop-blur-xl"
      onMouseLeave={() => setMega(null)}
    >
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="flex h-[104px] shrink-0 items-center justify-between">
          <a href="#" className="flex h-full max-h-full shrink-0 items-center py-1">
            <img
              src="/logo-arcos.svg"
              alt="Arcos"
              className="max-h-[96px] w-auto max-w-[min(92vw,620px)] object-contain object-left brightness-0 invert"
            />
            <span className="sr-only">Arcos</span>
          </a>

          <div className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.id}
                  className="relative"
                  onMouseEnter={() =>
                    setMega(link.id === "solution" || link.id === "for-who" ? link.id : null)
                  }
                >
                  <button
                    type="button"
                    className={`flex cursor-pointer items-center gap-1 px-4 py-2.5 font-display text-[12px] font-600 uppercase tracking-[0.08em] transition-colors duration-150 ${
                      mega === link.id ? "text-accent-light" : "text-white/38 hover:text-white/80"
                    }`}
                    aria-expanded={mega === link.id}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-200 ${mega === link.id ? "rotate-180 opacity-80" : "opacity-35"}`}
                    />
                  </button>
                </div>
              ) : (
                <a
                  key={link.id}
                  href={link.href}
                  className="cursor-pointer px-4 py-2.5 font-display text-[12px] font-600 uppercase tracking-[0.08em] text-white/38 transition-colors duration-150 hover:text-white/80"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#demo"
              className="cursor-pointer font-mono text-[11px] text-white/35 transition-colors duration-150 hover:text-white/65"
            >
              Connexion
            </a>
            <a href="#demo" className="btn-primary text-[11px]">
              Demander une démo
            </a>
          </div>

          <button
            className="cursor-pointer p-1 text-white/50 transition-colors hover:text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mega && (
            <motion.div
              key={mega}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="absolute left-0 right-0 top-full z-50 hidden -mt-1 pt-3 md:block"
            >
              <div className="mx-auto max-w-[920px] rounded-2xl border border-white/[0.08] bg-[#070f16]/98 p-5 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.85)] backdrop-blur-xl">
                <div className="grid gap-4 sm:grid-cols-3">
                  {(mega === "solution" ? solutionMega : forWhoMega).map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="card-arcos card-arcos-interactive card-top-line group relative rounded-[var(--r-lg)] p-4"
                    >
                      <div className="mb-3 overflow-hidden rounded-lg border border-white/[0.05] bg-black/40">
                        {item.illu}
                      </div>
                      <div className="font-display text-[13px] font-700 tracking-tight text-white/85 transition-colors duration-150 group-hover:text-white">
                        {item.title}
                      </div>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-white/32">{item.desc}</p>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/[0.06] bg-[var(--background)] md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-lg py-2.5 text-left text-[14px] text-white/70"
                onClick={() => setMobileSub((s) => (s === "solution" ? null : "solution"))}
              >
                Solution
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSub === "solution" ? "rotate-180" : ""}`} />
              </button>
              {mobileSub === "solution" && (
                <div className="mb-3 ml-1 space-y-2 border-l border-white/[0.08] pl-3">
                  {solutionMega.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block text-[13px] text-white/45"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-lg py-2.5 text-left text-[14px] text-white/70"
                onClick={() => setMobileSub((s) => (s === "for-who" ? null : "for-who"))}
              >
                Pour qui
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSub === "for-who" ? "rotate-180" : ""}`} />
              </button>
              {mobileSub === "for-who" && (
                <div className="mb-3 ml-1 space-y-2 border-l border-white/[0.08] pl-3">
                  {forWhoMega.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block text-[13px] text-white/45"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
              <a
                href="#pricing"
                className="py-2.5 text-[14px] text-white/70"
                onClick={() => setMobileOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#integrations"
                className="py-2.5 text-[14px] text-white/70"
                onClick={() => setMobileOpen(false)}
              >
                Intégrations
              </a>
              <a
                href="#demo"
                className="btn-primary mt-3 w-full justify-center text-[13px]"
                onClick={() => setMobileOpen(false)}
              >
                Demander une démo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
