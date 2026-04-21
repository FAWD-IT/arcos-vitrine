import { ExternalLink } from "lucide-react";

const footerLinks = {
  Produit: [
    { label: "Dashboard", href: "#features" },
    { label: "Agent IA", href: "#features" },
    { label: "Alertes", href: "#features" },
    { label: "Intégrations", href: "#integrations" },
  ],
  Entreprise: [
    { label: "À propos", href: "#" },
    { label: "Contact", href: "mailto:contact@fawd.be" },
    { label: "FAWD SRL", href: "https://fawd.be", external: true },
  ],
  Légal: [
    { label: "Mentions légales", href: "#" },
    { label: "Confidentialité", href: "#" },
    { label: "CGV", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#040404]">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.12]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-20 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-3">
              <img
                src="/logo-arcos.svg"
                alt="Arcos"
                className="h-9 w-auto max-w-[160px] object-contain object-left"
              />
              <span className="sr-only">Arcos</span>
            </a>
            <p className="mt-5 max-w-[320px] text-[13px] leading-relaxed text-white/28">
              Supervision industrielle nouvelle génération. Vos machines en
              temps réel, sans complexité.
            </p>
            <div className="mt-6 space-y-1.5 text-[11px] leading-relaxed text-white/18">
              <p>Développé par FAWD SRL — Charleroi, Belgique</p>
              <p>Testé sur équipements réels en environnement industriel</p>
              <p>Stack moderne : cloud ou on-premise</p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/22">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-1.5 text-[13px] text-white/32 transition-colors hover:text-white/60"
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                      {"external" in link && link.external && (
                        <ExternalLink className="h-3 w-3 opacity-50" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-[11px] text-white/18">
            &copy; {new Date().getFullYear()} FAWD SRL. Tous droits réservés.
          </p>
          <div className="flex gap-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-white/22 transition-colors hover:text-white/45"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/FAWD-IT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-white/22 transition-colors hover:text-white/45"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none relative -mt-8 overflow-hidden pb-6">
        <div className="text-center text-[clamp(5.5rem,18vw,14rem)] font-bold leading-none tracking-[-0.04em] text-white/[0.025]">
          arcos
        </div>
      </div>
    </footer>
  );
}
