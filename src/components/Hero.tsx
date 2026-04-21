"use client";

import { motion } from "framer-motion";
import { HeroDashboardMockup } from "./DashboardMockups";

const STATS = [
  { num: "99.7%", label: "Uptime" },
  { num: "5j",    label: "Déploiement" },
  { num: "48+",   label: "Sites live" },
  { num: "< 1s",  label: "Latence" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--black)", minHeight: "100vh" }}
    >
      {/* Ambient glow teal top-right */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: -200,
          right: -100,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(20,169,207,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Layout : texte bas-gauche + dashboard droite */}
      <div className="c flex h-screen min-h-[600px] flex-col">

        {/* Mockup dashboard — flottant en haut à droite */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="absolute right-0 top-[60px] hidden lg:block"
          style={{ width: "56%", paddingRight: 0 }}
        >
          <div className="device-frame" style={{ margin: "40px 0 0 0", borderRadius: "14px 0 0 14px" }}>
            <div className="device-frame-bar">
              <span className="device-frame-dot" />
              <span className="device-frame-dot" />
              <span className="device-frame-dot" />
              <div
                className="ml-3 flex h-5 flex-1 max-w-[220px] items-center rounded-sm px-2"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <span className="text-[10px]" style={{ color: "var(--text-muted-light)" }}>
                  app.arcos.io/dashboard
                </span>
              </div>
            </div>
            <HeroDashboardMockup />
          </div>
        </motion.div>

        {/* Texte — bottom-left comme Grafit */}
        <div className="mt-auto pb-20 lg:max-w-[46%]">
          {/* Kicker */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="section-kicker section-kicker--light mb-6"
          >
            Supervision industrielle MQTT
          </motion.p>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="h1"
          >
            Vos machines
            <br />
            parlent.{" "}
            <span style={{ color: "var(--teal)" }}>Vous</span>
            <br />
            <span style={{ color: "var(--teal)" }}>écoutez.</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-6 max-w-[460px] text-[16px] leading-relaxed"
            style={{ color: "var(--text-muted-light)" }}
          >
            Arcos agrège vos topics MQTT, construit des vues opérationnelles
            et expose un agent IA qui raisonne sur vos données terrain.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.30 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a href="#demo" className="btn-arrow">
              <span className="btn-arrow__text">Parler à l&apos;équipe</span>
              <span className="btn-arrow__icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a
              href="#features"
              className="text-[13px] transition-colors duration-150"
              style={{ color: "var(--text-muted-light)" }}
            >
              Voir la plateforme →
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-12 flex flex-wrap gap-8"
            style={{ borderTop: "1px solid var(--border-dark)", paddingTop: 28 }}
          >
            {STATS.map((s) => (
              <div key={s.num}>
                <p
                  className="text-[28px] font-bold leading-none"
                  style={{ letterSpacing: "-0.03em", color: "#fff" }}
                >
                  {s.num}
                </p>
                <p className="mt-1.5 text-[12px]" style={{ color: "var(--text-muted-light)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mockup mobile */}
      <div className="c pb-12 lg:hidden">
        <div className="device-frame">
          <div className="device-frame-bar">
            <span className="device-frame-dot" /><span className="device-frame-dot" /><span className="device-frame-dot" />
          </div>
          <HeroDashboardMockup />
        </div>
      </div>
    </section>
  );
}
