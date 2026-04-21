"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PROFILES = [
  {
    code: "TECH",
    role: "Technicien terrain",
    headline: "Ce qui se passe, maintenant.",
    body: "Accès live aux tags, aux alertes et aux historiques récents. Plus besoin de demander un export.",
    accent: true,
  },
  {
    code: "MAINT",
    role: "Responsable maintenance",
    headline: "Planifier avant la panne.",
    body: "Tendances comportementales, seuils personnalisés, rapports automatiques par machine.",
    accent: false,
  },
  {
    code: "DIR",
    role: "Direction technique",
    headline: "Visibilité globale. Décisions rapides.",
    body: "Uptime par site, KPIs agrégés, synthèse IA. La même donnée terrain, condensée.",
    accent: false,
  },
];

const SECTORS = [
  "Eau & traitement",
  "Agroalimentaire",
  "Énergie & utilities",
  "Métallurgie",
  "Plasturgie",
  "Pharmaceutique",
];

export default function ForWho() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="for-who" className="relative overflow-hidden border-t border-white/[0.06] px-6 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-section-lift" />
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.22]" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <span className="tag-tech mb-6 block w-fit">Pour qui</span>
          <h2 className="text-display text-[clamp(2.2rem,5vw,4rem)] text-white">
            Pensé pour ceux
            <br />
            <span className="text-white/28">qui font tourner l&apos;usine.</span>
          </h2>
        </motion.div>

        {/* Profils */}
        <div className="grid gap-[1px] overflow-hidden rounded-[var(--r-xl)] border border-[var(--border-dim)] bg-[var(--border-dim)] lg:grid-cols-3">
          {PROFILES.map((p, i) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative flex flex-col gap-5 p-8 transition-colors duration-200 sm:p-10 ${p.accent ? "bg-[var(--surface-2)]" : "bg-[var(--surface-1)]"} hover:bg-[var(--surface-3)]`}
            >
              <div className={`absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent ${p.accent ? "via-accent/35" : "via-white/[0.05]"} to-transparent`} />

              <div>
                <p className="text-data text-[10px] font-600 uppercase tracking-[0.18em] text-white/22">{p.code}</p>
                <p className="mt-1 text-[12px] text-white/32">{p.role}</p>
              </div>

              <h3 className="text-section text-[clamp(1.4rem,2.8vw,2rem)] text-white/90 transition-colors group-hover:text-white">
                {p.headline}
              </h3>

              <p className="text-[14px] leading-relaxed text-white/30">{p.body}</p>

              <div className="mt-auto h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Secteurs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/22">Secteurs d&apos;application</p>
          <div className="flex flex-wrap gap-3">
            {SECTORS.map((s) => (
              <span
                key={s}
                className="rounded-[var(--r-sm)] border border-[var(--border-dim)] bg-[var(--surface-1)] px-4 py-2 text-[12px] text-white/38 transition-colors duration-150 hover:border-[var(--border-mid)] hover:text-white/55"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Quote signature */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-16 flex flex-col items-start gap-6 overflow-hidden rounded-[var(--r-2xl)] border border-[var(--border-mid)] bg-[var(--surface-2)] px-8 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-14"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_5%_50%,rgba(20,169,207,0.09),transparent_55%)]" />
          <p className="font-display relative max-w-[580px] text-[clamp(1.15rem,2.4vw,1.55rem)] font-semibold leading-[1.4] text-white/70">
            &ldquo;Le même flux MQTT — exposé différemment selon qui regarde.
            <span className="text-accent-light/80"> Technicien, maintenance ou direction.</span>&rdquo;
          </p>
          <a href="#demo" className="btn-ghost shrink-0">
            Parler à l&apos;équipe →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
