"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PROBLEMS = [
  {
    title: "Données manuelles",
    desc: "Vos opérateurs notent encore sur papier ou dans des fichiers Excel. Aucune centralisation, aucune traçabilité automatique.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    title: "Aveugle en temps réel",
    desc: "Sans flux continu, vous découvrez les anomalies après coup — en analysant des logs de la veille ou en recevant un appel du terrain.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </svg>
    ),
  },
  {
    title: "Alertes trop tard",
    desc: "Les seuils sont définis dans des PLCs. Quand un technicien reçoit le SMS d'alerte, la machine est souvent déjà arrêtée depuis plusieurs minutes.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
  {
    title: "Silos de données",
    desc: "Chaque machine parle son propre protocole. L'intégration est un projet en soi, qui mobilise des ressources IT pendant des mois.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },
];

export default function Problem() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-[#F7F7F5]">
      <div className="container-arcos section-pad">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label">Le problème</p>
          <h2 className="max-w-[480px]">
            Ce que l&apos;industrie vit
            <br />
            <span className="text-[#6B7280]">sans couche temps réel.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card bg-white p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#F3F4F6] text-[#6B7280]">
                {p.icon}
              </div>
              <h3 className="text-[17px] font-semibold text-[#0A0A0A]">{p.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280]">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
