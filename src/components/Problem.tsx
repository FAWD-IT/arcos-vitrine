"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LINES = [
  {
    n: "01",
    big: "Données",
    rest: " manuelles.",
    body: "Les techniciens exportent encore des CSV à la main. La data stagne dans des silos.",
    tag: "Productivité",
  },
  {
    n: "02",
    big: "Aveugle",
    rest: " en temps réel.",
    body: "Sans supervision live, la panne est découverte après l'arrêt.",
    tag: "Visibilité",
  },
  {
    n: "03",
    big: "Alertes",
    rest: " trop tard.",
    body: "Le signal existait. La règle manquait. La ligne s'est arrêtée.",
    tag: "Réactivité",
  },
];

function EditorialLine({ n, big, rest, body, tag, i }: typeof LINES[number] & { i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 border-b border-white/[0.06] py-10 first:pt-0 lg:grid-cols-[56px_1fr_auto] lg:items-end lg:gap-x-10 lg:py-12"
    >
      {/* Numéro */}
      <span className="mt-1 font-mono text-[11px] text-white/18 lg:mt-0 lg:mb-1">{n}</span>

      {/* Texte oversized */}
      <div className="col-span-1">
        <p className="text-display text-[clamp(2.6rem,6.5vw,5.5rem)] text-white">
          {big}
          <span className="text-white/25">{rest}</span>
        </p>
        <p className="mt-4 max-w-[480px] text-[15px] leading-relaxed text-white/35">{body}</p>
      </div>

      {/* Tag + ligne déco droite */}
      <div className="col-span-2 flex items-center gap-4 lg:col-span-1 lg:flex-col lg:items-end lg:gap-3">
        <span className="tag-tech">{tag}</span>
        <div className="arcos-line-h h-px w-12 lg:hidden" />
      </div>

      {/* Ligne accent verticale hover */}
      <div className="pointer-events-none absolute left-0 top-0 h-0 w-[2px] bg-accent transition-all duration-500 group-hover:h-full" />
    </motion.div>
  );
}

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative overflow-x-hidden border-t border-white/[0.06] bg-section-slab px-6 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.3]" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Header éditorial */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="tag-tech mb-5 block w-fit">Le terrain</span>
        <p className="text-section text-[clamp(1.6rem,3.5vw,2.5rem)] text-white">
            Ce que l&apos;industrie vit
            <br />
            <span className="text-white/28">sans couche temps réel.</span>
          </p>
          </div>
          <p className="max-w-[340px] text-[14px] leading-relaxed text-white/30">
            Chaque ligne ci-dessous est un pattern terrain récurrent.
            Pas une hypothèse.
          </p>
        </motion.div>

        {/* Lignes éditoriales */}
        <div>
          {LINES.map((l, i) => (
            <EditorialLine key={l.n} {...l} i={i} />
          ))}
        </div>

        {/* Réponse Arcos — bande horizontale */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mt-16 flex flex-col items-start gap-6 overflow-hidden rounded-2xl border border-accent/20 bg-[#081522] px-8 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-12 sm:py-10"
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_0%_50%,rgba(20,169,207,0.1),transparent_55%)]" />
          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent/60">La réponse Arcos</p>
            <p className="mt-2 text-[clamp(1.25rem,2.5vw,1.7rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white/90">
              MQTT centralisé. Alertes. IA.
              <br />
              <span className="text-white/35">Déployé en jours.</span>
            </p>
          </div>
            <a href="#features" className="btn-primary shrink-0">
            Voir la plateforme →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
