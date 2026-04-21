"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* Logos clients / intégrateurs — style Grafit ticker */
const LOGOS = [
  { name: "Ewon / Talk2M" },
  { name: "Siemens S7"    },
  { name: "Schneider"     },
  { name: "Modbus TCP"    },
  { name: "OPC-UA"        },
  { name: "Wago"          },
];

const PROBLEMS = [
  {
    kicker: "01",
    title: "Données manuelles",
    body: "Vos opérateurs notent sur papier ou dans Excel. Aucune centralisation, aucune traçabilité automatique.",
  },
  {
    kicker: "02",
    title: "Aveugle en temps réel",
    body: "Sans flux continu, vous découvrez les anomalies après coup — en analysant des logs de la veille.",
  },
  {
    kicker: "03",
    title: "Alertes trop tard",
    body: "Quand le technicien reçoit le SMS, la machine est souvent déjà arrêtée depuis plusieurs minutes.",
  },
  {
    kicker: "04",
    title: "Silos de données",
    body: "Chaque machine parle son protocole. L'intégration est un projet IT qui mobilise des équipes pendant des mois.",
  },
];

export default function Problem() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <>
      {/* Bande logos — style Grafit "trusted by" */}
      <div style={{ background: "var(--black-2)", borderTop: "1px solid var(--border-dark)", borderBottom: "1px solid var(--border-dark)" }}>
        <div className="c py-5">
          <div className="flex items-center justify-between gap-6 overflow-hidden">
            <span className="text-[11px] font-medium shrink-0" style={{ color: "var(--text-muted-light)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Compatible avec
            </span>
            <div className="flex items-center gap-0 flex-1 overflow-hidden">
              {LOGOS.map((l, i) => (
                <div
                  key={l.name}
                  className="flex items-center justify-center flex-1 px-4 py-2 text-[13px] font-medium"
                  style={{
                    color: "rgba(255,255,255,0.38)",
                    borderLeft: i > 0 ? "1px solid var(--border-dark)" : "1px solid var(--border-dark)",
                    transition: "color 180ms",
                  }}
                >
                  {l.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section problème */}
      <section style={{ background: "var(--grey-1)" }}>
        <div className="c sp" ref={ref}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <span className="section-kicker">Le problème</span>
              <h2 className="h2-dark max-w-[500px]">
                Ce que l&apos;industrie vit
                <br />
                sans couche temps réel.
              </h2>
            </div>
            <p className="max-w-[340px] text-[15px] leading-relaxed" style={{ color: "var(--text-muted-dark)" }}>
              La plupart des sites industriels fonctionnent encore sans visibilité opérationnelle en temps réel. Arcos est construit pour changer ça.
            </p>
          </motion.div>

          {/* Grille 2×2 */}
          <div className="grid gap-px lg:grid-cols-2" style={{ border: "1px solid var(--border-light)", borderRadius: 14, overflow: "hidden" }}>
            {PROBLEMS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                className="p-8 lg:p-10"
                style={{
                  background: "#fff",
                  borderRight: i % 2 === 0 ? "1px solid var(--border-light)" : "none",
                  borderBottom: i < 2 ? "1px solid var(--border-light)" : "none",
                }}
              >
                <p
                  className="text-[11px] font-medium mb-5 font-mono"
                  style={{ color: "var(--teal)", letterSpacing: "0.1em" }}
                >
                  {p.kicker}
                </p>
                <h3 className="h3 mb-3">{p.title}</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-muted-dark)" }}>
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
