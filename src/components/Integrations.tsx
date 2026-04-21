"use client";
import { AnimateIn } from "./AnimateIn";
import { HGButton } from "./TiltCard";

const PROTOCOLS = [
  { name: "Ewon Flexy",  desc: "Passerelle industrielle de référence — onboarding guidé en quelques minutes" },
  { name: "Modbus",      desc: "TCP & RTU, lecture des registres coils et holding sur vos automates" },
  { name: "OPC-UA",      desc: "Serveur/client, sécurité certificats, découverte de namespace" },
  { name: "MQTT",        desc: "Broker natif, QoS 0/1/2, retain — flux machine vers cloud" },
  { name: "Sparkplug B", desc: "EoN & Device payloads pour les parcs IIoT modernes" },
  { name: "HTTP/REST",   desc: "Webhooks entrants/sortants, auth Bearer ou clé API" },
  { name: "BACnet",      desc: "IP & MSTP — supervision bâtiments intelligents et HVAC" },
  { name: "CSV / SQL",   desc: "Import massif ou connexion PostgreSQL / MySQL pour historique externe" },
];

export function Integrations() {
  return (
    <>
      <div className="line" />
      <section id="integrations" className="c sp">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "flex-start" }}
          className="integ-grid"
        >
          {/* Left: text */}
          <AnimateIn>
            <p style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: "1.5rem", fontWeight: 500 }}>
              Connectivité
            </p>
            <h2 className="h-statement">
              Vos machines <span className="dim">déjà connectées</span> dans la semaine.
            </h2>
            <p style={{ fontSize: 15.875, color: "var(--text)", lineHeight: 1.6, marginTop: "1.5rem", fontWeight: 500 }}>
              Arcos fonctionne avec les passerelles industrielles que vous utilisez déjà — Ewon Flexy en tête. Pas de réécriture d&apos;infrastructure : branchez, suivez l&apos;onboarding guidé, les données arrivent.
            </p>
            <HGButton href="#contact" style={{ marginTop: "2rem" }}>Voir toutes les connexions</HGButton>
          </AnimateIn>

          {/* Right: protocol list */}
          <div>
            {PROTOCOLS.map(p => (
              <div
                key={p.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: 20,
                  borderTop: "1px solid var(--border)",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  alignItems: "center",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderTopColor = "var(--border-hover)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderTopColor = "var(--border)"; }}
              >
                <span style={{ fontSize: 13, fontWeight: 500, color: "var(--white)", letterSpacing: "0.04em" }}>{p.name}</span>
                <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 500, lineHeight: 1.5 }}>{p.desc}</span>
              </div>
            ))}
            <div className="line" />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .integ-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </>
  );
}
