"use client";
import { AnimateIn } from "./AnimateIn";

const PROTOCOLS = [
  { name: "MQTT",      desc: "Broker natif, QoS 0/1/2, retain, wildcards" },
  { name: "Modbus",    desc: "TCP & RTU, registres coils/holding en lecture/écriture" },
  { name: "OPC-UA",    desc: "Serveur/client, sécurité certificats, namespace discovery" },
  { name: "HTTP/REST", desc: "Webhooks entrants/sortants, auth Bearer ou API key" },
  { name: "Sparkplug", desc: "Compatible Sparkplug B, EoN & Device payloads" },
  { name: "BACnet",    desc: "IP & MSTP — bâtiments intelligents et HVAC" },
  { name: "SQL",       desc: "Connexion PostgreSQL / MySQL pour historique externe" },
  { name: "CSV",       desc: "Import/export massif via fichier ou S3 bucket" },
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
              Un hub qui parle <span className="dim">tous vos protocoles.</span>
            </h2>
            <p style={{ fontSize: 15.875, color: "var(--text)", lineHeight: 1.6, marginTop: "1.5rem", fontWeight: 500 }}>
              Arcos s&apos;intègre à votre infrastructure existante sans aucune réécriture. Branchez, configurez en quelques clics, les données arrivent.
            </p>
            <a href="#demo" className="btn-hg" style={{ marginTop: "2rem", textDecoration: "none", display: "inline-flex" }}>
              <span className="arr">→</span> Voir toutes les intégrations
            </a>
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
