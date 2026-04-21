"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="demo"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-section-lift" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[min(100%,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(20,169,207,0.1)_0%,transparent_65%)] blur-[50px]" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="relative z-10 mx-auto max-w-[720px]"
      >
        <div className="overflow-hidden rounded-3xl border border-white/[0.1] bg-[#080808] p-[1px] shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]">
          <div className="relative rounded-[calc(1.5rem-1px)] bg-gradient-to-b from-white/[0.04] to-transparent px-8 py-14 sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.15]" />
            <div className="relative text-center">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent/70">
                Démarrer
              </p>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.65rem)] font-bold leading-[1.1] tracking-[-0.03em]">
                Parler à l&apos;équipe produit
                <br />
                <span className="text-white/35">ou tester sur un pilote.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-[480px] text-[15px] leading-relaxed text-white/38">
                Nous détaillons périmètre MQTT, intégrations et mise en service
                selon votre site — démo ou atelier technique sur demande.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href="mailto:contact@fawd.be?subject=Démo Arcos"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[13px] font-semibold text-black transition-colors hover:bg-white/90"
                >
                  Demander une démo gratuite
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="mailto:contact@fawd.be?subject=Question Arcos"
                  className="inline-flex items-center rounded-full border border-white/[0.12] px-8 py-3.5 text-[13px] font-medium text-white/65 transition-colors hover:border-white/22 hover:bg-white/[0.04]"
                >
                  Nous contacter
                </a>
              </div>

              <p className="mt-8 text-[12px] text-white/22">
                Démo gratuite, sans engagement. Réponse sous 24h.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
