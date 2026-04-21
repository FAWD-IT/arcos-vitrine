import { ExternalLink } from "lucide-react";

const footerLinks = {
  Produit: [
    { label: "Dashboard", href: "#features" },
    { label: "Agent IA", href: "#features" },
    { label: "Alertes", href: "#features" },
    { label: "Multi-sites", href: "#features" },
    { label: "Intégrations MQTT", href: "#integrations" },
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
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#040911]">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.1]" />
      {/* Filet cyan haut */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-20 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center">
              <img
                src="/logo-arcos.svg"
                alt="Arcos"
                className="h-9 w-auto max-w-[180px] object-contain object-left brightness-0 invert opacity-80"
              />
              <span className="sr-only">Arcos</span>
            </a>
            <p className="mt-6 max-w-[320px] text-[13px] leading-relaxed text-white/25">
              Supervision industrielle via MQTT. Dashboard, alertes et IA
              sur les données terrain.
            </p>
            <div className="mt-6 space-y-1 text-[11px] text-white/15">
              <p>FAWD SRL · Charleroi, Belgique</p>
              <p>Testé sur équipements réels</p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-1.5 text-[13px] text-white/28 transition-colors hover:text-white/55"
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                      {"external" in link && link.external && (
                        <ExternalLink className="h-3 w-3 opacity-40" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.05] pt-8 sm:flex-row">
          <p className="font-mono text-[10px] text-white/15">
            &copy; {new Date().getFullYear()} FAWD SRL. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-white/18 transition-colors hover:text-white/40">
              LinkedIn
            </a>
            <a href="https://github.com/FAWD-IT" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-white/18 transition-colors hover:text-white/40">
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Watermark géant */}
      <div className="pointer-events-none select-none overflow-hidden">
        <p className="text-center text-[clamp(6rem,20vw,16rem)] font-black leading-none tracking-[-0.06em] text-white/[0.018]">
          ARCOS
        </p>
      </div>
    </footer>
  );
}
