"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DevicesMockup, HistoryMockup, AgentMockup, AlarmsMockup } from "./DashboardMockups";

/* ── Layout 3-col style Grafit : image sombre | titre+body | liste */
const SERVICES = [
  {
    kicker: "DASHBOARD",
    title: "Vos données, lisibles dès le premier regard.",
    body: "Indicateurs clés, courbes de tendance, état de chaque machine — configurables sans code à partir de vos topics MQTT.",
    features: [
      "Vue live par machine",
      "Widgets drag-and-drop",
      "Multi-sites consolidé",
      "Export CSV / PDF",
      "Accès multi-rôles",
    ],
    visual: <DevicesMockup />,
  },
  {
    kicker: "HISTORIQUE",
    title: "Comparez, détectez, anticipez avant la panne.",
    body: "Explorez l'historique de n'importe quel tag sur vos plages temporelles. Multi-tags, graphiques combinés, exports.",
    features: [
      "Graphiques recharts temps réel",
      "Comparaison périodes",
      "Détection de dérive",
      "Raccourcis 1h / 6h / 24h / 7j",
      "Vues mémorisées",
    ],
    visual: <HistoryMockup />,
  },
  {
    kicker: "AGENT IA",
    title: "Une IA qui raisonne sur vos données terrain.",
    body: "Posez une question en français. L'agent analyse vos séries temporelles, génère des rapports et explique ce qu'il voit.",
    features: [
      "Analyse en langage naturel",
      "Détection d'anomalies",
      "Rapports automatiques",
      "Graphiques inline générés",
      "Mémoire contextuelle",
    ],
    visual: <AgentMockup />,
  },
];

function ServiceSection({ kicker, title, body, features, visual, flip }: typeof SERVICES[0] & { flip: boolean }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 });

  return (
    <section
      ref={ref}
      style={{ borderTop: "1px solid var(--border-light)", background: "#fff" }}
    >
      <div className="c sp">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}
        >
          {/* Texte */}
          <div className={flip ? "lg:order-2" : ""}>
            <span className="section-kicker">{kicker}</span>
            <h2 className="h2-dark mb-5 max-w-[420px]">{title}</h2>
            <p className="text-[15px] leading-relaxed mb-8" style={{ color: "var(--text-muted-dark)" }}>
              {body}
            </p>
            {/* Liste features */}
            <ul className="space-y-2 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-[14px]" style={{ color: "#333" }}>
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "var(--teal-dim)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--teal)" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#demo" className="btn-arrow-dark">
              <span className="btn-arrow-dark__text">En savoir plus</span>
              <span className="btn-arrow-dark__icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>

          {/* Visual */}
          <div className={flip ? "lg:order-1" : ""}>
            <div className="device-frame overflow-hidden">
              <div className="device-frame-bar">
                <span className="device-frame-dot" /><span className="device-frame-dot" /><span className="device-frame-dot" />
                <div
                  className="ml-3 flex h-5 flex-1 max-w-[180px] items-center rounded-sm px-2"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <span className="text-[10px]" style={{ color: "var(--text-muted-light)" }}>app.arcos.io</span>
                </div>
              </div>
              {visual}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Grille feature cards intro */
const CARDS = [
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    title: "Dashboard",
    desc: "Vues opérationnelles sur vos topics MQTT.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    title: "Agent IA",
    desc: "Analyse, anomalies et rapports automatiques.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
    title: "Alertes",
    desc: "Seuils dynamiques, notifications < 500ms.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    title: "Multi-sites",
    desc: "Vue consolidée tous vos sites industriels.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: "Historique",
    desc: "Tendances longue durée sur tous vos tags.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "Sécurité",
    desc: "TLS, authentification, logs d'audit complets.",
  },
];

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <>
      {/* Intro grille */}
      <section id="features" style={{ background: "var(--grey-1)", borderTop: "1px solid var(--border-light)" }}>
        <div className="c sp">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <span className="section-kicker">La plateforme</span>
              <h2 className="h2-dark max-w-[480px]">
                Ce qu&apos;Arcos construit
                <br />
                pour vous.
              </h2>
            </div>
            <a href="#demo" className="btn-arrow-dark shrink-0">
              <span className="btn-arrow-dark__text">Voir une démo</span>
              <span className="btn-arrow-dark__icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </motion.div>

          <div className="grid gap-px" style={{ border: "1px solid var(--border-light)", borderRadius: 14, overflow: "hidden", gridTemplateColumns: "repeat(3, 1fr)" }}>
            {CARDS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.35, delay: 0.05 + i * 0.06 }}
                className="p-7 flex flex-col gap-3"
                style={{
                  background: "#fff",
                  borderRight: (i + 1) % 3 !== 0 ? "1px solid var(--border-light)" : "none",
                  borderBottom: i < 3 ? "1px solid var(--border-light)" : "none",
                }}
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ background: "var(--grey-1)", color: "var(--grey-4)" }}
                >
                  {c.icon}
                </div>
                <p className="text-[15px] font-semibold" style={{ color: "var(--text-dark)" }}>{c.title}</p>
                <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-muted-dark)" }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections alternées */}
      {SERVICES.map((s, i) => (
        <ServiceSection key={s.kicker} {...s} flip={i % 2 !== 0} />
      ))}

      {/* Section alertes */}
      <section style={{ background: "var(--black)", borderTop: "1px solid var(--border-dark)" }}>
        <div className="c sp">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="section-kicker section-kicker--light">ALERTES</span>
              <h2 className="h2-light mb-5 max-w-[420px]">
                Alertes multi-canal
                <br />
                avant la panne.
              </h2>
              <p className="text-[15px] leading-relaxed mb-8" style={{ color: "var(--text-muted-light)" }}>
                Seuils dynamiques sur n'importe quel topic MQTT. Escalades par rôle.
                Notifications email, SMS, webhook en moins de 500ms.
              </p>
              <div className="flex gap-6">
                {[
                  { num: "< 500ms", label: "Temps de réaction" },
                  { num: "∞",       label: "Topics MQTT" },
                ].map((m) => (
                  <div key={m.label} className="metric-badge">
                    <span className="metric-num">{m.num}</span>
                    <span className="metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
              <a href="#demo" className="btn-arrow mt-8 inline-flex">
                <span className="btn-arrow__text">Configurer des alertes</span>
                <span className="btn-arrow__icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
            <div className="device-frame overflow-hidden">
              <div className="device-frame-bar">
                <span className="device-frame-dot" /><span className="device-frame-dot" /><span className="device-frame-dot" />
              </div>
              <AlarmsMockup />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
