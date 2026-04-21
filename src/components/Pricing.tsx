"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Un site pilote pour démarrer",
    price: "Sur devis",
    features: [
      "1 site supervisé",
      "Jusqu'à 5 devices",
      "Dashboard temps réel",
      "Alertes basiques",
      "Support email",
    ],
    cta: "Commencer",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "Pour les PME qui veulent scaler",
    price: "Sur devis",
    features: [
      "Multi-sites",
      "Devices illimités",
      "Agent IA intégré",
      "Rapports automatiques",
      "P&ID interactif",
      "Support prioritaire",
      "API access",
    ],
    cta: "Demander une démo",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Déploiements critiques",
    price: "Sur mesure",
    features: [
      "Tout de Pro",
      "Déploiement on-premise",
      "SLA garanti",
      "Intégrations custom",
      "Formation sur site",
      "Account manager dédié",
    ],
    cta: "Nous contacter",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-white/[0.06] bg-section-slab px-6 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.2]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[280px] w-[90%] max-w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(20,169,207,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-[640px] text-center"
        >
          <span className="tag-tech mb-6 inline-block">Pricing</span>
          <h2 className="text-display text-[clamp(1.85rem,3.8vw,3rem)] text-white">
            Offres par périmètre
            <br />
            <span className="text-white/28">site &amp; volume.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/36">
            Facturation alignée sur le nombre de sites supervisés et la charge
            mesurée — devis selon votre contexte (périmètre technique, pas au siège).
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`card-inset relative flex flex-col rounded-[var(--r-2xl)] border p-8 sm:p-9 ${
                plan.highlighted
                  ? "border-accent/35 bg-gradient-to-b from-accent/[0.1] via-[var(--surface-2)] to-[var(--surface-1)] shadow-[0_0_0_1px_rgba(20,169,207,0.18)_inset]"
                  : "border-[var(--border-dim)] bg-[var(--surface-1)]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-black/50"
                  style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}>
                  Recommandé
                </div>
              )}

              <h3 className="font-display text-[19px] font-700 tracking-tight text-white/95">{plan.name}</h3>
              <p className="mt-1 text-[13px] text-white/28">{plan.description}</p>

              <div className="my-7 border-b border-[var(--border-dim)] pb-7">
                <span className="text-data text-[28px] font-bold text-white/88">
                  {plan.price}
                </span>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                        plan.highlighted
                          ? "border-accent/25 bg-accent/10 text-accent-light"
                          : "border-white/[0.08] bg-white/[0.03] text-white/40"
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    <span className="text-[13px] leading-snug text-white/38">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`mt-auto flex w-full cursor-pointer items-center justify-center gap-2 text-[13px] ${
                  plan.highlighted ? "btn-primary" : "btn-ghost"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
