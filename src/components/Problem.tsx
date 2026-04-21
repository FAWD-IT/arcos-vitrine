"use client";

import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  Radar,
  AlarmClock,
  TimerOff,
} from "lucide-react";

const problems = [
  {
    icon: FileSpreadsheet,
    n: "01",
    text: "Les techniciens exportent encore des données à la main",
    tag: "Productivité",
  },
  {
    icon: Radar,
    n: "02",
    text: "Aucune visibilité temps réel sur l'état des machines",
    tag: "Visibilité",
  },
  {
    icon: AlarmClock,
    n: "03",
    text: "Les alertes arrivent trop tard — après l'arrêt",
    tag: "Réactivité",
  },
  {
    icon: TimerOff,
    n: "04",
    text: "Les déploiements classiques imposent souvent cycles longs et forte dépendance projet",
    tag: "Déploiement",
  },
];

const stats = [
  { value: "40+", label: "h / semaine typiques sur des exports manuels" },
  { value: "MQTT", label: "comme socle de lecture et d’alarmes côté Arcos" },
  { value: "∞", label: "versions de fichiers hors outil commun" },
];

export default function Problem() {
  return (
    <section className="relative overflow-x-hidden border-t border-white/[0.06] px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.35]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[min(90%,720px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(20,169,207,0.07)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-[#080808] card-inset">
          <div className="grid gap-0 lg:grid-cols-12">
            {/* Col gauche : contexte */}
            <div className="border-b border-white/[0.06] p-8 sm:p-10 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
              >
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent/70">
                  Le terrain
                </p>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
                  L&apos;industrie tourne vite.
                  <br />
                  <span className="text-white/35">Les outils, pas toujours.</span>
                </h2>
                <p className="mt-5 max-w-[400px] text-[15px] leading-relaxed text-white/38">
                  Sans couche temps réel, les équipes compensent à la main —
                  et les pannes deviennent des surprises.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5"
                    >
                      <div className="font-mono text-[18px] font-semibold tracking-tight text-white/85">
                        {s.value}
                      </div>
                      <div className="mt-0.5 max-w-[140px] text-[10px] leading-snug text-white/28">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Ligne décorative */}
                <div className="mt-10 hidden lg:block">
                  <svg
                    width="120"
                    height="72"
                    viewBox="0 0 120 72"
                    className="text-white/[0.12]"
                  >
                    <path
                      d="M4 4 L4 52 L100 52 L100 68"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeDasharray="4 5"
                    />
                    <polygon points="96,64 100,72 104,64" fill="currentColor" />
                  </svg>
                </div>
              </motion.div>
            </div>

            {/* Col droite : cartes */}
            <div className="p-6 sm:p-8 lg:col-span-7 lg:p-10">
              <div className="grid gap-3 sm:grid-cols-2">
                {problems.map((p, i) => (
                  <motion.div
                    key={p.n}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                    className="group relative flex flex-col rounded-2xl border border-white/[0.07] bg-[#0d0d0d] p-5 card-hover"
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-white/40 transition-colors group-hover:border-white/[0.12] group-hover:text-white/55">
                        <p.icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] text-white/35">
                        {p.n}
                      </span>
                    </div>
                    <span className="mb-2 inline-flex w-fit rounded-md bg-accent/[0.12] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-accent-light/80">
                      {p.tag}
                    </span>
                    <p className="text-[14px] leading-[1.55] text-white/42">
                      {p.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
