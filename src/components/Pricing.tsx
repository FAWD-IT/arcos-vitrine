"use client";

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
      "Support standard",
      "1 utilisateur",
    ],
    cta: "Démarrer",
    highlighted: false,
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
      "Déploiement sous 5 jours",
    ],
    cta: "Choisir Pro",
    highlighted: true,
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
      "Déploiement on-premise",
      "Support dédié 24/7",
    ],
    cta: "Nous contacter",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" style={{ background: "var(--light-bg)", borderTop: "1px solid var(--bd-light)" }}>
      <div className="c sp">
        <p className="kicker kicker--dark"><span className="kicker__sym">✦</span> Tarifs</p>
        <h2 className="title-d" style={{ maxWidth: 520, marginBottom: "3.5rem" }}>
          Offres alignées<br />sur votre périmètre.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            alignItems: "start",
          }}
          className="pricing-grid"
        >
          {PLANS.map(plan => (
            <div
              key={plan.name}
              style={{
                background: plan.highlighted ? "var(--black)" : "var(--white)",
                border: plan.highlighted ? "2px solid var(--accent)" : "1px solid var(--bd-light)",
                borderRadius: 16,
                padding: "2.5rem",
                transition: "all 0.3s ease",
                position: "relative",
              }}
            >
              {plan.highlighted && (
                <span
                  className="pill pill--teal"
                  style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" }}
                >
                  Recommandé
                </span>
              )}

              <p style={{ fontSize: 13, fontWeight: 500, color: plan.highlighted ? "rgba(255,255,255,0.5)" : "var(--text-muted-d)", margin: "0 0 0.75rem", letterSpacing: "0.05em" }}>
                {plan.name}
              </p>

              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: "0.5rem" }}>
                <span
                  style={{
                    fontSize: plan.price === "Sur devis" ? 26 : 42,
                    fontWeight: 700,
                    color: plan.highlighted ? "#fff" : "var(--text-dark)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                  }}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span style={{ fontSize: 13, color: plan.highlighted ? "rgba(255,255,255,0.4)" : "var(--text-muted-d)" }}>
                    {plan.period}
                  </span>
                )}
              </div>
              <p style={{ fontSize: 13, color: plan.highlighted ? "rgba(255,255,255,0.5)" : "var(--text-muted-d)", margin: "0 0 2rem", lineHeight: 1.5 }}>
                {plan.desc}
              </p>

              {/* CTA */}
              {plan.highlighted ? (
                <a href="#demo" className="btn-a" style={{ textDecoration: "none", marginBottom: "2rem", display: "inline-flex" }}>
                  <span className="btn-a__t">{plan.cta}</span>
                  <span className="btn-a__i">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              ) : (
                <a href="#demo" className="btn-ad" style={{ textDecoration: "none", marginBottom: "2rem", display: "inline-flex" }}>
                  <span className="btn-ad__t">{plan.cta}</span>
                  <span className="btn-ad__i">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              )}

              <div style={{ height: 1, background: plan.highlighted ? "rgba(255,255,255,0.08)" : "var(--bd-light)", marginBottom: "2rem" }} />

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13 }}>
                    <span
                      style={{
                        width: 16, height: 16, borderRadius: "50%", flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: plan.highlighted ? "rgba(20,169,207,0.15)" : "var(--light-bg)",
                      }}
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 4l2 2 4-4" stroke={plan.highlighted ? "#14a9cf" : "#14a9cf"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span style={{ color: plan.highlighted ? "rgba(255,255,255,0.7)" : "var(--text-muted-d)" }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 420px; margin-inline: auto; }
        }
      `}</style>
    </section>
  );
}
