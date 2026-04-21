"use client";

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
    <section
      id="integrations"
      style={{ background: "var(--white)", borderTop: "1px solid var(--bd-light)" }}
    >
      <div className="c sp">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "flex-start",
          }}
          className="integ-grid"
        >
          {/* Left: text */}
          <div style={{ position: "sticky", top: 100 }}>
            <p className="kicker kicker--dark"><span className="kicker__sym">✦</span> Connectivité</p>
            <h2 className="title-d" style={{ marginBottom: "1.5rem" }}>
              Un hub qui parle<br />tous vos protocoles.
            </h2>
            <p style={{ fontSize: 16, color: "var(--text-muted-d)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
              Arcos s&apos;intègre à votre infrastructure existante sans aucune réécriture. Branchez, configurez en quelques clics, et les données arrivent.
            </p>
            <a href="#demo" className="btn-ad" style={{ textDecoration: "none" }}>
              <span className="btn-ad__t">Voir toutes les intégrations</span>
              <span className="btn-ad__i">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Right: protocol grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            {PROTOCOLS.map(p => (
              <div
                key={p.name}
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--bd-light)",
                  borderRadius: 12,
                  padding: "1.25rem 1.5rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 0 1px rgba(20,169,207,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--bd-light)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span
                    style={{
                      width: 18, height: 18, borderRadius: "50%",
                      background: "rgba(20,169,207,0.1)", flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M1.5 4.5l2 2 4-4" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-dark)" }}>{p.name}</span>
                </div>
                <p style={{ fontSize: 12, color: "var(--text-muted-d)", lineHeight: 1.5, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .integ-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .integ-grid > *:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}
