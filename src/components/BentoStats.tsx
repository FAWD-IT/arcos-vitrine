"use client";
export function BentoStats() {
  return (
    <section style={{ background: "var(--black)", borderTop: "1px solid var(--bd-dark)" }}>
      <div className="c" style={{ paddingBottom: "6rem" }}>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
            gap: 12,
          }}
        >
          {/* Tile 1 — 99.7% */}
          <div
            className="bento"
            style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}
          >
            <p
              style={{
                fontSize: "clamp(4rem, 7vw, 7rem)",
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: "#fff",
                margin: "0 0 0.5rem",
              }}
            >
              99.7%
            </p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", margin: 0, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Uptime garanti
            </p>
          </div>

          {/* Tile 2 — 5j */}
          <div
            className="bento"
            style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}
          >
            <p
              style={{
                fontSize: "clamp(4rem, 7vw, 7rem)",
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: "#fff",
                margin: "0 0 0.5rem",
              }}
            >
              5j
            </p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", margin: 0, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Déploiement
            </p>
          </div>

          {/* Tile 3 — Quote (span 1 col, 2 rows) */}
          <div
            className="bento"
            style={{
              gridColumn: "3 / 4",
              gridRow: "1 / 3",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "var(--black-2)",
            }}
          >
            <span className="pill pill--teal" style={{ alignSelf: "flex-start" }}>
              <span className="pill__dot" />
              Disponible
            </span>
            <div>
              <p
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  color: "rgba(255,255,255,0.80)",
                  lineHeight: 1.55,
                  fontWeight: 400,
                  margin: "0 0 1.25rem",
                  fontStyle: "italic",
                }}
              >
                &ldquo;En 5 jours, tout notre atelier était supervisé en temps réel. C&apos;est le seul outil qui parle vraiment notre langue.&rdquo;
              </p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", margin: 0, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Responsable Production — Industrie 4.0
              </p>
            </div>
          </div>

          {/* Tile 4 — 48+ */}
          <div
            className="bento"
            style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}
          >
            <p
              style={{
                fontSize: "clamp(4rem, 7vw, 7rem)",
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: "#fff",
                margin: "0 0 0.5rem",
              }}
            >
              48+
            </p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", margin: 0, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Sites live
            </p>
          </div>

          {/* Tile 5 — <1s */}
          <div
            className="bento"
            style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}
          >
            <p
              style={{
                fontSize: "clamp(4rem, 7vw, 7rem)",
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: "#fff",
                margin: "0 0 0.5rem",
              }}
            >
              &lt;1s
            </p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", margin: 0, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Latence
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .bento-grid-resp { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
