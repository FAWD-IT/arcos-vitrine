"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";

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
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="pricing" className="bg-[#F7F7F5]">
      <div className="container-arcos section-pad">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-[560px] text-center"
        >
          <p className="section-label">Tarifs</p>
          <h2>
            Offres par périmètre
            <br />
            <span className="text-[#6B7280]">site &amp; volume.</span>
          </h2>
          <p className="mx-auto mt-4 text-[16px] leading-relaxed text-[#6B7280]">
            Facturation alignée sur le nombre de sites supervisés.
            Devis selon votre contexte technique.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`relative flex flex-col rounded-[var(--r-xl)] bg-white p-8 ${
                plan.highlighted
                  ? "border-2 border-[#0A0A0A] shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
                  : "border border-[#E5E7EB]"
              }`}
            >
              {plan.highlighted && (
                <span className="badge absolute -top-3 left-1/2 -translate-x-1/2">
                  Recommandé
                </span>
              )}

              <div>
                <h3 className="text-[20px] font-semibold text-[#0A0A0A]">{plan.name}</h3>
                <p className="mt-1 text-[14px] text-[#6B7280]">{plan.description}</p>
              </div>

              <div className="my-6 border-t border-[#E5E7EB] pt-6">
                <span className="text-[28px] font-bold text-[#0A0A0A]">{plan.price}</span>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F3F4F6]">
                      <Check className="h-3 w-3 text-[#6B7280]" strokeWidth={2.5} />
                    </div>
                    <span className="text-[14px] text-[#6B7280]">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`mt-auto flex w-full cursor-pointer items-center justify-center gap-2 rounded-[var(--r-md)] px-6 py-3 text-[14px] font-semibold transition-all duration-150 ${
                  plan.highlighted
                    ? "bg-[#0A0A0A] text-white hover:opacity-80"
                    : "border border-[#E5E7EB] text-[#0A0A0A] hover:bg-[#F3F4F6]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
