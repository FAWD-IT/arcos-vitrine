"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* ── Feature cards (grille 3 colonnes) */
const FEATURE_CARDS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "Dashboard temps réel",
    desc: "Vues opérationnelles construites sur vos topics MQTT. Indicateurs, courbes, tableaux — configurables sans code.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "Agent IA embarqué",
    desc: "Un agent qui lit vos séries temporelles, détecte les patterns inhabituels et vous explique ce qu'il voit.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
    title: "Alertes intelligentes",
    desc: "Seuils dynamiques, escalades configurables, notifications multi-canal. Plus d'alerte manquée.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "Multi-sites centralisé",
    desc: "Supervisez tous vos sites depuis une interface unique. Vue consolidée ou focus par site, en un clic.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Historique & tendances",
    desc: "Stockage long-terme des mesures. Comparez des périodes, identifiez les dérives avant qu'elles deviennent des pannes.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Déploiement sécurisé",
    desc: "On-premise ou cloud selon vos contraintes. Chiffrement TLS, authentification multi-facteur, logs d'audit.",
  },
];

/* ── Sections alternées détaillées */
const CHAPTERS = [
  {
    tag: "Dashboard",
    title: "Vos données, lisibles dès le premier regard.",
    body: "Arcos construit des vues opérationnelles à partir de vos topics MQTT. Indicateurs clés, courbes de tendance, tableaux comparatifs — chaque rôle voit ce dont il a besoin.",
    metric: { num: "< 1s", label: "Latence affichage" },
    placeholder: "Dashboard principal — vue temps réel",
    flip: false,
  },
  {
    tag: "Agent IA",
    title: "Une IA qui raisonne sur vos données terrain.",
    body: "L'agent lit vos séries temporelles, détecte les patterns inhabituels et génère des rapports automatiques. Pas de configuration supplémentaire — il s'adapte à vos données.",
    metric: { num: "98%", label: "Détection anomalies" },
    placeholder: "Interface agent IA — analyse en cours",
    flip: true,
  },
  {
    tag: "Alertes",
    title: "Alertes multi-canal avant la panne.",
    body: "Seuils dynamiques sur n'importe quel topic MQTT. Escalades configurables par rôle. Notifications par email, SMS, webhook — en moins de 500ms après dépassement.",
    metric: { num: "< 500ms", label: "Temps de réaction" },
    placeholder: "Centre d'alertes — historique & règles",
    flip: false,
  },
];

function FeatureCard({ icon, title, desc }: typeof FEATURE_CARDS[0]) {
  return (
    <div className="card p-6 cursor-default">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#F3F4F6] text-[#6B7280]">
        {icon}
      </div>
      <h3 className="text-[17px] font-semibold text-[#0A0A0A]">{title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280]">{desc}</p>
    </div>
  );
}

function ChapterSection({ tag, title, body, metric, placeholder, flip }: typeof CHAPTERS[0]) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const textCol = (
    <div className="flex flex-col justify-center">
      <p className="section-label">{tag}</p>
      <h2 className="mt-2 max-w-[420px]">{title}</h2>
      <p className="mt-4 max-w-[440px] text-[16px] leading-relaxed text-[#6B7280]">{body}</p>
      <div className="mt-8 inline-flex items-center gap-3">
        <div className="metric-badge">
          <span className="metric-badge-num">{metric.num}</span>
          <span className="metric-badge-label">{metric.label}</span>
        </div>
      </div>
      <a href="#demo" className="btn-primary mt-8 w-fit">
        En savoir plus
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  );

  const visualCol = (
    <div className="relative">
      <div className="device-frame">
        <div className="device-frame-bar">
          <span className="device-frame-dot" />
          <span className="device-frame-dot" />
          <span className="device-frame-dot" />
          <div className="ml-3 h-5 flex-1 max-w-[200px] rounded-[4px] bg-[#E5E7EB]" />
        </div>
        <div className="img-placeholder aspect-[4/3] w-full">
          <div className="flex flex-col items-center gap-2 text-center px-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#D1D5DB]">
              <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
            </svg>
            <span className="text-[#9CA3AF] text-[12px]">{placeholder}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={ref} className="bg-white">
      <div className="container-arcos section-pad">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
        >
          {flip ? <>{visualCol}{textCol}</> : <>{textCol}{visualCol}</>}
        </motion.div>
      </div>
    </section>
  );
}

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* Grille feature cards */}
      <section id="features" className="bg-[#F7F7F5]">
        <div className="container-arcos section-pad">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="section-label">La plateforme</p>
            <h2 className="max-w-[500px]">
              Ce qu&apos;Arcos construit
              <br />
              <span className="text-[#6B7280]">pour vous.</span>
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURE_CARDS.map((fc, i) => (
              <motion.div
                key={fc.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <FeatureCard {...fc} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* Sections alternées */}
      {CHAPTERS.map((ch) => (
        <div key={ch.tag}>
          <ChapterSection {...ch} />
          <div className="divider" />
        </div>
      ))}
    </>
  );
}
