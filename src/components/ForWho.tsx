"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PROFILES = [
  {
    code: "Terrain",
    role: "Technicien / Opérateur",
    headline: "Tout voir, sans fouiller.",
    body: "Vue temps réel sur indicateurs, alarmes actives, historique récent — sur téléphone ou écran de supervision.",
    accent: false,
  },
  {
    code: "Maintenance",
    role: "Responsable maintenance",
    headline: "Anticiper, pas subir.",
    body: "Tendances longue durée, détection de dérive avant la panne, rapports automatiques. La planification change.",
    accent: true,
  },
  {
    code: "Direction",
    role: "Direction technique",
    headline: "KPIs consolidés, rien de plus.",
    body: "OEE, TRS, disponibilité, coût énergétique — sans intervention IT, en temps réel.",
    accent: false,
  },
];

const SECTORS = [
  "Agroalimentaire", "Eau & traitement", "Énergie",
  "Pharmacie", "Métallurgie", "Logistique", "Bâtiment industriel",
];

export default function ForWho() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section style={{ background: "var(--grey-1)", borderTop: "1px solid var(--border-light)" }}>
      <div className="c sp" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <span className="section-kicker">Pour qui</span>
            <h2 className="h2-dark max-w-[460px]">
              Pensé pour ceux
              <br />
              qui font tourner l&apos;usine.
            </h2>
          </div>
          <p className="max-w-[320px] text-[15px] leading-relaxed" style={{ color: "var(--text-muted-dark)" }}>
            Un même flux MQTT, exposé différemment selon le rôle.
          </p>
        </motion.div>

        {/* Profils */}
        <div
          className="grid gap-px"
          style={{
            border: "1px solid var(--border-light)",
            borderRadius: 14,
            overflow: "hidden",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {PROFILES.map((p, i) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="p-8 flex flex-col gap-4"
              style={{
                background: p.accent ? "#fff" : "#fff",
                borderRight: i < 2 ? "1px solid var(--border-light)" : "none",
                borderTop: p.accent ? "3px solid var(--teal)" : "3px solid transparent",
              }}
            >
              <div>
                <p className="text-[11px] font-medium font-mono" style={{ color: "var(--teal)", letterSpacing: "0.1em" }}>
                  {p.code}
                </p>
                <p className="mt-1 text-[13px]" style={{ color: "var(--text-muted-dark)" }}>{p.role}</p>
              </div>
              <h3 className="h3 text-[20px]">{p.headline}</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "var(--text-muted-dark)" }}>{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Secteurs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <p className="section-kicker mb-4">Secteurs d&apos;application</p>
          <div className="flex flex-wrap gap-2">
            {SECTORS.map((s) => (
              <span
                key={s}
                className="rounded-full px-4 py-2 text-[13px] transition-colors"
                style={{
                  border: "1px solid var(--border-light)",
                  color: "var(--text-muted-dark)",
                  background: "#fff",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
