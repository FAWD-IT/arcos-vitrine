"use client";

/**
 * Reproductions fidèles de l'UI Arcos (apps/web)
 * Couleurs et structure extraites de apps/web/src/styles.css et des pages réelles.
 *
 * Palette dashboard :
 *   bg      #0c0f14   surface  #141a24   card    #161d2a
 *   border  #243044   text     #e8edf5   muted   #8b9cb3
 *   accent  #3d9cf0   good     #3ecf8e   warn    #f0b429   bad #e85d5d
 *   chartColors: #1AAFE0 #F4845F #22C55E #A78BFA #FBBF24
 */

import {
  AreaChart, Area, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

/* ─── Données simulées ──────────────────────────────────── */

function genSine(points = 30, amp = 12, base = 72, freq = 0.4, noise = 3) {
  return Array.from({ length: points }, (_, i) => ({
    t: `${String(Math.floor(i / 2)).padStart(2, "0")}:${i % 2 === 0 ? "00" : "30"}`,
    v: parseFloat((base + amp * Math.sin(i * freq) + (Math.random() - 0.5) * noise).toFixed(1)),
  }));
}
function genRamp(points = 30, base = 2.2, drift = 0.008) {
  return Array.from({ length: points }, (_, i) => ({
    t: `${String(Math.floor(i / 2)).padStart(2, "0")}:${i % 2 === 0 ? "00" : "30"}`,
    v: parseFloat((base + drift * i + (Math.random() - 0.5) * 0.08).toFixed(2)),
  }));
}

const tempData   = genSine(30, 14, 68, 0.45, 2);
const pressData  = genRamp(30, 2.18, 0.007);
const flowData   = genSine(30, 5, 41, 0.3, 1.5);

/* ─── Tokens couleurs ───────────────────────────────────── */
const T = {
  bg:      "#0c0f14",
  surf:    "#141a24",
  card:    "#161d2a",
  border:  "#243044",
  text:    "#e8edf5",
  muted:   "#8b9cb3",
  accent:  "#3d9cf0",
  good:    "#3ecf8e",
  warn:    "#f0b429",
  bad:     "#e85d5d",
  chart1:  "#1AAFE0",
  chart2:  "#F4845F",
  chart3:  "#22C55E",
};

/* ─── Shell sidebar mini ────────────────────────────────── */
function Sidebar() {
  const nav = [
    { icon: "⊞", label: "Dashboard",  active: false },
    { icon: "⊙", label: "Machines",   active: true  },
    { icon: "⚡", label: "Alarmes",    active: false },
    { icon: "✦", label: "Assistant",  active: false },
  ];
  return (
    <div style={{
      width: 52, flexShrink: 0,
      background: T.surf,
      borderRight: `1px solid ${T.border}`,
      display: "flex", flexDirection: "column",
      alignItems: "center", gap: 4, padding: "12px 0",
    }}>
      {/* Logo dot */}
      <div style={{
        width: 26, height: 26, borderRadius: 6, marginBottom: 10,
        background: `linear-gradient(135deg, ${T.accent}, #1a60b8)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 11, fontWeight: 700, color: "#fff",
      }}>A</div>
      {nav.map((n) => (
        <div key={n.label} style={{
          width: 36, height: 36, borderRadius: 8,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13,
          background: n.active ? `color-mix(in srgb, ${T.accent} 12%, ${T.card})` : "transparent",
          color: n.active ? T.accent : T.muted,
          cursor: "default",
        }} title={n.label}>
          {n.icon}
        </div>
      ))}
    </div>
  );
}

/* ─── Chip qualité ──────────────────────────────────────── */
function QualityPill({ status }: { status: "good" | "warn" | "bad" }) {
  const cfg = {
    good: { color: T.good,  bg: "rgba(62,207,142,0.10)", label: "OK"      },
    warn: { color: T.warn,  bg: "rgba(240,180,41,0.10)", label: "Alerte"  },
    bad:  { color: T.bad,   bg: "rgba(232,93,93,0.10)",  label: "Erreur"  },
  }[status];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      background: cfg.bg, borderRadius: 999,
      padding: "2px 7px", fontSize: 9, fontWeight: 600,
      color: cfg.color, whiteSpace: "nowrap",
    }}>
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: cfg.color }} />
      {cfg.label}
    </span>
  );
}

/* ─── Widget recharts ───────────────────────────────────── */
function ChartWidget({
  title, value, unit, color, data,
}: {
  title: string; value: string; unit: string; color: string;
  data: { t: string; v: number }[];
}) {
  return (
    <div style={{
      background: T.card, border: `1px solid ${T.border}`,
      borderRadius: 12, padding: "12px 14px",
      display: "flex", flexDirection: "column", gap: 6,
    }}>
      <div style={{ fontSize: 9, color: T.muted, textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {title}
      </div>
      <div style={{ fontSize: 20, fontWeight: 700, color: T.text, letterSpacing: "-0.02em" }}>
        {value}
        <span style={{ fontSize: 11, fontWeight: 400, color: T.muted, marginLeft: 3 }}>{unit}</span>
      </div>
      <div style={{ height: 50, marginTop: 2 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id={`g-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor={color} stopOpacity={0.22} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone" dataKey="v" stroke={color} strokeWidth={1.5}
              fill={`url(#g-${color.replace("#", "")})`} dot={false} isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   1. HERO — Dashboard home (widgets grid)
══════════════════════════════════════════════════════════ */
export function HeroDashboardMockup() {
  const LIVE_TAGS = [
    { label: "Temp. moteur",    tag: "Motor_Temp_01", value: "68.4", unit: "°C",   status: "good" as const },
    { label: "Pression ligne",  tag: "Line_Press",    value: "2.31", unit: "bar",  status: "good" as const },
    { label: "Débit sortie",    tag: "Flow_Out",      value: "41.2", unit: "m³/h", status: "warn" as const },
    { label: "Sites actifs",    tag: "System_Status", value: "3 / 3", unit: "",    status: "good" as const },
    { label: "Agent IA",        tag: "AI_Agent",      value: "Actif", unit: "",    status: "good" as const },
    { label: "Dernière synchro",tag: "Sync",          value: "< 2s", unit: "",    status: "good" as const },
  ];

  return (
    <div style={{
      background: T.bg, borderRadius: 12, overflow: "hidden",
      fontFamily: '"DM Sans", system-ui, sans-serif',
      display: "flex", flexDirection: "column",
    }}>
      {/* Header app */}
      <div style={{
        background: T.surf, borderBottom: `1px solid ${T.border}`,
        padding: "10px 16px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 22, height: 22, borderRadius: 5,
            background: `linear-gradient(135deg, ${T.accent}, #1a60b8)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 10, fontWeight: 700, color: "#fff",
          }}>A</div>
          <span style={{ fontSize: 11, fontWeight: 600, color: T.text }}>Arcos</span>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {["Dashboard","Machines","Alarmes"].map((l) => (
            <span key={l} style={{ fontSize: 10, color: l === "Dashboard" ? T.accent : T.muted, cursor: "default" }}>{l}</span>
          ))}
        </div>
        <div style={{
          width: 22, height: 22, borderRadius: "50%",
          background: `linear-gradient(135deg, ${T.accent} 30%, #1a60b8)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 9, fontWeight: 700, color: "#fff",
        }}>JD</div>
      </div>

      {/* Content */}
      <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: T.text }}>
          Bonjour, Jean-Paul
          <span style={{ marginLeft: 8, fontSize: 10, color: T.muted, fontWeight: 400 }}>
            — Votre tableau de bord
          </span>
        </div>

        {/* Widget charts */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          <ChartWidget title="Température" value="68.4" unit="°C"   color={T.chart1} data={tempData} />
          <ChartWidget title="Pression"    value="2.31" unit="bar"  color={T.chart3} data={pressData} />
          <ChartWidget title="Débit"       value="41.2" unit="m³/h" color={T.chart2} data={flowData} />
        </div>

        {/* Live tags table */}
        <div style={{
          background: T.card, border: `1px solid ${T.border}`, borderRadius: 10,
          overflow: "hidden",
        }}>
          <div style={{
            padding: "8px 12px", borderBottom: `1px solid ${T.border}`,
            fontSize: 9, fontWeight: 600, color: T.muted,
            textTransform: "uppercase", letterSpacing: "0.08em",
          }}>
            Points de mesure — live
          </div>
          <div>
            {LIVE_TAGS.map((r, i) => (
              <div key={r.tag} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "6px 12px",
                borderBottom: i < LIVE_TAGS.length - 1 ? `1px solid ${T.border}` : "none",
              }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 500, color: T.text }}>{r.label}</div>
                  <div style={{ fontSize: 8, color: T.muted, fontFamily: '"JetBrains Mono", monospace' }}>{r.tag}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 600, color: T.text,
                    fontFamily: '"JetBrains Mono", monospace',
                  }}>
                    {r.value} <span style={{ fontSize: 9, color: T.muted, fontWeight: 400 }}>{r.unit}</span>
                  </span>
                  <QualityPill status={r.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   2. MACHINES — DevicesPage
══════════════════════════════════════════════════════════ */
export function DevicesMockup() {
  const DEVICES = [
    { name: "Compresseur Atlas Copco",     serial: "EWON-0041", project: "Site Charleroi",  status: "online",  last: "il y a 2s"   },
    { name: "Pompe centrifuge P-22",        serial: "EWON-0038", project: "Site Liège",      status: "online",  last: "il y a 8s"   },
    { name: "Chaudière industrielle CB-3",  serial: "EWON-0055", project: "Site Namur",      status: "online",  last: "il y a 12s"  },
    { name: "Moteur convoyeur M-07",        serial: "EWON-0029", project: "Site Charleroi",  status: "offline", last: "il y a 4min" },
  ];

  return (
    <div style={{
      background: T.bg, fontFamily: '"DM Sans", system-ui, sans-serif',
      display: "flex", borderRadius: 12, overflow: "hidden",
    }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "14px 16px" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: T.text }}>Machines</div>
            <div style={{ display: "flex", gap: 10, marginTop: 3 }}>
              {[
                { val: DEVICES.length,                                                                      label: "total",      c: T.muted },
                { val: DEVICES.filter(d => d.status === "online").length,                                   label: "en ligne",   c: T.good  },
                { val: DEVICES.filter(d => d.status === "offline").length,                                  label: "hors ligne", c: T.bad   },
              ].map((s) => (
                <span key={s.label} style={{ fontSize: 10, color: s.c }}>
                  <b style={{ fontWeight: 700 }}>{s.val}</b>
                  <span style={{ color: T.muted, marginLeft: 2 }}>{s.label}</span>
                </span>
              ))}
            </div>
          </div>
          <button style={{
            background: T.accent, color: "#fff",
            border: "none", borderRadius: 7,
            padding: "5px 10px", fontSize: 10, fontWeight: 600, cursor: "default",
          }}>+ Connecter</button>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {DEVICES.map((d) => (
            <div key={d.serial} style={{
              background: T.card, border: `1px solid ${T.border}`,
              borderRadius: 10, padding: "10px 12px",
              cursor: "default",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                <div style={{ fontSize: 10, fontWeight: 600, color: T.text, lineHeight: 1.3 }}>{d.name}</div>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 3,
                  fontSize: 8, fontWeight: 600,
                  color: d.status === "online" ? T.good : T.muted,
                  background: d.status === "online" ? "rgba(62,207,142,0.08)" : "rgba(139,156,179,0.08)",
                  borderRadius: 999, padding: "2px 6px", whiteSpace: "nowrap",
                }}>
                  <span style={{
                    width: 5, height: 5, borderRadius: "50%",
                    background: d.status === "online" ? T.good : T.muted,
                  }} />
                  {d.status === "online" ? "En ligne" : "Hors ligne"}
                </span>
              </div>
              <div style={{ fontSize: 8, fontFamily: '"JetBrains Mono", monospace', color: T.muted }}>{d.serial}</div>
              <div style={{ fontSize: 8, color: T.muted, marginTop: 1 }}>{d.project}</div>
              <div style={{ fontSize: 8, color: T.muted, marginTop: 4 }}>⏱ {d.last}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   3. HISTORIQUE — recharts LineChart multi-tags
══════════════════════════════════════════════════════════ */
export function HistoryMockup() {
  const combined = tempData.map((d, i) => ({
    t: d.t,
    temp: d.v,
    press: parseFloat((pressData[i]?.v * 30).toFixed(1)),
  }));

  return (
    <div style={{
      background: T.bg, fontFamily: '"DM Sans", system-ui, sans-serif',
      display: "flex", borderRadius: 12, overflow: "hidden",
    }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "14px 16px" }}>
        {/* Header */}
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.text }}>Historique des mesures</div>
          <div style={{ fontSize: 10, color: T.muted }}>Compresseur Atlas Copco — Site Charleroi</div>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", gap: 5, marginBottom: 10 }}>
          {["1h","6h","24h","7j"].map((l, i) => (
            <button key={l} style={{
              padding: "3px 8px", fontSize: 9, borderRadius: 5,
              border: `1px solid ${i === 2 ? T.accent : T.border}`,
              background: i === 2 ? `rgba(61,156,240,0.12)` : "transparent",
              color: i === 2 ? T.accent : T.muted, cursor: "default", fontWeight: 500,
            }}>{l}</button>
          ))}
          <div style={{
            marginLeft: "auto", display: "flex", gap: 8, alignItems: "center",
            fontSize: 9, color: T.muted,
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
              <span style={{ width: 10, height: 2, background: T.chart1, display: "inline-block", borderRadius: 1 }} />
              Temp. moteur
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
              <span style={{ width: 10, height: 2, background: T.chart3, display: "inline-block", borderRadius: 1 }} />
              Pression (×30)
            </span>
          </div>
        </div>

        {/* Chart */}
        <div style={{ height: 130 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={combined} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
              <CartesianGrid stroke={T.border} strokeDasharray="4 4" strokeOpacity={0.5} />
              <XAxis
                dataKey="t" tick={{ fill: T.muted, fontSize: 8, fontFamily: '"JetBrains Mono", monospace' }}
                tickLine={false} axisLine={{ stroke: T.border }}
                interval={5}
              />
              <YAxis
                tick={{ fill: T.muted, fontSize: 8, fontFamily: '"JetBrains Mono", monospace' }}
                tickLine={false} axisLine={false}
              />
              <Tooltip
                contentStyle={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 10 }}
                labelStyle={{ color: T.muted }}
                itemStyle={{ color: T.text }}
                isAnimationActive={false}
              />
              <Line type="monotone" dataKey="temp" stroke={T.chart1} strokeWidth={1.5} dot={false} isAnimationActive={false} />
              <Line type="monotone" dataKey="press" stroke={T.chart3} strokeWidth={1.5} dot={false} isAnimationActive={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
          {[
            { label: "Moy 24h",  val: "68.1 °C",  c: T.text  },
            { label: "Min",      val: "54.2 °C",  c: T.good  },
            { label: "Max",      val: "81.7 °C",  c: T.warn  },
            { label: "Données",  val: "2 880 pts", c: T.muted },
          ].map((s) => (
            <div key={s.label} style={{
              flex: 1, background: T.card, border: `1px solid ${T.border}`,
              borderRadius: 8, padding: "6px 8px",
            }}>
              <div style={{ fontSize: 8, color: T.muted, marginBottom: 2 }}>{s.label}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: s.c, fontFamily: '"JetBrains Mono", monospace' }}>
                {s.val}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   4. ALARMES — AlarmsPage
══════════════════════════════════════════════════════════ */
export function AlarmsMockup() {
  const ALARMS = [
    { machine: "Compresseur Atlas Copco", tag: "Motor_Temp_01", status: "HIGH",    value: "81.7 °C", time: "14:32",  resolved: null,    ack: false },
    { machine: "Pompe centrifuge P-22",   tag: "Line_Press",    status: "LOW",     value: "1.82 bar", time: "13:47", resolved: "14:05", ack: true  },
    { machine: "Moteur convoyeur M-07",   tag: "NO_COMM",       status: "NO_COMM", value: "—",        time: "10:12", resolved: null,    ack: false },
  ];

  return (
    <div style={{
      background: T.bg, fontFamily: '"DM Sans", system-ui, sans-serif',
      display: "flex", borderRadius: 12, overflow: "hidden",
    }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "14px 16px" }}>
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.text }}>Alarmes</div>
          <div style={{ fontSize: 10, color: T.muted }}>Vue consolidée — organisation</div>
        </div>

        {/* Actives */}
        <div style={{ marginBottom: 10 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 6, marginBottom: 6,
            fontSize: 10, fontWeight: 600, color: T.text,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: T.bad }} />
            Actives
            <span style={{
              background: `rgba(232,93,93,0.12)`, color: T.bad,
              borderRadius: 999, padding: "0px 5px", fontSize: 9, fontWeight: 700,
            }}>2</span>
          </div>

          <div style={{
            background: T.card, border: `1px solid ${T.border}`, borderRadius: 10, overflow: "hidden",
          }}>
            {/* Header */}
            <div style={{
              display: "grid", gridTemplateColumns: "1.6fr 1fr 0.7fr 0.7fr auto",
              padding: "5px 10px",
              borderBottom: `1px solid ${T.border}`,
              fontSize: 8, fontWeight: 600, color: T.muted,
              textTransform: "uppercase", letterSpacing: "0.08em",
            }}>
              <span>Machine</span><span>Signal</span><span>Statut</span><span>Déclenchée</span><span />
            </div>

            {ALARMS.filter(a => !a.resolved).map((a, i, arr) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "1.6fr 1fr 0.7fr 0.7fr auto",
                padding: "7px 10px", alignItems: "center",
                borderBottom: i < arr.length - 1 ? `1px solid ${T.border}` : "none",
              }}>
                <span style={{ fontSize: 9, fontWeight: 500, color: T.text }}>{a.machine}</span>
                <span style={{ fontSize: 9, fontFamily: '"JetBrains Mono", monospace', color: T.muted }}>{a.tag}</span>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 3,
                  fontSize: 8, fontWeight: 700, color: T.bad,
                  background: "rgba(232,93,93,0.08)", borderRadius: 999, padding: "2px 6px",
                }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: T.bad }} />
                  {a.status}
                </span>
                <span style={{ fontSize: 9, color: T.muted }}>{a.time}</span>
                {!a.ack && (
                  <button style={{
                    background: "transparent", border: `1px solid ${T.border}`,
                    color: T.muted, borderRadius: 5, padding: "2px 6px",
                    fontSize: 8, cursor: "default",
                  }}>Acquitter</button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Historique */}
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, color: T.text, marginBottom: 6 }}>Historique récent</div>
          <div style={{
            background: T.card, border: `1px solid ${T.border}`, borderRadius: 10, overflow: "hidden",
          }}>
            {ALARMS.filter(a => a.resolved).map((a, i, arr) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "1.6fr 1fr 0.7fr 0.7fr",
                padding: "7px 10px", alignItems: "center",
                borderBottom: i < arr.length - 1 ? `1px solid ${T.border}` : "none",
              }}>
                <span style={{ fontSize: 9, color: T.text }}>{a.machine}</span>
                <span style={{ fontSize: 9, fontFamily: '"JetBrains Mono", monospace', color: T.muted }}>{a.tag}</span>
                <span style={{ fontSize: 9, color: T.muted }}>{a.time}</span>
                <span style={{ fontSize: 9, color: T.good }}>{a.resolved}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   5. AGENT IA — AssistantChatPanel
══════════════════════════════════════════════════════════ */
export function AgentMockup() {
  const MSGS = [
    {
      role: "user",
      text: "Analyse la température du moteur sur les 24 dernières heures.",
    },
    {
      role: "assistant",
      text: "J'ai analysé 2 880 points sur Motor_Temp_01.\n\n→ Moyenne : 68.1 °C — dans la plage normale (45–80°C)\n→ Pic détecté à 14:32 : 81.7 °C — franchissement du seuil HIGH\n→ Tendance : +0.4°C/h sur les 6 dernières heures\n\nRecommandation : surveiller la courbe de refroidissement après le pic. Un nettoyage du filtre d'air est conseillé si la tendance se maintient.",
      hasChart: true,
    },
    {
      role: "user",
      text: "Génère un rapport pour ce matin.",
    },
    {
      role: "assistant",
      text: "Rapport généré pour Motor_Temp_01 — 04/04 06:00 → 14:35",
      hasPill: "📄 Rapport_Temp_20240404.pdf",
    },
  ];

  return (
    <div style={{
      background: T.bg, fontFamily: '"DM Sans", system-ui, sans-serif',
      display: "flex", borderRadius: 12, overflow: "hidden",
    }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Header */}
        <div style={{
          borderBottom: `1px solid ${T.border}`, padding: "10px 14px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: T.text }}>Assistant IA</div>
            <div style={{ fontSize: 9, color: T.muted }}>Compresseur Atlas Copco · Motor_Temp_01</div>
          </div>
          <span style={{
            fontSize: 8, fontWeight: 600, color: T.good,
            background: "rgba(62,207,142,0.08)", borderRadius: 999, padding: "3px 7px",
            display: "flex", alignItems: "center", gap: 3,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: T.good }} />
            Actif
          </span>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: "auto", padding: "12px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
          {MSGS.map((m, i) => (
            <div key={i} style={{
              display: "flex",
              flexDirection: m.role === "user" ? "row-reverse" : "row",
              gap: 8, alignItems: "flex-start",
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                background: m.role === "user"
                  ? `linear-gradient(135deg, ${T.accent}, #1a60b8)`
                  : `linear-gradient(135deg, #7c3aed, #4c1d95)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 8, fontWeight: 700, color: "#fff",
              }}>
                {m.role === "user" ? "JD" : "AI"}
              </div>
              <div style={{ maxWidth: "82%" }}>
                <div style={{
                  background: m.role === "user" ? `rgba(61,156,240,0.1)` : T.card,
                  border: `1px solid ${m.role === "user" ? `rgba(61,156,240,0.2)` : T.border}`,
                  borderRadius: m.role === "user" ? "10px 2px 10px 10px" : "2px 10px 10px 10px",
                  padding: "8px 10px",
                  fontSize: 9.5, color: T.text, lineHeight: 1.5, whiteSpace: "pre-line",
                }}>
                  {m.text}
                </div>
                {m.hasChart && (
                  <div style={{
                    marginTop: 5, height: 50,
                    background: T.card, border: `1px solid ${T.border}`,
                    borderRadius: 8, overflow: "hidden",
                  }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={tempData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
                        <defs>
                          <linearGradient id="gAgent" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%"  stopColor={T.chart1} stopOpacity={0.25} />
                            <stop offset="95%" stopColor={T.chart1} stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="v" stroke={T.chart1} strokeWidth={1.5} fill="url(#gAgent)" dot={false} isAnimationActive={false} />
                        <Tooltip contentStyle={{ background: T.card, border: `1px solid ${T.border}`, fontSize: 9, borderRadius: 6 }} isAnimationActive={false} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                )}
                {m.hasPill && (
                  <div style={{
                    marginTop: 5, display: "inline-flex", alignItems: "center", gap: 5,
                    background: T.card, border: `1px solid ${T.border}`,
                    borderRadius: 7, padding: "5px 9px",
                    fontSize: 9, color: T.accent,
                  }}>
                    {m.hasPill}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div style={{
          borderTop: `1px solid ${T.border}`, padding: "8px 12px",
          display: "flex", gap: 6,
        }}>
          <div style={{
            flex: 1, background: T.card, border: `1px solid ${T.border}`,
            borderRadius: 8, padding: "6px 10px", fontSize: 9, color: T.muted,
          }}>
            Posez une question sur vos données…
          </div>
          <button style={{
            background: T.accent, color: "#fff", border: "none",
            borderRadius: 8, padding: "6px 10px", fontSize: 10, cursor: "default",
          }}>→</button>
        </div>
      </div>
    </div>
  );
}
