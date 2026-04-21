"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const previewTabs = [
  { id: "dashboard" as const, label: "Dashboard temps réel", short: "Dashboard" },
  { id: "ia" as const, label: "Agent IA", short: "IA" },
  { id: "alertes" as const, label: "Alertes", short: "Alertes" },
  { id: "sites" as const, label: "Multi-sites", short: "Sites" },
];

export default function Hero() {
  const [tab, setTab] = useState<(typeof previewTabs)[number]["id"]>("dashboard");

  return (
    <section className="noise-bg relative overflow-hidden border-b border-white/[0.05] pb-0 pt-[104px]">
      {/* Un seul glow doux derrière le titre */}
      <div className="pointer-events-none absolute left-1/2 top-[18%] h-[min(480px,55vh)] w-[min(900px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(20,169,207,0.07)_0%,transparent_68%)]" />

      <div className="relative z-10 mx-auto max-w-[920px] px-6 pb-0 pt-16 text-center sm:pt-20 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-[11px] text-white/40">
            Supervision MQTT &amp; données terrain
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-[clamp(2rem,5vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.035em] text-white"
        >
          Supervisez vos machines.
          <br />
          En temps réel.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.65] text-white/38 sm:text-[17px]"
        >
          Arcos agrège vos topics MQTT, expose des tableaux de bord et des
          courbes, et permet à un agent IA de synthétiser l&apos;état des
          machines à partir des mêmes flux.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-[13px] font-semibold text-black transition-colors hover:bg-white/90"
          >
            Demander une démo
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="#features"
            className="text-[13px] font-medium text-white/45 underline decoration-white/15 underline-offset-4 transition-colors hover:text-white/70"
          >
            Voir la plateforme
          </a>
        </motion.div>

        {/* Onglets façon CoLab : au-dessus du mockup, pas dedans */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-16 sm:mt-20"
        >
          <div className="mx-auto flex max-w-[720px] flex-wrap justify-center gap-x-0 gap-y-1 border-b border-white/[0.08] px-1">
            {previewTabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`relative px-3 py-3 text-[12px] font-medium transition-colors sm:px-4 sm:text-[13px] ${
                  tab === t.id ? "text-white" : "text-white/35 hover:text-white/55"
                }`}
              >
                <span className="sm:hidden">{t.short}</span>
                <span className="hidden sm:inline">{t.label}</span>
                {tab === t.id && (
                  <motion.span
                    layoutId="hero-tab"
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-white sm:left-3 sm:right-3"
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mockup : largeur max, contenu léger, coupé en bas */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto mt-0 max-h-[min(42vh,440px)] max-w-[960px] overflow-hidden px-4 sm:max-h-[min(44vh,480px)] sm:px-6"
      >
        <div className="rounded-t-2xl border border-b-0 border-white/[0.08] bg-[#111] shadow-[0_-32px_80px_-48px_rgba(0,0,0,0.9)]">
          <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-2.5 sm:px-5">
            <div className="flex gap-1.5 opacity-40">
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span className="h-2 w-2 rounded-full bg-white/30" />
            </div>
            <div className="mx-auto max-w-[280px] flex-1 rounded-md bg-black/50 px-3 py-1 text-center font-mono text-[10px] text-white/22 sm:text-[11px]">
              app.arcos.io
            </div>
            <div className="w-10 shrink-0 sm:w-12" />
          </div>

          <div className="px-4 pb-6 pt-4 sm:px-6 sm:pt-5">
            {tab === "dashboard" && <PreviewDashboard />}
            {tab === "ia" && <PreviewIA />}
            {tab === "alertes" && <PreviewAlertes />}
            {tab === "sites" && <PreviewSites />}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-28 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent sm:h-32" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.5 }}
        className="relative z-[3] mx-auto max-w-[960px] px-6 pb-20 pt-10 text-center text-[11px] tracking-wide text-white/22"
      >
        Compatible via MQTT —{" "}
        <span className="text-white/30">
          Ewon Flexy · MQTT · Modbus · OPC-UA · Siemens · REST
        </span>
      </motion.p>
    </section>
  );
}

/* ── Aperçus légers (un seul focus visuel par onglet) ───────────── */

function PreviewDashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.25 });
  return (
    <div ref={ref} className="mx-auto max-w-[640px]">
      <div className="mb-3 flex items-center justify-between px-1">
        <span className="text-[11px] text-white/30">Température — Chaudière B-101</span>
        <span className="text-[10px] font-medium text-emerald-400/80">● Live</span>
      </div>
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-4">
        <HeroChart isInView={isInView} />
      </div>
    </div>
  );
}

const IA_MSG =
  "Moyenne 7 jours : 78,4 °C — pic mardi 14h30, corrélation charge ligne 2.";

function PreviewIA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (!isInView) return;
    setShown("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(IA_MSG.slice(0, i));
      if (i >= IA_MSG.length) clearInterval(id);
    }, 20);
    return () => clearInterval(id);
  }, [isInView]);

  return (
    <div ref={ref} className="mx-auto max-w-[520px] space-y-3 text-left">
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
        <p className="text-[12px] text-white/42">
          &quot;Synthèse température chaudière B-101 cette semaine ?&quot;
        </p>
      </div>
      <div className="rounded-xl border border-accent/15 bg-accent/[0.06] px-4 py-3">
        <p className="text-[11px] font-medium uppercase tracking-wide text-accent/45">
          Arcos IA
        </p>
        <p className="mt-1 text-[12px] leading-relaxed text-accent-light/70">
          {shown}
          {shown.length > 0 && shown.length < IA_MSG.length && (
            <span className="ml-0.5 inline-block h-3 w-px animate-pulse bg-accent-light/40 align-middle" />
          )}
        </p>
      </div>
    </div>
  );
}

function PreviewAlertes() {
  const rows = [
    { t: "14:32", text: "Seuil température (89 °C)" },
    { t: "13:15", text: "Rapport hebdo — PDF prêt" },
    { t: "11:48", text: "Pompe P-201 redémarrée" },
  ];
  return (
    <div className="mx-auto max-w-[480px] divide-y divide-white/[0.05] rounded-xl border border-white/[0.06] bg-white/[0.02] text-left">
      {rows.map((r) => (
        <div key={r.t} className="flex items-center gap-3 px-4 py-2.5">
          <span className="h-1 w-1 shrink-0 rounded-full bg-white/25" />
          <span className="flex-1 text-[12px] text-white/38">{r.text}</span>
          <span className="font-mono text-[10px] text-white/18">{r.t}</span>
        </div>
      ))}
    </div>
  );
}

function PreviewSites() {
  const sites = [
    { n: "Charleroi", u: "99,7 %" },
    { n: "Liège", u: "99,9 %" },
    { n: "Namur", u: "97,2 %" },
  ];
  return (
    <div className="mx-auto flex max-w-[520px] justify-center gap-2 sm:gap-3">
      {sites.map((s) => (
        <div
          key={s.n}
          className="flex-1 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-3 text-center"
        >
          <p className="text-[12px] font-medium text-white/55">{s.n}</p>
          <p className="mt-1 text-[10px] text-white/25">Uptime {s.u}</p>
        </div>
      ))}
    </div>
  );
}

function HeroChart({ isInView }: { isInView: boolean }) {
  const gradId = useId().replace(/:/g, "");
  const line = "M0,88 Q50,72 100,78 T200,58 T300,62 T380,42 L400,38";
  const area = line + " L400,110 L0,110Z";

  return (
    <svg viewBox="0 0 400 100" className="h-[100px] w-full sm:h-[120px]" aria-hidden>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(52,211,153)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="rgb(52,211,153)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[30, 55, 80].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="400"
          y2={y}
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="1"
        />
      ))}
      <motion.path
        d={area}
        fill={`url(#${gradId})`}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke="rgb(52,211,153)"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
    </svg>
  );
}
