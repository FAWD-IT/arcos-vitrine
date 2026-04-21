"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroDashboardMockup } from "./DashboardMockups";

const STATS = [
  { num: "99.7%", label: "Uptime garanti" },
  { num: "5j",    label: "Délai de déploiement" },
  { num: "48+",   label: "Sites supervisés" },
  { num: "< 1s",  label: "Latence données" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="bg-white pt-[140px] pb-[100px]">
      <div className="container-arcos">

        {/* Badge */}
        <motion.div {...fadeUp(0)} className="flex justify-center">
          <span className="badge">IIoT · MQTT · Talk2M</span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.08)}
          className="mx-auto mt-6 max-w-[760px] text-center text-[clamp(42px,6vw,68px)] font-bold leading-[1.1] tracking-[-0.025em] text-[#0A0A0A]"
        >
          Vos machines parlent.{" "}
          <span className="text-[#0A0A0A]">Vous écoutez.</span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          {...fadeUp(0.14)}
          className="mx-auto mt-6 max-w-[520px] text-center text-[18px] leading-[1.65] text-[#6B7280]"
        >
          Arcos agrège vos topics MQTT, construit des vues opérationnelles
          et expose un agent IA qui raisonne sur vos données terrain.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.20)}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#demo" className="btn-primary">
            Démarrer
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#features" className="btn-outline">
            Voir la plateforme
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.28)}
          className="mx-auto mt-16 flex max-w-[640px] flex-wrap justify-center gap-8 border-t border-[#E5E7EB] pt-12"
        >
          {STATS.map((s) => (
            <div key={s.num} className="stat-item min-w-[120px]">
              <p className="stat-num">{s.num}</p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Browser frame — vrai dashboard Arcos */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.36, ease: "easeOut" }}
          className="mt-16 mx-auto max-w-[900px]"
        >
          <div className="device-frame">
            {/* Chrome bar */}
            <div className="device-frame-bar">
              <span className="device-frame-dot" />
              <span className="device-frame-dot" />
              <span className="device-frame-dot" />
              <div className="ml-3 h-5 flex-1 max-w-[260px] rounded-[4px] bg-[#E5E7EB] flex items-center px-3">
                <span className="text-[11px] text-[#9CA3AF]">app.arcos.io/dashboard</span>
              </div>
            </div>
            <HeroDashboardMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
