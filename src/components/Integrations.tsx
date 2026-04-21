"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PROTOCOLS = [
  { name: "MQTT",        desc: "Broker natif" },
  { name: "Modbus TCP",  desc: "via gateway" },
  { name: "OPC-UA",      desc: "Standard ouvert" },
  { name: "REST API",    desc: "HTTP custom" },
  { name: "Talk2M",      desc: "Ewon cloud" },
  { name: "Siemens S7",  desc: "S7-300/400/1200" },
];

export default function Integrations() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="integrations" className="bg-[#F7F7F5]">
      <div className="container-arcos section-pad">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="section-label">Connectivité</p>
          <h2 className="mx-auto max-w-[480px]">
            Un hub MQTT qui parle
            <br />
            <span className="text-[#6B7280]">tous vos protocoles.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] text-[16px] leading-relaxed text-[#6B7280]">
            Arcos consolide vos sources de données hétérogènes en un seul flux MQTT normalisé.
          </p>
        </motion.div>

        {/* Protocoles grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROTOCOLS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.12 + i * 0.05 }}
              className="card flex items-center justify-between bg-white p-5 cursor-default"
            >
              <div>
                <p className="text-[15px] font-semibold text-[#0A0A0A]">{p.name}</p>
                <p className="mt-0.5 text-[13px] text-[#9CA3AF]">{p.desc}</p>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F4F6]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA bas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-[14px] text-[#9CA3AF]">
            Un protocole manquant ?{" "}
            <a href="#demo" className="text-[#0A0A0A] underline underline-offset-2 transition-opacity hover:opacity-60">
              On s&apos;adapte →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
