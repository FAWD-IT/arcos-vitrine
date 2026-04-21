"use client";

import { useId } from "react";
import { motion } from "framer-motion";

/** 5 nœuds — pas de liste « compatible » en dessous, hub visuel uniquement */
const HUB_SATELLITES = [
  { label: "MQTT", angle: -90 },
  { label: "Modbus", angle: -18 },
  { label: "OPC-UA", angle: 54 },
  { label: "REST", angle: 126 },
  { label: "S7", angle: 198 },
] as const;

function MqttHubGraphic() {
  const uid = useId().replace(/:/g, "");
  const size = 360;
  const cx = size / 2;
  const cy = size / 2;
  const r = 128;

  const spokes = HUB_SATELLITES.map((s) => {
    const rad = (s.angle * Math.PI) / 180;
    const x = cx + Math.cos(rad) * r;
    const y = cy + Math.sin(rad) * r;
    return {
      ...s,
      x,
      y,
      pathIn: `M ${x} ${y} L ${cx} ${cy}`,
      pathOut: `M ${cx} ${cy} L ${x} ${y}`,
    };
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[min(100%,380px)]">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-full w-full text-white/[0.12]"
        aria-hidden
      >
        <defs>
          <filter id={`${uid}-glow`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g>
          {spokes.map((s, i) => (
            <line
              key={`line-${s.label}`}
              x1={cx}
              y1={cy}
              x2={s.x}
              y2={s.y}
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5 10"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="120"
                dur={`${9.5 + (i % 3) * 1.2}s`}
                repeatCount="indefinite"
              />
            </line>
          ))}
        </g>

        <g>
          {spokes.map((s, i) => (
            <g key={`node-${s.label}`}>
              <circle cx={s.x} cy={s.y} r="11" fill="#070f16" stroke="rgba(20,169,207,0.35)" strokeWidth="1" />
              <circle cx={s.x} cy={s.y} r="3" fill="rgba(20,169,207,0.5)">
                <animate
                  attributeName="opacity"
                  values="0.35;0.85;0.35"
                  dur={`${4.8 + (i % 4) * 0.6}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <text
                x={s.x}
                y={s.y + 22}
                textAnchor="middle"
                fill="rgba(255,255,255,0.32)"
                fontSize="10"
                fontWeight="600"
                letterSpacing="0.04em"
              >
                {s.label}
              </text>
            </g>
          ))}
        </g>

        <g>
          {spokes.map((s, i) => (
            <g key={`flow-${s.label}`}>
              {[0, 0.55].map((delay, j) => (
                <circle key={`in-${i}-${j}`} r="3" fill="#4dc8eb" filter={`url(#${uid}-glow)`} opacity="0.85">
                  <animateMotion
                    dur={`${5.2 + j * 0.4}s`}
                    repeatCount="indefinite"
                    path={s.pathIn}
                    begin={`${delay + i * 0.15}s`}
                    calcMode="spline"
                    keySplines="0.33 0 0.2 1"
                    keyTimes="0;1"
                  />
                </circle>
              ))}
              <circle r="2.5" fill="#14a9cf" opacity="0.45">
                <animateMotion
                  dur={`${6.8 + (i % 4) * 0.45}s`}
                  repeatCount="indefinite"
                  path={s.pathOut}
                  begin={`${0.9 + i * 0.2}s`}
                  calcMode="spline"
                  keySplines="0.33 0 0.2 1"
                  keyTimes="0;1"
                />
              </circle>
            </g>
          ))}
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative flex items-center justify-center rounded-2xl border border-accent/35 bg-background/95 px-5 py-3 shadow-[0_0_0_1px_rgba(20,169,207,0.12),0_12px_48px_rgba(20,169,207,0.14)]"
          animate={{
            boxShadow: [
              "0 0 0 1px rgba(20,169,207,0.1),0 12px 40px rgba(20,169,207,0.12)",
              "0 0 0 1px rgba(20,169,207,0.18),0 12px 52px rgba(20,169,207,0.2)",
              "0 0 0 1px rgba(20,169,207,0.1),0 12px 40px rgba(20,169,207,0.12)",
            ],
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/logo-arcos.svg"
            alt=""
            className="h-9 w-auto max-w-[120px] object-contain brightness-0 invert sm:h-10 sm:max-w-[140px]"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="relative overflow-hidden border-t border-white/[0.06] bg-section-lift px-6 py-24 sm:py-32"
    >
      <div className="noise-bg pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent/70">
              Hub MQTT
            </p>
            <h2 className="text-[clamp(1.85rem,3.8vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em]">
              Un point d&apos;entrée,
              <br />
              <span className="text-white/35">plusieurs flux industriels.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-relaxed text-white/38">
              Arcos consolide les topics MQTT (et les passerelles qui les alimentent) : lecture
              normalisée, alertes et vues — sans multiplier les outils.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative mt-14 w-full max-w-[440px] rounded-2xl border border-white/[0.08] bg-[#070f16] px-4 py-10 card-inset sm:px-8 sm:py-12"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_45%,rgba(20,169,207,0.08),transparent_58%)]" />
            <MqttHubGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
