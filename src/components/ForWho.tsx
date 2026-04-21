"use client";

import { motion } from "framer-motion";
import { Factory, Wrench, Droplets, Zap } from "lucide-react";

const audiences = [
  {
    icon: Factory,
    title: "PME industrielles",
    description:
      "Automates, capteurs, PLCs — votre data devient visible et actionnable.",
  },
  {
    icon: Wrench,
    title: "Bureaux techniques",
    description:
      "Planifiez, anticipez et réagissez plus vite grâce au temps réel.",
  },
  {
    icon: Droplets,
    title: "Eau, énergie, agro",
    description:
      "Process continus : tags, alarmes et historiques sur les boucles critiques.",
  },
  {
    icon: Zap,
    title: "Stack unifiée",
    description:
      "Moins d&apos;outils en parallèle : MQTT, vues et alertes au même endroit.",
  },
];

export default function ForWho() {
  return (
    <section
      id="for-who"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-section-lift" />
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.2]" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 lg:col-span-5"
          >
            <div className="rounded-3xl border border-white/[0.08] bg-[#080808] p-8 sm:p-10 card-inset">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent/70">
                Pour qui
              </p>
              <h2 className="text-[clamp(1.85rem,3.5vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.03em]">
                Conçu pour les équipes
                <br />
                <span className="text-white/35">qui font tourner l&apos;usine.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/38">
                Techniciens, maintenance, direction industrielle — le même
                cockpit, des vues adaptées à chaque rôle.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#demo"
                  className="rounded-full bg-white px-6 py-2.5 text-[13px] font-semibold text-black transition-colors hover:bg-white/90"
                >
                  Demander une démo
                </a>
                <a
                  href="#pricing"
                  className="rounded-full border border-white/[0.12] px-6 py-2.5 text-[13px] font-medium text-white/65 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
                >
                  Voir les tarifs
                </a>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {audiences.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0c0c0c] p-6 card-hover"
              >
                <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-accent/50 via-accent/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-accent/70">
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-[15px] font-semibold text-white/75">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-white/32">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mt-16 sm:mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/[0.08] via-[#0d0d0d] to-[#080808] p-[1px]">
            <div className="relative rounded-[calc(1.5rem-1px)] bg-[#0a0a0a]/95 px-8 py-12 sm:px-14 sm:py-14">
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
              <p className="relative text-center text-[clamp(1.15rem,2.8vw,1.65rem)] font-semibold leading-[1.45] text-white/75">
                &ldquo;La supervision industrielle repensée —
                <br className="hidden sm:block" />
                <span className="text-accent-light/85">
                  {" "}
                  déployée en jours, pas en mois.
                </span>
                &rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
