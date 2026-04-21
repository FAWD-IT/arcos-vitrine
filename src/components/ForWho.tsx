"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PROFILES = [
  {
    code: "Terrain",
    role: "Technicien / Opérateur",
    headline: "Tout voir, sans fouiller.",
    body: "Une vue configurée pour votre poste. Indicateurs en temps réel, alarmes actives, historique récent — sur téléphone ou écran de supervision.",
    accent: false,
  },
  {
    code: "Maintenance",
    role: "Responsable maintenance",
    headline: "Anticiper, pas subir.",
    body: "Tendances longue durée, détection de dérive avant la panne, rapports automatiques. Votre planification change quand vous avez les bonnes données.",
    accent: true,
  },
  {
    code: "Direction",
    role: "Direction technique / RSSI",
    headline: "KPIs consolidés, rien de plus.",
    body: "Un tableau de bord de direction avec les métriques qui comptent : OEE, TRS, disponibilité, coût énergétique — sans intervention IT.",
    accent: false,
  },
];

const SECTORS = [
  "Agroalimentaire", "Eau & traitement", "Energie", "Pharmacie",
  "Métallurgie", "Logistique", "Bâtiment industriel",
];

export default function ForWho() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-white">
      <div className="container-arcos section-pad">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">Pour qui</p>
          <h2 className="max-w-[480px]">
            Pensé pour ceux
            <br />
            <span className="text-[#6B7280]">qui font tourner l&apos;usine.</span>
          </h2>
        </motion.div>

        {/* Profils */}
        <div className="grid gap-4 lg:grid-cols-3">
          {PROFILES.map((p, i) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`card p-8 cursor-default ${p.accent ? "border-[#0A0A0A] shadow-none" : ""}`}
            >
              <span className="badge mb-4 inline-flex">{p.code}</span>
              <p className="text-[13px] text-[#9CA3AF]">{p.role}</p>
              <h3 className="mt-3 text-[22px] font-semibold leading-[1.25] text-[#0A0A0A]">
                {p.headline}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[#6B7280]">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Secteurs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-12"
        >
          <p className="section-label mb-4">Secteurs d&apos;application</p>
          <div className="flex flex-wrap gap-2">
            {SECTORS.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-[13px] text-[#6B7280] transition-colors hover:border-[#9CA3AF] hover:text-[#0A0A0A]"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.36 }}
          className="mt-12 flex flex-col gap-6 rounded-[var(--r-xl)] border border-[#E5E7EB] bg-[#F7F7F5] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <p className="max-w-[560px] text-[18px] font-medium leading-[1.5] text-[#0A0A0A]">
            &ldquo;Le même flux MQTT — exposé différemment selon qui regarde.
            <span className="text-[#6B7280]"> Technicien, maintenance ou direction.</span>&rdquo;
          </p>
          <a href="#demo" className="btn-outline shrink-0">
            Parler à l&apos;équipe →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
