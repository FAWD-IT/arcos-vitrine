"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useInView, animate, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ── Ticker data */
const TICKER_ITEMS = [
  "MQTT · broker connecté",
  "Temp. chaudière B-101 · 78.4 °C",
  "Pression P-201 · 2.3 bar",
  "Site Charleroi · Uptime 99.7 %",
  "Alerte · Vanne V-102 ouverte 22 min",
  "Agent IA · Rapport semaine prêt",
  "OPC-UA · 14 tags actifs",
  "Débit D-301 · 42.1 m³/h",
  "Site Liège · 99.9 %",
  "Modbus RTU · gateway Ewon",
];

/* ── Metric animé */
function AnimCount({ end, suffix = "", decimals = 0 }: { end: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const v = useMotionValue(0);
  const display = useTransform(v, (n) =>
    n.toFixed(decimals).replace(".", ",") + suffix
  );

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(v, end, { duration: 1.8, ease: "easeOut" });
    return ctrl.stop;
  }, [inView, end, v]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

/* ── Signal oscilloscope (ligne + scan) */
function OscopeSignal() {
  const uid = useId().replace(/:/g, "");
  const line = "M0,50 Q20,30 40,48 T80,35 T120,46 T160,28 T200,40 T240,32 T280,44 T320,25 T360,38 T400,30";

  return (
    <svg viewBox="0 0 400 80" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id={`${uid}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#14a9cf" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#14a9cf" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${uid}-scan`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#4dc8eb" stopOpacity="0.9" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        <clipPath id={`${uid}-clip`}>
          <rect x="0" y="0" width="400" height="80" />
        </clipPath>
      </defs>

      <path d={line + " L400,80 L0,80 Z"} fill={`url(#${uid}-fill)`} clipPath={`url(#${uid}-clip)`} />
      <motion.path
        d={line}
        fill="none"
        stroke="#14a9cf"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
        clipPath={`url(#${uid}-clip)`}
      />

      {/* Scan beam */}
      <rect
        x="-60"
        y="0"
        width="60"
        height="80"
        fill={`url(#${uid}-scan)`}
        clipPath={`url(#${uid}-clip)`}
        opacity="0.5"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 0"
          to="460 0"
          dur="4.5s"
          repeatCount="indefinite"
        />
      </rect>

      {/* Points chauds */}
      {[
        { cx: 160, cy: 28 },
        { cx: 320, cy: 25 },
      ].map(({ cx, cy }, i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="3" fill="#4dc8eb">
            <animate attributeName="opacity" values="1;0.35;1" dur={`${2 + i * 0.7}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={cx} cy={cy} r="3" fill="none" stroke="#4dc8eb" strokeWidth="1">
            <animate attributeName="r" values="3;9" dur="1.8s" repeatCount="indefinite" begin={`${i * 0.9}s`} />
            <animate attributeName="opacity" values="0.7;0" dur="1.8s" repeatCount="indefinite" begin={`${i * 0.9}s`} />
          </circle>
        </g>
      ))}

      {/* Axes */}
      <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
    </svg>
  );
}

/* ── Live metric widget */
function MetricPill({ label, value, unit, live = false }: { label: string; value: string; unit?: string; live?: boolean }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 backdrop-blur-sm">
      {live && (
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
      )}
      <div>
        <p className="font-mono text-[13px] font-semibold leading-none text-white/85">
          {value}
          {unit && <span className="ml-1 text-[10px] text-white/35">{unit}</span>}
        </p>
        <p className="mt-0.5 text-[10px] text-white/28">{label}</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="noise-bg relative min-h-screen overflow-hidden border-b border-white/[0.05] pt-[104px]">
      {/* Fond : glow naval profond */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_60%_-10%,rgba(8,45,68,0.8)_0%,transparent_65%)]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[60vh] w-[50vw] bg-[radial-gradient(ellipse_at_80%_20%,rgba(20,169,207,0.07)_0%,transparent_60%)]" />

      {/* Grille technique */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.45]" />

      {/* ── LAYOUT PRINCIPAL */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-104px)] max-w-[1280px] flex-col px-6 lg:px-10">

        {/* ROW 1 : split asym héro */}
        <div className="flex flex-1 flex-col gap-12 py-14 lg:flex-row lg:items-center lg:gap-0 lg:py-20">

          {/* COL GAUCHE — copy */}
          <div className="max-w-[600px] lg:flex-1 lg:pr-16">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="tag-tech mb-8 block w-fit">Supervision industrielle</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06 }}
              className="text-[clamp(2.8rem,6vw,5.25rem)] font-bold leading-[0.95] tracking-[-0.045em] text-white"
            >
              Vos machines
              <br />
              <span className="text-accent-light">parlent.</span>
              <br />
              <span className="text-white/40">Vous écoutez.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-8 max-w-[480px] text-[16px] leading-[1.7] text-white/40"
            >
              Arcos agrège vos topics MQTT, construit des vues opérationnelles
              et expose un agent IA qui raisonne sur les mêmes séries temporelles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#demo"
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-[13px] font-semibold tracking-wide text-white transition-all hover:bg-accent-light hover:shadow-[0_0_32px_rgba(20,169,207,0.35)]"
              >
                Demander une démo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#features"
                className="text-[13px] font-medium text-white/35 transition-colors hover:text-white/65"
              >
                Voir la plateforme →
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/[0.06] pt-8"
            >
              {[
                { end: 99.7, suffix: " %", unit: "uptime moyen", decimals: 1 },
                { end: 5, suffix: " j", unit: "mise en service", decimals: 0 },
                { end: 40, suffix: " +", unit: "h/sem. récupérées", decimals: 0 },
              ].map((s, i) => (
                <div key={i} className="text-left">
                  <p className="font-mono text-[2rem] font-bold leading-none tracking-[-0.04em] text-white/90">
                    <AnimCount end={s.end} suffix={s.suffix} decimals={s.decimals} />
                  </p>
                  <p className="mt-1.5 text-[11px] text-white/28">{s.unit}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* COL DROITE — oscope + metrics */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex shrink-0 flex-col gap-4 lg:w-[440px] xl:w-[500px]"
          >
            {/* Badge live */}
            <div className="flex items-center justify-between">
              <span className="tag-tech">Signal live</span>
              <span className="font-mono text-[10px] text-white/20">MQTT · 14 tags</span>
            </div>

            {/* Oscope */}
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#08121c] shadow-[0_0_0_1px_rgba(20,169,207,0.08),0_32px_80px_-20px_rgba(0,0,0,0.9)]">
              {/* Barre titre oscope */}
              <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-2.5">
                <div className="flex gap-1.5 opacity-40">
                  <span className="h-2 w-2 rounded-full bg-white/25" />
                  <span className="h-2 w-2 rounded-full bg-white/25" />
                  <span className="h-2 w-2 rounded-full bg-white/25" />
                </div>
                <span className="font-mono text-[10px] text-white/22">Température — B-101 · live</span>
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_#14a9cf]">
                  <span className="block h-1.5 w-1.5 animate-ping rounded-full bg-accent opacity-60" />
                </span>
              </div>

              {/* Courbe */}
              <div className="relative h-[120px] px-3 py-4">
                <OscopeSignal />
              </div>

              {/* Métriques inline */}
              <div className="grid grid-cols-3 divide-x divide-white/[0.05] border-t border-white/[0.05]">
                {[
                  { label: "Actuel", val: "78,4 °C" },
                  { label: "Min 24h", val: "61,2 °C" },
                  { label: "Max 24h", val: "89,0 °C" },
                ].map((m) => (
                  <div key={m.label} className="px-4 py-3 text-center">
                    <p className="font-mono text-[13px] font-semibold text-white/80">{m.val}</p>
                    <p className="mt-0.5 text-[9px] uppercase tracking-wide text-white/25">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Metric pills */}
            <div className="grid grid-cols-2 gap-3">
              <MetricPill label="Pression P-201" value="2,3 bar" live />
              <MetricPill label="Débit D-301" value="42,1 m³/h" live />
              <MetricPill label="Sites actifs" value="3 / 3" />
              <MetricPill label="Agent IA" value="Actif" live />
            </div>

            {/* Décoration angulaire */}
            <svg className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 text-accent/[0.08]" viewBox="0 0 96 96" fill="none" aria-hidden>
              <path d="M96 0 L96 96 L0 96" stroke="currentColor" strokeWidth="1" />
              <path d="M96 24 L72 24 L72 96" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </motion.div>
        </div>

        {/* ROW 2 : ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="relative border-t border-white/[0.05] py-4"
        >
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />
          <div className="overflow-hidden">
            <div className="ticker-track flex w-max gap-12">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span key={i} className="whitespace-nowrap font-mono text-[11px] text-white/20">
                  <span className="mr-3 text-accent/50">—</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
