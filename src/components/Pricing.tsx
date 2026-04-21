"use client";
import { AnimateIn } from "./AnimateIn";
import { HGButton } from "./TiltCard";

const PLANS = [
  {
    name: "Starter",
    price: "€190",
    period: "/mois",
    desc: "Idéal pour un premier site ou un POC terrain.",
    features: [
      "Jusqu'à 5 appareils MQTT",
      "Historique 90 jours",
      "Alertes email",
      "1 utilisateur",
      "Support standard",
    ],
    cta: "Démarrer",
  },
  {
    name: "Pro",
    price: "€490",
    period: "/mois",
    desc: "Pour les équipes opérationnelles sur plusieurs lignes.",
    features: [
      "Appareils illimités",
      "Historique 2 ans",
      "Alertes email + SMS + webhook",
      "Agent IA inclus",
      "5 utilisateurs",
      "Support prioritaire",
    ],
    cta: "Choisir Pro",
    highlight: true,
  },
  {
    name: "Entreprise",
    price: "Sur devis",
    period: "",
    desc: "Multi-sites, SSO, SLA garanti, déploiement on-premise.",
    features: [
      "Sites illimités",
      "Historique illimité",
      "SSO / LDAP",
      "SLA 99.7% contractuel",
      "Utilisateurs illimités",
      "Support dédié 24/7",
    ],
    cta: "Nous contacter",
  },
];

export function Pricing() {
  return (
    <>
      <div className="line" />
      <section id="pricing" className="c sp">
        {/* Header */}
        <AnimateIn as="div" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginBottom: "4rem" }} className="pricing-header">
          <h2 className="h-statement">
            Offres alignées <span className="dim">sur votre périmètre.</span>
          </h2>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <p style={{ fontSize: 15.875, color: "var(--text)", lineHeight: 1.6, fontWeight: 500 }}>
              Du pilote terrain à la supervision multi-sites — chaque plan inclut un déploiement accompagné et un support réactif.
            </p>
          </div>
        </AnimateIn>

        {/* Plans: 3 col row */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid var(--border)" }}
          className="plans-grid"
        >
          {PLANS.map(plan => (
            <div
              key={plan.name}
              style={{
                borderRight: "1px solid var(--border)",
                padding: "2.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: 0,
                borderLeft: plan.highlight ? "1px solid rgba(255,255,255,0.18)" : "none",
              }}
            >
              {plan.highlight && (
                <p style={{ fontSize: 11, color: "var(--teal)", letterSpacing: "0.10em", textTransform: "uppercase", fontWeight: 500, marginBottom: "1rem" }}>
                  ● Recommandé
                </p>
              )}
              {!plan.highlight && (
                <p style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.10em", textTransform: "uppercase", fontWeight: 500, marginBottom: "1rem" }}>
                  {plan.name}
                </p>
              )}
              {plan.highlight && (
                <p style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.10em", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.5rem" }}>
                  {plan.name}
                </p>
              )}

              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: "0.5rem" }}>
                <span
                  style={{
                    fontSize: plan.price === "Sur devis" ? 22 : 36,
                    fontWeight: 500,
                    color: "var(--white)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    fontFamily: "'PP Neue Montreal', Arial, sans-serif",
                  }}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 500 }}>{plan.period}</span>
                )}
              </div>

              <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: "2rem", lineHeight: 1.5, fontWeight: 500 }}>
                {plan.desc}
              </p>

              <div className="line" style={{ marginBottom: "2rem" }} />

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: "2.5rem", flex: 1 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--muted)", fontSize: 13, flexShrink: 0, marginTop: 2 }}>→</span>
                    <span style={{ fontSize: 14, color: "var(--text)", fontWeight: 500 }}>{f}</span>
                  </li>
                ))}
              </ul>

              <HGButton href="#demo" style={{ alignSelf: "flex-start" }}>{plan.cta}</HGButton>
            </div>
          ))}
          {/* Last item right border off */}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .pricing-header { grid-template-columns: 1fr !important; }
          .plans-grid { grid-template-columns: 1fr !important; }
          .plans-grid > * { border-right: none !important; border-left: none !important; border-top: 1px solid var(--border) !important; }
        }
      `}</style>
    </>
  );
}
