"use client";
import { AnimateIn } from "./AnimateIn";
import { WordReveal } from "./WordReveal";

const SERVICES = [
  {
    id: "realtime",
    num: "01",
    label: "Supervision en direct",
    title: "Tout votre parc machines,\nd'un seul coup d'œil.",
    desc: "Statut en ligne / hors ligne, mesures en temps réel et alarmes actives pour chaque équipement. La fiche machine regroupe tout : KPIs, historique, paramètres et qualité du signal.",
    checks: ["Mise à jour en moins d'une seconde", "Qualité de signal mesure par mesure", "Accès multi-niveaux (opérateur, manager, dirigeant)"],
  },
  {
    id: "alerts",
    num: "02",
    label: "Alertes & traçabilité",
    title: "Réagir avant\nque ça déraille.",
    desc: "Configurez vos seuils une fois, Arcos surveille en permanence. Les alertes sont horodatées, acquittables et archivées — indispensable pour les audits et la traçabilité réglementaire.",
    checks: ["Niveaux critique / bas / pas de communication", "Acquittement depuis l'interface ou par e-mail", "Journal d'audit complet et exportable"],
  },
  {
    id: "history",
    num: "03",
    label: "Historique & rapports",
    title: "Analyse post-incident\nen quelques secondes.",
    desc: "Croisez plusieurs mesures sur n'importe quelle plage temporelle. Planifiez des rapports récurrents (jour / semaine / mois) ou générez-les à la demande en PDF.",
    checks: ["Multi-tags simultanés sur la même vue", "Rapports planifiés automatiquement archivés", "Export CSV en un clic"],
  },
  {
    id: "agent",
    num: "04",
    label: "Assistant IA",
    title: "Interrogez vos données\nen langage naturel.",
    desc: "L'agent s'appuie sur les vraies données de vos machines — pas de réponses dans le vide. Il analyse les anomalies, génère des graphiques et produit un rapport PDF en quelques secondes. Les graphiques pertinents s'épinglent directement sur le tableau de bord.",
    checks: ["Réponses ancrées sur l'historique réel", "Graphiques générés dans la conversation", "Rapport PDF téléchargeable + épinglage dashboard"],
  },
  {
    id: "pid",
    num: "05",
    label: "Analyse P&ID",
    title: "La documentation\nenfin alignée au terrain.",
    desc: "Importez vos schémas P&ID : l'agent parcourt le schéma, l'inventaire des tags et l'historique récent, puis propose des enrichissements. L'ingénieur valide ou rejette chaque proposition — sans aucune écriture destructive sur les données brutes.",
    checks: ["Import DWG / DXF avec suivi de pipeline", "Propositions validées par l'ingénieur", "Cockpit opérationnel généré en quelques minutes"],
  },
];

export function Features() {
  return (
    <>
      <div className="line" />
      <section id="features-detail" className="c sp">
        {/* Header row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginBottom: "4rem" }} className="feat-header">
          <WordReveal
            className="h-statement"
            segments={[
              { text: "De la mesure brute " },
              { text: "à la décision éclairée,", dim: true },
              { text: " sans friction." },
            ]}
          />
          <AnimateIn style={{ display: "flex", alignItems: "flex-end" }} delay={200}>
            <p style={{ fontSize: 15.875, color: "var(--text)", lineHeight: 1.6, fontWeight: 500 }}>
              Arcos couvre l&apos;ensemble du cycle — connexion des machines, centralisation des mesures et alarmes, analyse intelligente et rapports automatiques — dans une seule plateforme déployée en jours.
            </p>
          </AnimateIn>
        </div>

        {/* Services list */}
        {SERVICES.map((svc, i) => (
          <AnimateIn
            key={svc.id}
            delay={i * 60}
            as="div"
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
                  fontFamily: "'PP Neue Montreal', Arial, sans-serif",
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
          </AnimateIn>
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
