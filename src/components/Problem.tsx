"use client";
import { useState } from "react";
import { AnimateIn } from "./AnimateIn";
import { HGButton, TiltCard } from "./TiltCard";
import { WordReveal } from "./WordReveal";

const ACCORDION = [
  {
    key: "dashboard",
    label: "Tableau de bord opérationnel",
    body: "Tous vos équipements en un coup d'œil : statut en ligne / hors ligne, mesures en temps réel, alertes actives. Chaque machine dispose de sa propre fiche avec KPIs personnalisables.",
  },
  {
    key: "historique",
    label: "Historique & traçabilité",
    body: "Croisez plusieurs mesures sur n'importe quelle plage temporelle. Export CSV, agrégation horaire ou mensuelle — indispensable pour les audits, la maintenance préventive et la traçabilité réglementaire.",
  },
  {
    key: "rapports",
    label: "Rapports automatiques",
    body: "Planifiez des rapports récurrents (jour / semaine / mois) ou ponctuels. Chaque rapport est généré automatiquement, archivé et consultable dans l'interface avec son historique d'exécution.",
  },
  {
    key: "pid",
    label: "Analyse P&ID assistée par IA",
    body: "Importez vos schémas P&ID : l'agent analyse l'installation, rapproche la documentation des tags réels et propose des enrichissements que l'ingénieur valide — sans aucune écriture destructive sur les données brutes.",
  },
];

const BRANDS = ["Ewon Flexy", "Siemens", "Schneider", "Rockwell", "ABB", "Mitsubishi", "Fanuc"];

export function Problem() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      {/* ── Logo band ── */}
      <div className="line" />
      <section className="c spm">
        <div style={{ display: "flex", alignItems: "center", gap: 0, overflowX: "auto" }}>
          <p style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap", marginRight: 36, flexShrink: 0, fontWeight: 500 }}>
            Connecté à
          </p>
          {BRANDS.map((b, i) => (
            <span key={b} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              {i > 0 && <span style={{ color: "rgba(255,255,255,0.08)", marginInline: 20 }}>|</span>}
              <span style={{ fontSize: 13, fontWeight: 500, color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{b}</span>
            </span>
          ))}
        </div>
      </section>
      <div className="line" />

      {/* ── Statement + accordion ── */}
      <section id="features" className="c sp">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "flex-start" }}
          className="stmt-grid"
        >
          {/* Left: big statement */}
          <div>
            <WordReveal
              className="h-statement"
              segments={[
                { text: "Vos machines génèrent des données. " },
                { text: "Il est temps", dim: true },
                { text: " d'en tirer parti." },
              ]}
            />
            <AnimateIn delay={300}>
              <p style={{ fontSize: 15.875, color: "var(--text)", lineHeight: 1.6, marginTop: "2rem", fontWeight: 500 }}>
                Sans plateforme adaptée, les mesures restent dispersées entre automates, feuilles Excel et rapports manuels. Arcos centralise tout — tableau de bord, alarmes, historique et IA — dans une interface unique accessible depuis n&apos;importe où.
              </p>
              <HGButton href="#demo" style={{ marginTop: "2rem" }}>Voir la démo</HGButton>
            </AnimateIn>
          </div>

          {/* Right: accordion */}
          <AnimateIn delay={120}>
            {ACCORDION.map(item => (
              <TiltCard
                key={item.key}
                className="hg-card"
                style={{
                  cursor: "pointer",
                  background: "transparent",
                  border: "none",
                  borderTop: "1px solid var(--border)",
                }}
                onClick={() => setOpen(open === item.key ? null : item.key)}
              >
                <div
                  style={{
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span className="h-section">{item.label}</span>
                  <span
                    style={{
                      fontSize: 20, color: "var(--muted)",
                      transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
                      transform: open === item.key ? "rotate(45deg)" : "none",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      width: 24, height: 24, flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </div>
                <div
                  className="accordion-body-outer"
                  data-open={open === item.key ? "true" : "false"}
                  aria-hidden={open !== item.key}
                >
                  <div className="accordion-body-inner">
                    <div className="accordion-body-content">
                      <p
                        style={{
                          fontSize: 14, color: "var(--text)", lineHeight: 1.65,
                          paddingTop: "0.85rem", paddingBottom: "0.15rem", fontWeight: 500,
                          margin: 0,
                        }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
            <div className="line" style={{ marginTop: 0 }} />
          </AnimateIn>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .stmt-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </>
  );
}
