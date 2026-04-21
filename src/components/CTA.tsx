"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="demo"
      style={{ background: "var(--black)", borderTop: "1px solid var(--border-dark)" }}
    >
      <div className="c sp" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
        >
          {/* Gauche */}
          <div className="max-w-[540px]">
            <span className="section-kicker section-kicker--light">Contact</span>
            <h2 className="h2-light">
              Parler à l&apos;équipe
              <br />
              <span style={{ color: "var(--teal)" }}>produit.</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "var(--text-muted-light)" }}>
              Démo technique, atelier MQTT ou simple échange sur votre périmètre —
              on s&apos;adapte à votre contexte.
            </p>
          </div>

          {/* Droite — actions */}
          <div className="flex flex-col gap-4 lg:items-end">
            <a href="mailto:contact@fawd.be?subject=Démo Arcos" className="btn-arrow">
              <span className="btn-arrow__text">Écrire à l&apos;équipe</span>
              <span className="btn-arrow__icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a
              href="mailto:contact@fawd.be?subject=Atelier technique Arcos"
              className="text-[13px] transition-colors"
              style={{ color: "var(--text-muted-light)" }}
            >
              Demander un atelier technique →
            </a>

            {/* Info */}
            <div
              className="mt-4 rounded-xl p-5"
              style={{ border: "1px solid var(--border-dark)", background: "var(--black-2)" }}
            >
              <p className="text-[12px] mb-3" style={{ color: "var(--text-muted-light)" }}>
                FAWD SRL · Charleroi, Belgique
              </p>
              <div className="flex flex-col gap-1.5">
                {[
                  "Déploiement en 5 jours",
                  "Équipe technique dédiée",
                  "Support réactif",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>
                    <span
                      className="h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ background: "var(--teal)" }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
