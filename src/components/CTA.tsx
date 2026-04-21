"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="demo" className="bg-[#0A0A0A]">
      <div className="container-arcos section-pad">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-[640px] text-center"
        >
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.1em] text-[#6B7280]">
            Contact
          </p>
          <h2 className="text-[clamp(36px,5vw,52px)] font-bold leading-[1.12] tracking-[-0.025em] text-white">
            Parler à
            <br />
            l&apos;équipe produit.
          </h2>
          <p className="mx-auto mt-6 max-w-[440px] text-[16px] leading-relaxed text-[#9CA3AF]">
            Démo technique, atelier MQTT ou simple échange sur votre périmètre —
            on s&apos;adapte à votre contexte.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:contact@fawd.be?subject=Démo Arcos"
              className="inline-flex cursor-pointer items-center gap-2 rounded-[var(--r-md)] bg-white px-6 py-3 text-[14px] font-semibold text-[#0A0A0A] transition-opacity hover:opacity-85"
            >
              Écrire à l&apos;équipe
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:contact@fawd.be?subject=Atelier technique Arcos"
              className="inline-flex cursor-pointer items-center gap-2 rounded-[var(--r-md)] border border-white/20 px-6 py-3 text-[14px] text-white/70 transition-all hover:border-white/40 hover:text-white"
            >
              Atelier technique
            </a>
          </div>

          <p className="mt-12 text-[12px] text-[#4B5563]">
            Développé par FAWD SRL · Charleroi, Belgique ·{" "}
            <a
              href="https://fawd.be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7280] underline underline-offset-2 transition-colors hover:text-white/70"
            >
              fawd.be
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
