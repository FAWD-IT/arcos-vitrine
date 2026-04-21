"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    desc: "Un site pilote pour démarrer",
    price: "Sur devis",
    features: ["1 site supervisé", "Jusqu'à 5 devices", "Dashboard temps réel", "Alertes basiques", "Support email"],
    cta: "Commencer",
    hi: false,
  },
  {
    name: "Pro",
    desc: "Pour les PME qui veulent scaler",
    price: "Sur devis",
    features: ["Multi-sites", "Devices illimités", "Agent IA intégré", "Rapports automatiques", "P&ID interactif", "Support prioritaire", "API access"],
    cta: "Demander une démo",
    hi: true,
  },
  {
    name: "Enterprise",
    desc: "Déploiements critiques",
    price: "Sur mesure",
    features: ["Tout de Pro", "Déploiement on-premise", "SLA garanti", "Intégrations custom", "Formation sur site", "Account manager"],
    cta: "Nous contacter",
    hi: false,
  },
];

export default function Pricing() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="pricing" style={{ background: "var(--grey-1)", borderTop: "1px solid var(--border-light)" }}>
      <div className="c sp" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <span className="section-kicker">Tarifs</span>
            <h2 className="h2-dark max-w-[400px]">
              Offres alignées
              <br />
              sur votre périmètre.
            </h2>
          </div>
          <p className="max-w-[320px] text-[15px] leading-relaxed" style={{ color: "var(--text-muted-dark)" }}>
            Facturation par site supervisé. Devis selon votre contexte technique, pas au siège.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative flex flex-col rounded-[14px] p-8"
              style={{
                background: plan.hi ? "var(--black)" : "#fff",
                border: plan.hi ? "2px solid var(--teal)" : "1px solid var(--border-light)",
              }}
            >
              {plan.hi && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 pill pill--teal text-[11px]"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <span className="pill__dot" />
                  Recommandé
                </span>
              )}

              <div>
                <h3
                  className="text-[19px] font-semibold"
                  style={{ color: plan.hi ? "#fff" : "var(--text-dark)" }}
                >
                  {plan.name}
                </h3>
                <p className="mt-1 text-[13px]" style={{ color: plan.hi ? "var(--text-muted-light)" : "var(--text-muted-dark)" }}>
                  {plan.desc}
                </p>
              </div>

              <div
                className="my-6 border-t pt-6"
                style={{ borderColor: plan.hi ? "var(--border-dark)" : "var(--border-light)" }}
              >
                <span
                  className="text-[26px] font-bold"
                  style={{ letterSpacing: "-0.025em", color: plan.hi ? "#fff" : "var(--text-dark)" }}
                >
                  {plan.price}
                </span>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ background: plan.hi ? "rgba(20,169,207,0.15)" : "var(--grey-1)" }}
                    >
                      <Check className="h-3 w-3" strokeWidth={2.5} style={{ color: plan.hi ? "var(--teal-light)" : "var(--grey-4)" }} />
                    </div>
                    <span className="text-[13px]" style={{ color: plan.hi ? "rgba(255,255,255,0.65)" : "var(--text-muted-dark)" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.hi ? (
                <a href="#demo" className="btn-arrow justify-center">
                  <span className="btn-arrow__text flex-1 text-center">{plan.cta}</span>
                  <span className="btn-arrow__icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              ) : (
                <a href="#demo" className="btn-arrow-dark justify-center">
                  <span className="btn-arrow-dark__text flex-1 text-center">{plan.cta}</span>
                  <span className="btn-arrow-dark__icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
