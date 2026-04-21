"use client";
import { useState } from "react";
import { AnimateIn } from "./AnimateIn";
import { HGButton, TiltCard } from "./TiltCard";

const ACCORDION = [
  {
    key: "dashboard",
    label: "Dashboard temps réel",
    body: "Tous vos KPIs machine centralisés dans une vue unifiée. Température, pression, débit — mis à jour en moins d'une seconde sans aucune configuration supplémentaire.",
  },
  {
    key: "alertes",
    label: "Alertes intelligentes",
    body: "Seuils HIGH / LOW / NO_COMM configurables par machine. Acquittement depuis l'interface ou par e-mail. Journal d'audit complet pour chaque événement.",
  },
  {
    key: "historique",
    label: "Historique & analyse",
    body: "Explorez n'importe quelle plage temporelle sur plusieurs tags simultanément. Export CSV, agrégation horaire ou mensuelle, et analyse post-incident en quelques secondes.",
  },
  {
    key: "agent",
    label: "Agent IA",
    body: "Interrogez vos données en langage naturel. L'agent contextualise, analyse les anomalies, et génère un rapport PDF téléchargeable en quelques secondes.",
  },
];

const BRANDS = ["Siemens", "Schneider", "Rockwell", "ABB", "Mitsubishi", "Bosch", "Fanuc"];

export function Problem() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      {/* ── Logo band ── */}
      <div className="line" />
      <section className="c spm">
        <div style={{ display: "flex", alignItems: "center", gap: 0, overflowX: "auto" }}>
          <p style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap", marginRight: 36, flexShrink: 0, fontWeight: 500 }}>
            Compatible avec
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
          <AnimateIn>
            <h2 className="h-statement">
              Une couche temps réel <span className="dim">qui connecte vos machines,</span> vos équipes, <span className="dim">et vos décisions.</span>
            </h2>
            <p style={{ fontSize: 15.875, color: "var(--text)", lineHeight: 1.6, marginTop: "2rem", fontWeight: 500 }}>
              Sans Arcos, vos données restent dispersées entre machines, protocoles et feuilles Excel. Avec Arcos, tout remonte en temps réel dans une interface unique — de l&apos;atelier au comité de direction.
            </p>
            <HGButton href="#demo" style={{ marginTop: "2rem" }}>Voir la démo</HGButton>
          </AnimateIn>

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
                      transition: "transform 0.2s",
                      transform: open === item.key ? "rotate(45deg)" : "none",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      width: 24, height: 24, flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </div>
                {open === item.key && (
                  <p style={{
                    fontSize: 14, color: "var(--text)", lineHeight: 1.65,
                    marginTop: "0.85rem", fontWeight: 500,
                  }}>
                    {item.body}
                  </p>
                )}
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
