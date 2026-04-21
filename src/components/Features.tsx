"use client";

const SERVICES = [
  {
    id: "realtime",
    num: "01",
    label: "Dashboard",
    title: "Tout votre atelier,\nd'un seul coup d'œil.",
    desc: "Le tableau de bord centralise vos KPIs en temps réel. Chaque widget se met à jour en moins d'une seconde — de la température d'une machine à la pression d'un circuit.",
    checks: ["Widgets personnalisables par capteur", "Alertes actives en temps réel", "Accès multi-niveaux (opérateur, manager)"],
  },
  {
    id: "history",
    num: "02",
    label: "Historique",
    title: "Remontez le temps.\nAnalysez chaque anomalie.",
    desc: "L'explorateur d'historique vous permet de croiser plusieurs tags sur n'importe quelle plage temporelle. Idéal pour les audits, la maintenance préventive et la traçabilité réglementaire.",
    checks: ["Sélection multi-tags simultanée", "Agrégation horaire, journalière, mensuelle", "Export CSV en un clic"],
  },
  {
    id: "alerts",
    num: "03",
    label: "Alertes",
    title: "Réagir avant\nque ça déraille.",
    desc: "Configurez vos seuils une fois, Arcos surveille en permanence. Les alertes sont horodatées, acquittables et archivées pour chaque machine.",
    checks: ["Niveaux HIGH / LOW / NO_COMM", "Acquittement depuis l'app ou par e-mail", "Journal d'audit complet"],
  },
  {
    id: "agent",
    num: "04",
    label: "Agent IA",
    title: "Votre data ingénieur,\ntoujours disponible.",
    desc: "Interrogez vos données en langage naturel. L'agent contextualise, analyse les anomalies et génère un rapport PDF en quelques secondes.",
    checks: ["Requêtes en français ou anglais", "Analyse statistique automatique", "Rapport PDF téléchargeable"],
  },
];

export function Features() {
  return (
    <>
      <div className="line" />
      <section id="features-detail" className="c sp">
        {/* Header row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginBottom: "4rem" }} className="feat-header">
          <h2 className="h-statement">
            La plateforme <span className="dim">qui s&apos;adapte à votre infrastructure.</span>
          </h2>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <p style={{ fontSize: 15.875, color: "var(--text)", lineHeight: 1.6, fontWeight: 500 }}>
              Arcos couvre l&apos;ensemble du cycle — de la collecte brute des données MQTT à l&apos;analyse intelligente, en passant par les alertes terrain et les rapports dirigeants.
            </p>
          </div>
        </div>

        {/* Services list */}
        {SERVICES.map(svc => (
          <div
            key={svc.id}
            id={svc.id}
            style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr 1fr",
              gap: 40,
              borderTop: "1px solid var(--border)",
              paddingTop: "2.5rem",
              paddingBottom: "2.5rem",
              alignItems: "flex-start",
            }}
            className="svc-row"
          >
            {/* Number */}
            <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 500, letterSpacing: "0.06em", paddingTop: 4 }}>
              {svc.num}
            </span>

            {/* Title */}
            <div>
              <p style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: "0.85rem", fontWeight: 500 }}>
                {svc.label}
              </p>
              <h3
                style={{
                  fontFamily: "'Aeonikpro', Arial, sans-serif",
                  fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                  fontWeight: 500,
                  color: "var(--white)",
                  lineHeight: 1.1,
                  whiteSpace: "pre-line",
                }}
              >
                {svc.title}
              </h3>
            </div>

            {/* Description + checks */}
            <div>
              <p style={{ fontSize: 15.875, color: "var(--text)", lineHeight: 1.6, fontWeight: 500, marginBottom: "1.5rem" }}>
                {svc.desc}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {svc.checks.map(c => (
                  <div key={c} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--muted)", fontSize: 13, flexShrink: 0, marginTop: 2 }}>→</span>
                    <span style={{ fontSize: 14, color: "var(--text)", fontWeight: 500, lineHeight: 1.5 }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="line" />
      </section>

      <style>{`
        @media (max-width: 768px) {
          .feat-header { grid-template-columns: 1fr !important; }
          .svc-row { grid-template-columns: 40px 1fr !important; }
          .svc-row > *:last-child { grid-column: 2 / 3; }
        }
      `}</style>
    </>
  );
}
