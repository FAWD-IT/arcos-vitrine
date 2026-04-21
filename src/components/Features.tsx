"use client";

const FEATURE_CARDS = [
  {
    icon: "⚡",
    title: "Temps réel MQTT",
    desc: "Données de vos capteurs affichées avec moins d'une seconde de délai, sans aucune configuration supplémentaire.",
  },
  {
    icon: "📊",
    title: "Historique & graphes",
    desc: "Explorez vos séries temporelles sur n'importe quelle plage, avec agrégation et export CSV intégrés.",
  },
  {
    icon: "🔔",
    title: "Alertes intelligentes",
    desc: "Seuils configurables, niveaux HIGH/LOW/NO_COMM, acquittement depuis l'interface ou par e-mail.",
  },
  {
    icon: "🤖",
    title: "Agent IA",
    desc: "Posez vos questions en langage naturel. L'agent analyse vos données et génère des rapports PDF automatiquement.",
  },
  {
    icon: "🔌",
    title: "Hub protocoles",
    desc: "MQTT, Modbus, OPC-UA, HTTP — un seul point d'entrée pour toute votre infrastructure industrielle.",
  },
  {
    icon: "🏭",
    title: "Multi-sites",
    desc: "Gérez des dizaines de sites depuis un tableau de bord unifié, avec contrôle d'accès par équipe.",
  },
];

const SERVICES = [
  {
    id: "dashboard",
    label: "DASHBOARD ✦",
    title: "Tout votre atelier\nd'un seul coup d'œil.",
    desc: "Le tableau de bord centralise vos KPIs en temps réel : température, pression, débit. Chaque widget est configurable et se met à jour en moins d'une seconde.",
    checks: [
      "Widgets personnalisables par capteur",
      "Alertes actives en temps réel",
      "Accès multi-niveaux (opérateur, manager)",
    ],
    dark: false,
    visual: <DashboardCard />,
  },
  {
    id: "historique",
    label: "HISTORIQUE ✦",
    title: "Remontez le temps.\nAnalysez chaque anomalie.",
    desc: "L'explorateur d'historique vous permet de croiser plusieurs tags sur n'importe quelle plage temporelle. Idéal pour les audits, la maintenance préventive, et la traçabilité réglementaire.",
    checks: [
      "Sélection multi-tags simultanée",
      "Agrégation horaire, journalière, mensuelle",
      "Export CSV en un clic",
    ],
    dark: true,
    visual: <HistoryCard />,
  },
  {
    id: "alertes",
    label: "ALERTES ✦",
    title: "Réagir avant que\nça déraille.",
    desc: "Configurez vos seuils une fois, Arcos surveille en permanence. Les alertes sont horodatées, acquittables et archivées pour chaque machine.",
    checks: [
      "Niveaux HIGH / LOW / NO_COMM",
      "Acquittement depuis l'app ou par e-mail",
      "Journal d'audit complet",
    ],
    dark: false,
    visual: <AlarmsCard />,
  },
  {
    id: "agent",
    label: "AGENT IA ✦",
    title: "Votre data ingénieur\nestoujours disponible.",
    desc: "Interrogez vos données en langage naturel. L'agent contextualise, analyse, et peut générer un rapport PDF complet en quelques secondes.",
    checks: [
      "Requêtes en français ou anglais",
      "Analyse statistique automatique",
      "Rapport PDF téléchargeable",
    ],
    dark: true,
    visual: <AgentCard />,
  },
];

/* ── Visual Cards (remplacent les browser-frame mockups) ── */

function DashboardCard() {
  const bars = [72, 55, 88, 63, 90, 47, 78, 85, 60, 93];
  return (
    <div className="svc-card" style={{ height: "100%", minHeight: 280, position: "relative", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.25rem" }}>
        <span style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Live dashboard</span>
        <span style={{ marginLeft: "auto", width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 16 }}>
        {[
          { label: "Température", value: "68.4°C", color: "#f97316" },
          { label: "Pression",    value: "2.1 bar", color: "#14a9cf" },
          { label: "Débit",       value: "1.8 m³/s", color: "#a78bfa" },
        ].map(m => (
          <div key={m.label} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "10px 12px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", margin: "0 0 4px", letterSpacing: "0.05em" }}>{m.label}</p>
            <p style={{ fontSize: 18, fontWeight: 700, color: m.color, margin: 0 }}>{m.value}</p>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 60 }}>
        {bars.map((h, i) => (
          <div key={i} style={{ flex: 1, background: i >= 7 ? "var(--accent)" : "rgba(255,255,255,0.12)", borderRadius: 3, height: `${h}%`, transition: "height 0.3s ease" }} />
        ))}
      </div>
    </div>
  );
}

function HistoryCard() {
  const points = [30, 45, 38, 60, 52, 75, 68, 80, 72, 90, 85, 95];
  const w = 300, h = 100;
  const toX = (i: number) => (i / (points.length - 1)) * w;
  const toY = (v: number) => h - (v / 100) * h;
  const path = points.map((v, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(v)}`).join(" ");
  const area = `${path} L ${toX(points.length - 1)} ${h} L 0 ${h} Z`;
  return (
    <div className="svc-card-l" style={{ height: "100%", minHeight: 280 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: "1rem" }}>
        <span style={{ fontSize: 11, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--text-muted-d)" }}>Historique — 30 jours</span>
        <span style={{ marginLeft: "auto", fontSize: 11, padding: "3px 10px", background: "var(--light-bg)", borderRadius: 999, color: "var(--text-muted-d)", border: "1px solid var(--bd-light)" }}>Export CSV</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: 80, display: "block", marginBottom: 12 }}>
        <defs>
          <linearGradient id="grad-hist" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#14a9cf" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#14a9cf" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#grad-hist)" />
        <path d={path} fill="none" stroke="#14a9cf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        {[["Min", "28.4°C"], ["Moy", "62.1°C"], ["Max", "95.0°C"]].map(([k, v]) => (
          <div key={k} style={{ textAlign: "center", padding: "8px 0", background: "var(--light-bg)", borderRadius: 8 }}>
            <p style={{ fontSize: 10, color: "var(--text-muted-d)", margin: "0 0 2px", letterSpacing: "0.05em" }}>{k}</p>
            <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text-dark)", margin: 0 }}>{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AlarmsCard() {
  const rows = [
    { label: "MACHINE-01", type: "HIGH",     time: "Il y a 2 min",   ack: false },
    { label: "COMPRESSEUR", type: "NO_COMM", time: "Il y a 12 min",  ack: false },
    { label: "POMPE-B",     type: "LOW",     time: "Il y a 1h 04",   ack: true  },
  ];
  const color = { HIGH: "#f97316", LOW: "#14a9cf", NO_COMM: "#ef4444" };
  return (
    <div className="svc-card" style={{ height: "100%", minHeight: 280 }}>
      <p style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: "0 0 1rem" }}>Alertes actives</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {rows.map(r => (
          <div key={r.label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: "rgba(255,255,255,0.04)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)" }}>
            <span style={{
              fontSize: 10, fontWeight: 600, padding: "2px 7px",
              borderRadius: 4, letterSpacing: "0.05em",
              background: `${color[r.type as keyof typeof color]}22`,
              color: color[r.type as keyof typeof color],
              border: `1px solid ${color[r.type as keyof typeof color]}44`,
            }}>{r.type}</span>
            <span style={{ fontSize: 13, color: "#fff", flex: 1 }}>{r.label}</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{r.time}</span>
            {!r.ack && (
              <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, background: "rgba(20,169,207,0.12)", color: "#14a9cf", border: "1px solid rgba(20,169,207,0.2)", cursor: "pointer" }}>ACK</span>
            )}
            {r.ack && (
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>✓ Ack</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function AgentCard() {
  return (
    <div className="svc-card" style={{ height: "100%", minHeight: 280, display: "flex", flexDirection: "column", gap: 12 }}>
      <p style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: 0 }}>Agent IA</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        <div style={{ alignSelf: "flex-end", maxWidth: "80%", background: "rgba(20,169,207,0.12)", border: "1px solid rgba(20,169,207,0.2)", borderRadius: "12px 12px 2px 12px", padding: "10px 14px", fontSize: 13, color: "#fff" }}>
          Quelle machine a eu le plus d&apos;alertes ce mois ?
        </div>
        <div style={{ alignSelf: "flex-start", maxWidth: "88%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "2px 12px 12px 12px", padding: "10px 14px", fontSize: 13, color: "rgba(255,255,255,0.8)" }}>
          <strong style={{ color: "#fff" }}>MACHINE-01</strong> avec 23 alertes ce mois. Je détecte un pattern récurrent entre 14h–16h.
        </div>
        <div style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", background: "rgba(20,169,207,0.08)", borderRadius: 8, border: "1px solid rgba(20,169,207,0.2)" }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10V7l4-5 4 5v3" stroke="#14a9cf" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span style={{ fontSize: 11, color: "#14a9cf" }}>Rapport PDF disponible</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <input readOnly value="Analyser les vibrations depuis lundi…" style={{ flex: 1, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "8px 12px", fontSize: 12, color: "rgba(255,255,255,0.4)", outline: "none" }} />
        <button style={{ padding: "8px 12px", background: "var(--accent)", borderRadius: 8, border: "none", color: "#fff", fontSize: 12, cursor: "pointer" }}>→</button>
      </div>
    </div>
  );
}

/* ── Section Feature alternée ── */
type ServiceItem = {
  id: string;
  label: string;
  title: string;
  desc: string;
  checks: string[];
  dark: boolean;
  visual: React.ReactNode;
};

function ServiceSection({ svc, flip }: { svc: ServiceItem; flip: boolean }) {
  const bg   = svc.dark ? "var(--black)"   : "var(--light-bg)";
  const text = svc.dark ? "var(--text-light)" : "var(--text-dark)";
  const bd   = svc.dark ? "var(--bd-dark)"    : "var(--bd-light)";
  const mutedColor = svc.dark ? "rgba(255,255,255,0.45)" : "var(--text-muted-d)";
  const kickerCls  = svc.dark ? "kicker kicker--light"  : "kicker kicker--dark";
  const titleCls   = svc.dark ? "title-l" : "title-d";

  return (
    <section
      id={svc.id}
      style={{ background: bg, borderTop: `1px solid ${bd}` }}
    >
      <div className="c sp">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="feature-grid"
        >
          {/* Text block */}
          <div style={{ order: flip ? 2 : 1 }}>
            <p className={kickerCls}><span className="kicker__sym">✦</span> {svc.label}</p>
            <h2
              className={titleCls}
              style={{ whiteSpace: "pre-line", marginBottom: "1.5rem" }}
            >
              {svc.title}
            </h2>
            <p style={{ fontSize: 16, color: mutedColor, lineHeight: 1.7, marginBottom: "2rem" }}>
              {svc.desc}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {svc.checks.map(c => (
                <div key={c} className={`check-item ${svc.dark ? "" : "check-item--dark"}`}>
                  <span className="check-item__dot">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M1.5 4.5l2 2 4-4" stroke={svc.dark ? "#14a9cf" : "#14a9cf"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span style={{ color: svc.dark ? "rgba(255,255,255,0.65)" : "var(--text-muted-d)" }}>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div style={{ order: flip ? 1 : 2 }}>
            {svc.visual}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .feature-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .feature-grid > * { order: unset !important; }
        }
      `}</style>
    </section>
  );
}

export function Features() {
  return (
    <>
      {/* ── Intro grid 3×2 feature cards ── */}
      <section id="features" style={{ background: "var(--light-bg)", borderTop: "1px solid var(--bd-light)" }}>
        <div className="c sp">
          <p className="kicker kicker--dark"><span className="kicker__sym">✦</span> Plateforme</p>
          <h2 className="title-d" style={{ maxWidth: 620, marginBottom: "3.5rem" }}>
            Tout ce dont l&apos;industrie<br />a besoin. Rien de superflu.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}
          >
            {FEATURE_CARDS.map(card => (
              <div
                key={card.title}
                style={{
                  background: "var(--black-1)",
                  border: "1px solid #222",
                  borderRadius: 16,
                  padding: "2rem",
                  cursor: "default",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#222")}
              >
                <span style={{ fontSize: 28, display: "block", marginBottom: "1rem" }}>{card.icon}</span>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#fff", margin: "0 0 0.5rem", lineHeight: 1.3 }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.6 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Alternating service sections ── */}
      {SERVICES.map((svc, i) => (
        <ServiceSection key={svc.id} svc={svc} flip={i % 2 === 1} />
      ))}
    </>
  );
}
