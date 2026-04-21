"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { FileText } from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-x-hidden border-t border-white/[0.06] bg-section-slab px-6 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.25]" />
      {/* Halo contenu dans la section — pas de translate vers l’extérieur (évite scroll horizontal + blur) */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[min(320px,50vw)] w-[min(320px,42vw)] rounded-full bg-[radial-gradient(circle,rgba(20,169,207,0.08)_0%,transparent_68%)] blur-2xl" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-16 max-w-[720px] text-center"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent/70">
            Plateforme
          </p>
          <h2 className="text-[clamp(1.85rem,3.8vw,2.85rem)] font-bold leading-[1.1] tracking-[-0.03em]">
            Supervision, alertes, IA
            <span className="text-white/35"> — dans une même surface.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/36">
            Dashboards temps réel, règles d&apos;alerte, schémas process et
            interrogation des données : les briques que nous exposons côté
            produit.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          <FeatureCard
            delay={0}
            title="Dashboard temps réel"
            description="Visualisation des tags, courbes et états — par site et par machine. Données capteurs en direct, toujours."
            visual={<DashboardVisual />}
          />
          <FeatureCard
            delay={0.1}
            title="Agent IA intégré"
            description="Interrogez vos capteurs en langage naturel. L'IA comprend vos process — sans requête SQL."
            visual={<AIVisual />}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-32"
        >
          <h2 className="mb-4 text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em]">
            Vue opérationnelle
            <br />
            <span className="text-white/30">tags, alertes et tendances.</span>
          </h2>
          <p className="mb-12 max-w-[500px] text-[15px] leading-relaxed text-white/35">
            Un tableau de bord pour suivre l&apos;état courant, les seuils et
            l&apos;historique sur la fenêtre qui vous intéresse.
          </p>
          <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0a0a] card-inset">
            <DashboardMockup />
          </div>
        </motion.div>

        <div className="mt-32 grid gap-5 md:grid-cols-2">
          <FeatureCard
            delay={0}
            title="Alertes intelligentes"
            description="Seuils configurables, notifications proactives. Soyez prévenu avant la panne, pas après l'arrêt."
            visual={<AlertsVisual />}
          />
          <FeatureCard
            delay={0.1}
            title="P&ID interactif"
            description="Schémas process cliquables liés aux données live. Navigation visuelle dans vos installations."
            visual={<PIDVisual />}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-32 grid items-center gap-12 lg:grid-cols-2"
        >
          <div>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em]">
              Multi-sites &amp; rapports
              <br />
              <span className="text-white/30">même modèle de données.</span>
            </h2>
            <p className="mt-5 max-w-[440px] text-[15px] leading-relaxed text-white/35">
              Agrégation de plusieurs sites dans une vue cohérente, exports et
              synthèses assistées à partir des séries temporelles déjà
              collectées.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="#demo"
                className="rounded-full bg-white px-6 py-2.5 text-[14px] font-medium text-black transition-all hover:bg-white/90"
              >
                Demander une démo
              </a>
              <a
                href="#pricing"
                className="rounded-full border border-white/15 px-6 py-2.5 text-[14px] text-white/60 transition-all hover:border-white/25 hover:bg-white/5"
              >
                Voir les tarifs
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0a0a] p-6 sm:p-8 card-inset">
            <MultiSiteVisual />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Hooks ──────────────────────────────────────────────────────────── */

function useTypewriter(text: string, speed: number, startDelay: number, active: boolean) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!active) return;
    setDisplayed("");
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay, active]);

  return displayed;
}

function useCountUp(end: number, duration: number, active: boolean, decimals = 0) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => v.toFixed(decimals));
  const [value, setValue] = useState("0");

  useEffect(() => {
    if (!active) return;
    const controls = animate(mv, end, { duration, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setValue(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [active, end, duration, mv, rounded]);

  return value;
}

/* ── Feature Card ───────────────────────────────────────────────── */

function FeatureCard({
  title,
  description,
  visual,
  delay,
}: {
  title: string;
  description: string;
  visual: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-1">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[13px] bg-[#101010] p-8 card-inset">
          {visual}
        </div>
      </div>
      <h3 className="mt-6 text-[22px] font-semibold tracking-[-0.01em]">
        {title}
      </h3>
      <p className="mt-2 max-w-[380px] text-[14px] leading-relaxed text-white/35">
        {description}
      </p>
    </motion.div>
  );
}

/* ── Dashboard Orb Visual ────────────────────────────────────────── */

function DashboardVisual() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="w-full max-w-[360px]">
      <motion.div
        className="relative mx-auto h-52 w-52"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Rotating outer glow */}
        <motion.div
          className="absolute inset-[-20px] rounded-full bg-gradient-to-br from-accent/30 via-transparent to-accent/10 blur-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/40 via-accent/20 to-transparent blur-xl"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-3 rounded-full bg-gradient-to-br from-accent/45 via-brand-navy/50 to-transparent" />
        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-accent via-brand-navy/60 to-transparent shadow-inner" />
        <motion.div
          className="absolute inset-[30%] rounded-full bg-gradient-to-br from-accent-light/55 via-accent/35 to-transparent blur-sm"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-[-4px] rounded-full border border-accent/20" />
        <motion.div
          className="absolute inset-[-12px] rounded-full border border-accent/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
}

/* ── AI Typewriter Visual ────────────────────────────────────────── */

function AIVisual() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const question = "Quelle est la température moyenne de la chaudière cette semaine ?";
  const answer =
    "La température moyenne de la chaudière B-101 cette semaine est de 78.4°C, avec un pic à 92°C mardi à 14h30.";

  const typedQuestion = useTypewriter(question, 30, 400, isInView);
  const typedAnswer = useTypewriter(answer, 20, 400 + question.length * 30 + 600, isInView);

  const showAnswer = isInView && typedQuestion.length >= question.length;
  const showCursor = isInView && typedAnswer.length < answer.length;

  return (
    <div ref={ref} className="w-full max-w-[340px] space-y-3">
      {/* User message */}
      <motion.div
        className="rounded-xl bg-white/[0.04] px-4 py-3"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="flex items-center gap-2 text-[11px] text-white/25">
          <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
          Vous
        </div>
        <p className="mt-1.5 text-[13px] text-white/50">
          &quot;{typedQuestion}
          {typedQuestion.length < question.length && (
            <motion.span
              className="inline-block w-[2px] h-[14px] bg-white/50 align-middle ml-0.5"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          )}
          {typedQuestion.length >= question.length && <>&quot;</>}
        </p>
      </motion.div>

      {/* AI response */}
      <motion.div
        className="rounded-xl bg-accent/[0.08] px-4 py-3"
        initial={{ opacity: 0, y: 10, height: 0 }}
        animate={
          showAnswer
            ? { opacity: 1, y: 0, height: "auto" }
            : { opacity: 0, y: 10, height: 0 }
        }
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-2 text-[11px] text-accent/50">
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-accent/40"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          Arcos IA
        </div>
        <p className="mt-1.5 text-[13px] text-accent-light/70">
          {typedAnswer}
          {showCursor && showAnswer && (
            <motion.span
              className="inline-block w-[2px] h-[14px] bg-accent-light/60 align-middle ml-0.5"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          )}
        </p>
      </motion.div>

      {/* Input field */}
      <motion.div
        className="flex items-center gap-2 rounded-xl bg-white/[0.02] px-4 py-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="h-3 w-3 rounded-full border border-white/10 bg-white/5" />
        <span className="text-[12px] text-white/20">Posez une question...</span>
      </motion.div>
    </div>
  );
}

/* ── Alerts Visual (staggered slide-in) ──────────────────────────── */

function AlertsVisual() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const alerts = [
    {
      text: "Pression > 5 bar — Pompe P-201",
      dot: "bg-red-400",
      time: "14:32",
      badge: "Critique",
      badgeColor: "bg-red-500/15 text-red-400",
    },
    {
      text: "Température chaudière proche seuil",
      dot: "bg-accent-light",
      time: "13:15",
      badge: "Attention",
      badgeColor: "bg-accent/15 text-accent-light",
    },
    {
      text: "Débit normalisé — Ligne 3",
      dot: "bg-green-400",
      time: "11:48",
      badge: "Résolu",
      badgeColor: "bg-green-500/15 text-green-400",
    },
  ];

  return (
    <div ref={ref} className="w-full max-w-[340px] space-y-3">
      {alerts.map((alert, i) => (
        <motion.div
          key={alert.text}
          className="flex items-center gap-3 rounded-xl bg-white/[0.04] px-4 py-3"
          initial={{ opacity: 0, x: -30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.4, ease: "easeOut" }}
        >
          <motion.div
            className={`h-2 w-2 shrink-0 rounded-full ${alert.dot}`}
            animate={isInView ? { scale: [1, 1.5, 1] } : {}}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
          <div className="flex-1">
            <div className="text-[12px] text-white/50">{alert.text}</div>
          </div>
          <motion.span
            className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-medium ${alert.badgeColor}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.6 + i * 0.4 }}
          >
            {alert.badge}
          </motion.span>
          <span className="shrink-0 font-mono text-[10px] text-white/15">
            {alert.time}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* ── P&ID Animated Visual ────────────────────────────────────────── */

function PIDVisual() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.2 + i * 0.3, ease: "easeOut" as const },
    }),
  };

  return (
    <svg ref={ref} viewBox="0 0 320 180" className="w-full max-w-[340px]">
      {/* Node 1: Pompe */}
      <motion.g
        custom={0}
        variants={nodeVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <rect x="20" y="60" width="60" height="60" rx="8" fill="none" stroke="rgba(20,169,207,0.3)" strokeWidth="1" />
        <text x="50" y="85" textAnchor="middle" fill="rgba(20,169,207,0.5)" fontSize="10" fontWeight="500">Pompe</text>
        <text x="50" y="100" textAnchor="middle" fill="rgba(20,169,207,0.3)" fontSize="8">P-201</text>
        <circle cx="72" cy="65" r="4" fill="rgba(74,222,128,0.6)">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
      </motion.g>

      {/* Flow line 1 */}
      <motion.line
        x1="80" y1="90" x2="130" y2="90"
        stroke="rgba(20,169,207,0.2)"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      {/* Flowing particle 1 */}
      {isInView && (
        <motion.circle
          r="2.5"
          fill="rgba(20,169,207,0.6)"
          animate={{ cx: [80, 130], cy: [90, 90] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1.4, ease: "linear" }}
        />
      )}

      {/* Node 2: Vanne */}
      <motion.g
        custom={1}
        variants={nodeVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <circle cx="160" cy="90" r="30" fill="none" stroke="rgba(20,169,207,0.3)" strokeWidth="1" />
        <text x="160" y="87" textAnchor="middle" fill="rgba(20,169,207,0.5)" fontSize="10" fontWeight="500">Vanne</text>
        <text x="160" y="100" textAnchor="middle" fill="rgba(20,169,207,0.3)" fontSize="8">V-102</text>
      </motion.g>

      {/* Flow line 2 */}
      <motion.line
        x1="190" y1="90" x2="240" y2="90"
        stroke="rgba(20,169,207,0.2)"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
      {isInView && (
        <motion.circle
          r="2.5"
          fill="rgba(20,169,207,0.6)"
          animate={{ cx: [190, 240], cy: [90, 90] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 2.0, ease: "linear" }}
        />
      )}

      {/* Node 3: Chaudière */}
      <motion.g
        custom={2}
        variants={nodeVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <rect x="240" y="60" width="60" height="60" rx="8" fill="none" stroke="rgba(20,169,207,0.3)" strokeWidth="1" />
        <text x="270" y="85" textAnchor="middle" fill="rgba(20,169,207,0.5)" fontSize="10" fontWeight="500">Chaudière</text>
        <text x="270" y="100" textAnchor="middle" fill="rgba(20,169,207,0.3)" fontSize="8">B-101</text>
      </motion.g>

      {/* Animated data labels */}
      <motion.text
        x="50" y="140" textAnchor="middle" fill="rgba(74,222,128,0.5)" fontSize="9"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.6 }}
      >
        4.2 bar
      </motion.text>
      <motion.text
        x="160" y="140" textAnchor="middle" fill="rgba(74,222,128,0.5)" fontSize="9"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.8 }}
      >
        127 L/h
      </motion.text>
      <motion.text
        x="270" y="140" textAnchor="middle" fill="rgba(251,191,36,0.6)" fontSize="9"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: [0, 1, 0.6, 1] } : {}}
        transition={{ delay: 2.0, duration: 1 }}
      >
        89°C
      </motion.text>
    </svg>
  );
}

/* ── Dashboard Mockup (animated) ──────────────────────────────────── */

function DashboardMockup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="p-4 sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 rounded-md bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-white/15">
          app.arcos.io/dashboard
        </div>
      </div>

      <div className="grid grid-cols-12 gap-3">
        {/* Main chart - animated draw */}
        <div className="col-span-12 rounded-xl border border-white/[0.04] bg-white/[0.02] p-5 sm:col-span-8">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[12px] font-medium text-white/40">
              Production — Température Chaudière B-101
            </span>
            <motion.span
              className="rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] text-green-400"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Live
            </motion.span>
          </div>
          <AnimatedChart isInView={isInView} />
        </div>

        {/* Metrics sidebar - count up */}
        <div className="col-span-12 flex flex-col gap-3 sm:col-span-4">
          <AnimatedMetric label="Pression" end={4.2} unit="bar" color="text-green-400" decimals={1} isInView={isInView} delay={0.3} />
          <AnimatedMetric label="Débit" end={127} unit="L/h" color="text-green-400" decimals={0} isInView={isInView} delay={0.5} />
          <AnimatedMetric label="Temp." end={89} unit="°C" color="text-accent-light" decimals={0} isInView={isInView} delay={0.7} />
          <AnimatedMetric label="Vibrations" end={0.8} unit="mm/s" color="text-green-400" decimals={1} isInView={isInView} delay={0.9} />
        </div>

        {/* AI - typewriter */}
        <div className="col-span-12 rounded-xl border border-white/[0.04] bg-white/[0.02] p-5 sm:col-span-5">
          <div className="mb-3 text-[11px] font-medium text-white/30">Agent IA</div>
          <MockupAIMessage isInView={isInView} />
          <motion.div
            className="mt-2 text-[10px] text-white/15"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 4 }}
          >
            Dernière analyse : il y a 2 min
          </motion.div>
        </div>

        {/* Alerts - staggered */}
        <div className="col-span-12 rounded-xl border border-white/[0.04] bg-white/[0.02] p-5 sm:col-span-7">
          <div className="mb-3 text-[11px] font-medium text-white/30">Alertes récentes</div>
          <div className="space-y-2.5">
            {[
              { t: "14:32", text: "Seuil haut température dépassé (89°C)", d: "bg-accent-light" },
              { t: "13:15", text: "Pression stabilisée à 4.2 bar", d: "bg-blue-400" },
              { t: "11:48", text: "Redémarrage pompe P-201 effectué", d: "bg-green-400" },
            ].map((a, i) => (
              <motion.div
                key={a.t}
                className="flex items-start gap-2.5"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.5 + i * 0.4, duration: 0.5 }}
              >
                <motion.div
                  className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${a.d}`}
                  animate={isInView ? { scale: [1, 1.5, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
                <span className="flex-1 text-[12px] text-white/30">{a.text}</span>
                <span className="font-mono text-[10px] text-white/15">{a.t}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimatedChart({ isInView }: { isInView: boolean }) {
  const linePath = "M0,100 Q40,85 80,90 T160,70 T240,75 T320,55 T400,60 T460,40 L500,35";
  const areaPath = linePath + " L500,140 L0,140Z";

  return (
    <svg viewBox="0 0 500 140" className="w-full">
      <defs>
        <linearGradient id="mockGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(74,222,128)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="rgb(74,222,128)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[30, 60, 90, 120].map((y) => (
        <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      ))}
      <motion.path
        d={areaPath}
        fill="url(#mockGrad)"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
      />
      <motion.path
        d={linePath}
        fill="none"
        stroke="rgb(74,222,128)"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : {}}
        transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
      />
      <motion.circle
        cx="500"
        cy="35"
        r="3"
        fill="rgb(74,222,128)"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 2.3 }}
      >
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
      </motion.circle>
    </svg>
  );
}

function AnimatedMetric({
  label,
  end,
  unit,
  color,
  decimals,
  isInView,
  delay,
}: {
  label: string;
  end: number;
  unit: string;
  color: string;
  decimals: number;
  isInView: boolean;
  delay: number;
}) {
  const value = useCountUp(end, 1.5, isInView, decimals);

  return (
    <motion.div
      className="rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3"
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.4 }}
    >
      <div className="text-[10px] text-white/20">{label}</div>
      <div className="mt-0.5 flex items-baseline gap-1">
        <span className={`text-[20px] font-semibold tabular-nums ${color}`}>
          {value}
        </span>
        <span className="text-[10px] text-white/15">{unit}</span>
      </div>
    </motion.div>
  );
}

function MockupAIMessage({ isInView }: { isInView: boolean }) {
  const msg = "Température au-dessus du seuil depuis 14 min. Risque déclenchement sécurité.";
  const typed = useTypewriter(msg, 25, 2000, isInView);

  return (
    <motion.div
      className="rounded-lg bg-accent/[0.06] px-3 py-2.5 text-[12px] leading-relaxed text-accent-light/60"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay: 1.8 }}
    >
      &quot;{typed}
      {typed.length < msg.length && typed.length > 0 && (
        <motion.span
          className="inline-block h-[13px] w-[2px] bg-accent-light/50 align-middle ml-0.5"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
      {typed.length >= msg.length && <>&quot;</>}
    </motion.div>
  );
}

/* ── Multi-Site Visual (animated) ─────────────────────────────────── */

function MultiSiteVisual() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const sites = [
    { name: "Charleroi", status: "En ligne", devices: 12, dot: "bg-green-400", uptime: "99.7%" },
    { name: "Liège", status: "En ligne", devices: 8, dot: "bg-green-400", uptime: "99.9%" },
    { name: "Namur", status: "Maintenance", devices: 5, dot: "bg-accent-light", uptime: "97.2%" },
  ];

  return (
    <div ref={ref} className="space-y-3">
      <motion.div
        className="mb-4 flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        <span className="text-[12px] font-medium text-white/40">Tous les sites</span>
        <motion.span
          className="rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] text-green-400"
          animate={isInView ? { opacity: [0, 1] } : {}}
          transition={{ delay: 0.8 }}
        >
          3 en ligne
        </motion.span>
      </motion.div>

      {sites.map((site, i) => (
        <motion.div
          key={site.name}
          className="flex items-center justify-between rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <motion.div
              className={`h-2 w-2 rounded-full ${site.dot}`}
              animate={isInView ? { scale: [1, 1.4, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            />
            <div>
              <div className="text-[13px] font-medium text-white/50">{site.name}</div>
              <div className="text-[10px] text-white/20">{site.status}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[12px] text-white/30">{site.devices} devices</div>
            <div className="text-[10px] text-white/15">Uptime {site.uptime}</div>
          </div>
        </motion.div>
      ))}

      <motion.div
        className="mt-4 rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3"
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <FileText className="h-3.5 w-3.5 text-white/20" />
          <span className="text-[12px] font-medium text-white/40">Rapports automatiques</span>
        </div>
        <div className="mt-2 space-y-1">
          {[100, 80, 60].map((w, i) => (
            <motion.div
              key={w}
              className="h-1.5 rounded-full bg-white/[0.04]"
              style={{ width: `${w}%` }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 1.2 + i * 0.15, duration: 0.6 }}
            />
          ))}
        </div>
        <motion.div
          className="mt-2.5 flex gap-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8 }}
        >
          <span className="rounded-md bg-green-500/10 px-2 py-0.5 text-[9px] text-green-400">PDF</span>
          <span className="rounded-md bg-blue-500/10 px-2 py-0.5 text-[9px] text-blue-400">Planifié</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
