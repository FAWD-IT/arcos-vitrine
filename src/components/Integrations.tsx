"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PROTOCOLS = [
  { name: "MQTT Broker",   desc: "Natif — tous brokers" },
  { name: "Talk2M / Ewon", desc: "Cloud Ewon" },
  { name: "Modbus TCP",    desc: "Via gateway" },
  { name: "OPC-UA",        desc: "Standard ouvert" },
  { name: "REST API",      desc: "HTTP custom" },
  { name: "Siemens S7",    desc: "S7-300/400/1200" },
  { name: "Schneider",     desc: "Modicon, M340" },
  { name: "Wago / Phoenix", desc: "I/O via gateway" },
];

export default function Integrations() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="integrations" style={{ background: "#fff", borderTop: "1px solid var(--border-light)" }}>
      <div className="c sp" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <span className="section-kicker">Connectivité</span>
            <h2 className="h2-dark max-w-[460px]">
              Un hub qui parle
              <br />
              tous vos protocoles.
            </h2>
          </div>
          <p className="max-w-[320px] text-[15px] leading-relaxed" style={{ color: "var(--text-muted-dark)" }}>
            Arcos normalise vos sources hétérogènes en un seul flux MQTT. Un protocole manquant ? On s'adapte.
          </p>
        </motion.div>

        <div
          className="grid gap-px"
          style={{
            border: "1px solid var(--border-light)",
            borderRadius: 14,
            overflow: "hidden",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {PROTOCOLS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="p-6 flex flex-col gap-2"
              style={{
                background: "#fff",
                borderRight: (i + 1) % 4 !== 0 ? "1px solid var(--border-light)" : "none",
                borderBottom: i < 4 ? "1px solid var(--border-light)" : "none",
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "var(--teal-dim)" }}
                >
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--teal)" }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p className="text-[14px] font-semibold" style={{ color: "var(--text-dark)" }}>{p.name}</p>
              </div>
              <p className="text-[12px]" style={{ color: "var(--text-muted-dark)" }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
