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
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent/70">
            Pricing
          </p>
          <h2 className="text-[clamp(1.85rem,3.8vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em]">
            Offres par périmètre
            <br />
            <span className="text-white/35">site &amp; volume de données.</span>
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
              className={`relative flex flex-col rounded-3xl border p-8 sm:p-9 card-hover ${
                plan.highlighted
                  ? "border-accent/35 bg-gradient-to-b from-accent/[0.12] via-[#101010] to-[#0a0a0a] card-inset shadow-[0_0_0_1px_rgba(20,169,207,0.2)_inset]"
                  : "border-white/[0.08] bg-[#0c0c0c] card-inset"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-accent/30 bg-accent px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-black/40">
                  Recommandé
                </div>
              )}

              <h3 className="text-[19px] font-bold text-white/95">{plan.name}</h3>
              <p className="mt-1 text-[13px] text-white/30">{plan.description}</p>

              <div className="my-7 border-b border-white/[0.06] pb-7">
                <span className="text-[30px] font-bold tracking-tight text-white/90">
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
                className={`group mt-auto flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-white/[0.1] text-white/70 hover:border-white/18 hover:bg-white/[0.04]"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
