"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="demo" className="relative overflow-hidden border-t border-white/[0.06] px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_100%,rgba(8,45,68,0.7)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[min(100%,800px)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(20,169,207,0.07)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.2]" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-[860px]"
      >
        {/* Filets déco */}
        <div className="absolute -left-8 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/15 to-transparent hidden lg:block" />
        <div className="absolute -right-8 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/10 to-transparent hidden lg:block" />

        <span className="tag-tech mb-8 block w-fit mx-auto">Contact</span>

        <h2 className="text-center text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.93] tracking-[-0.05em] text-white">
          Parler à
          <br />
          <span className="text-accent-light">l&apos;équipe produit.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-[520px] text-center text-[16px] leading-[1.7] text-white/35">
          Démo technique, atelier MQTT ou simple échange sur votre périmètre —
          on s&apos;adapte à votre contexte.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:contact@fawd.be?subject=Démo Arcos"
            className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 text-[14px] font-semibold tracking-wide text-white transition-all hover:bg-accent-light hover:shadow-[0_0_40px_rgba(20,169,207,0.4)]"
          >
            Écrire à l&apos;équipe
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="mailto:contact@fawd.be?subject=Atelier technique Arcos"
            className="inline-flex items-center rounded-full border border-white/[0.12] px-8 py-4 text-[14px] text-white/50 transition-all hover:border-white/22 hover:bg-white/[0.04] hover:text-white/80"
          >
            Atelier technique
          </a>
        </div>

        {/* Signature FAWD */}
        <p className="mt-14 text-center font-mono text-[11px] text-white/18">
          Développé par FAWD SRL · Charleroi, Belgique ·{" "}
          <a href="https://fawd.be" target="_blank" rel="noopener noreferrer" className="text-white/28 underline underline-offset-2 transition-colors hover:text-white/45">
            fawd.be
          </a>
        </p>
      </motion.div>
    </section>
  );
}
