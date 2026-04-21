"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

/* ── Animated number */
function AnimNum({ end, suffix = "", decimals = 0, delay = 0 }: { end: number; suffix?: string; decimals?: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const v = useMotionValue(0);
  const disp = useTransform(v, (n) => n.toFixed(decimals).replace(".", ",") + suffix);
  useEffect(() => {
    if (!inView) return;
    const c = animate(v, end, { duration: 1.6, ease: "easeOut", delay });
    return c.stop;
  }, [inView, end, v, delay]);
  return <motion.span ref={ref}>{disp}</motion.span>;
}

/* ── Chapitre Feature — deux colonnes alternées */
function Chapter({
  n, tag, title, sub, visual, flip = false, id,
}: {
  n: string; tag: string; title: React.ReactNode; sub: string; visual: React.ReactNode; flip?: boolean; id?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  return (
    <div
      ref={ref}
      id={id}
      className={`relative grid gap-10 border-t border-white/[0.06] py-20 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-16 ${flip ? "lg:[direction:rtl]" : ""}`}
    >
      {/* numéro déco */}
      <span className="pointer-events-none absolute right-0 top-4 select-none font-mono text-[clamp(6rem,14vw,11rem)] font-bold leading-none tracking-[-0.06em] text-white/[0.025] lg:top-8 [direction:ltr]">
        {n}
      </span>

      {/* texte */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="[direction:ltr]"
      >
        <span className="tag-tech mb-6 block w-fit">{tag}</span>
        <h3 className="text-display text-[clamp(2rem,4.5vw,3.5rem)] text-white">
          {title}
        </h3>
        <p className="mt-6 max-w-[440px] text-[16px] leading-[1.7] text-white/38">{sub}</p>
      </motion.div>

      {/* visuel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="[direction:ltr]"
      >
        {visual}
      </motion.div>
    </div>
  );
}

/* ── VISUAL 1 : Dashboard oscilloscope */
function VisDashboard() {
  const uid = useId().replace(/:/g, "");
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });
  const line1 = "M0,60 Q30,42 60,52 T120,38 T180,48 T240,30 T300,40 T360,25 T400,32";
  const line2 = "M0,75 Q40,65 80,70 T160,60 T220,68 T280,55 T360,62 T400,58";

  return (
    <div ref={ref} className="overflow-hidden rounded-[var(--r-xl)] border border-[var(--border-dim)] bg-[var(--surface-1)] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.9)]">
      {/* Barre titre */}
      <div className="flex items-center gap-3 border-b border-[var(--border-dim)] px-5 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
        </div>
        <span className="text-data text-[10px] text-white/25">Dashboard · Site Charleroi</span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_5px_#14a9cf]">
            <span className="block h-1.5 w-1.5 animate-ping rounded-full bg-accent opacity-50" />
          </span>
          <span className="text-data text-[9px] text-accent/55">LIVE</span>
        </div>
      </div>

      {/* Courbes */}
      <div className="px-5 py-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[10px] text-white/25">Température / Pression — 24h</span>
          <span className="text-data text-[10px] text-white/18">13/04 → 14/04</span>
        </div>
        <div className="relative h-[130px]">
          <svg viewBox="0 0 400 90" className="h-full w-full" aria-hidden>
            <defs>
              <linearGradient id={`${uid}-g1`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14a9cf" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#14a9cf" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[25, 50, 75].map((y) => (
              <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.04)" />
            ))}
            <motion.path
              d={line1 + " L400,90 L0,90 Z"}
              fill={`url(#${uid}-g1)`}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            />
            <motion.path
              d={line1}
              fill="none"
              stroke="#14a9cf"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d={line2}
              fill="none"
              stroke="rgba(77,200,235,0.35)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 2.2, delay: 0.3, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 divide-x divide-white/[0.05] border-t border-white/[0.06]">
        {[
          { l: "Temp. moy.", v: "78,4", u: "°C" },
          { l: "Press. moy.", v: "2,3", u: "bar" },
          { l: "Tags actifs", v: "14", u: "" },
        ].map((m) => (
          <div key={m.l} className="px-5 py-4 text-center">
            <p className="text-data text-[16px] font-semibold text-white/80">
              {m.v}<span className="ml-1 text-[10px] text-white/28">{m.u}</span>
            </p>
            <p className="mt-0.5 text-[9px] uppercase tracking-wide text-white/22">{m.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── VISUAL 2 : Agent IA */
function VisIA() {
  const MSGS: { q: string; a: string }[] = [
    {
      q: "Température chaudière B-101 cette semaine ?",
      a: "Moy. 78,4 °C · pic mardi 14h30 à 89 °C · corrélation charge ligne 2 détectée.",
    },
    {
      q: "Y a-t-il eu des anomalies sur la pompe P-201 ?",
      a: "3 redémarrages inhabituels lundi entre 8h et 11h — durée moyenne 2 min.",
    },
  ];
  const [current, setCurrent] = useState(0);
  const [shown, setShown] = useState("");
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });

  useEffect(() => {
    if (!inView) return;
    setShown("");
    let i = 0;
    const msg = MSGS[current].a;
    const id = setInterval(() => {
      i++;
      setShown(msg.slice(0, i));
      if (i >= msg.length) {
        clearInterval(id);
        setTimeout(() => setCurrent((c) => (c + 1) % MSGS.length), 2200);
      }
    }, 18);
    return () => clearInterval(id);
  }, [inView, current]);

  return (
    <div ref={ref} className="space-y-3">
      <div className="rounded-2xl border border-white/[0.1] bg-[#07111c] p-5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)]">
        <div className="mb-4 flex items-center gap-2">
          <span className="tag-tech">Arcos IA</span>
        </div>
        <div className="space-y-3">
          <div className="max-w-[90%] rounded-xl rounded-tl-sm border border-white/[0.07] bg-white/[0.04] px-4 py-3">
            <p className="text-[13px] text-white/45">{MSGS[current].q}</p>
          </div>
          <div className="ml-auto max-w-[92%] rounded-xl rounded-tr-sm border border-accent/20 bg-accent/[0.07] px-4 py-3">
            <p className="text-[13px] leading-relaxed text-accent-light/75">
              {shown}
              {shown.length < MSGS[current].a.length && (
                <span className="ml-0.5 inline-block h-3 w-px animate-pulse bg-accent-light/50 align-middle" />
              )}
            </p>
          </div>
        </div>
      </div>
      <p className="text-[11px] text-white/20">Questions en langage naturel — pas de SQL.</p>
    </div>
  );
}

/* ── VISUAL 3 : Alertes */
function VisAlertes() {
  const ALERTS = [
    { sev: "high", label: "Temp. B-101 · 89 °C", time: "14:32", desc: "Seuil haut dépassé" },
    { sev: "mid", label: "Vanne V-102 ouverte", time: "13:58", desc: "Durée inhabituellement longue" },
    { sev: "ok", label: "Pompe P-201", time: "12:14", desc: "Redémarrage automatique OK" },
    { sev: "ok", label: "Rapport hebdo", time: "08:00", desc: "PDF généré · 3 pages" },
  ];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const colors: Record<string, string> = {
    high: "bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.6)]",
    mid: "bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.5)]",
    ok: "bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.4)]",
  };
  return (
    <div ref={ref} className="rounded-[var(--r-xl)] border border-[var(--border-dim)] bg-[var(--surface-1)] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.85)]">
      <div className="border-b border-white/[0.06] px-5 py-3">
        <span className="font-mono text-[10px] text-white/25">Journal d&apos;alertes — Site Charleroi</span>
      </div>
      <div className="divide-y divide-white/[0.04]">
        {ALERTS.map((a, i) => (
          <motion.div
            key={a.time}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="flex items-center gap-4 px-5 py-3.5"
          >
            <span className={`h-2 w-2 shrink-0 rounded-full ${colors[a.sev]}`} />
            <div className="flex-1">
              <p className="text-[13px] font-medium text-white/75">{a.label}</p>
              <p className="text-[11px] text-white/30">{a.desc}</p>
            </div>
            <span className="font-mono text-[10px] text-white/20">{a.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── VISUAL 4 : Multi-sites */
function VisMultisite() {
  const SITES = [
    { name: "Charleroi", up: 99.7, tags: 14, status: "ok" },
    { name: "Liège", up: 99.9, tags: 9, status: "ok" },
    { name: "Namur", up: 97.2, tags: 6, status: "warn" },
  ];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <div ref={ref} className="space-y-3">
      {SITES.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="card-arcos flex items-center gap-4 rounded-[var(--r-md)] px-5 py-4"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
            <span className={`h-2 w-2 rounded-full ${s.status === "ok" ? "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" : "bg-yellow-400 shadow-[0_0_6px_rgba(250,204,21,0.5)]"}`} />
          </div>
          <div className="flex-1">
            <p className="text-[14px] font-semibold text-white/80">{s.name}</p>
            <p className="text-[11px] text-white/28">{s.tags} tags actifs</p>
          </div>
          <div className="text-right">
            <p className="text-data text-[13px] font-semibold text-white/70">
              <AnimNum end={s.up} decimals={1} suffix=" %" delay={i * 0.1} />
            </p>
            <p className="text-data text-[9px] uppercase tracking-wide text-white/25">uptime</p>
          </div>
          <div className="h-1.5 w-20 overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              className={`h-full rounded-full ${s.status === "ok" ? "bg-emerald-400/60" : "bg-yellow-400/60"}`}
              initial={{ width: 0 }}
              animate={inView ? { width: `${s.up}%` } : {}}
              transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative overflow-x-hidden border-t border-white/[0.06] px-6">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.25]" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="pb-0 pt-20 sm:pt-28"
        >
          <span className="tag-tech mb-6 block w-fit">Plateforme</span>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-display text-[clamp(2.2rem,5vw,4rem)] text-white">
            Ce qu&apos;Arcos
            <br />
            <span className="text-white/28">construit pour vous.</span>
          </h2>
            <p className="max-w-[380px] text-[15px] leading-relaxed text-white/32 lg:text-right">
              Dashboard, IA, alertes, multi-sites —
              sur la même base MQTT.
            </p>
          </div>
        </motion.div>

        {/* Chapitres */}
        <Chapter
          n="01"
          tag="Dashboard"
          title={<>Vos machines,<br /><span className="text-accent-light">en direct.</span></>}
          sub="Tags, courbes et états par site et par équipement. La donnée capteur arrive en temps réel — pas en différé."
          visual={<VisDashboard />}
        />

        <Chapter
          n="02"
          tag="Agent IA"
          flip
          title={<>Questions.<br /><span className="text-accent-light">Réponses.</span></>}
          sub="Interrogez vos capteurs en langage naturel. L'agent comprend vos tags et raisonne sur vos séries temporelles — sans SQL."
          visual={<VisIA />}
        />

        <Chapter
          n="03"
          tag="Alertes"
          title={<>Avant<br /><span className="text-white/28">la panne.</span></>}
          sub="Seuils configurables, détection comportementale, notifications. L'information part au bon moment, pas après l'arrêt."
          visual={<VisAlertes />}
        />

        <Chapter
          n="04"
          tag="Multi-sites"
          flip
          title={<>Tous les sites,<br /><span className="text-accent-light">un cockpit.</span></>}
          sub="Agrégation homogène de sites distants. Historiques, comparaisons et synthèses IA depuis la même interface."
          visual={<VisMultisite />}
        />
      </div>
    </section>
  );
}
