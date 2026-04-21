import { ExternalLink } from "lucide-react";

const footerLinks = {
  Produit: [
    { label: "Dashboard",        href: "#features" },
    { label: "Agent IA",         href: "#features" },
    { label: "Alertes",          href: "#features" },
    { label: "Multi-sites",      href: "#features" },
    { label: "Intégrations MQTT", href: "#integrations" },
  ],
  Entreprise: [
    { label: "À propos",  href: "#" },
    { label: "Contact",   href: "mailto:contact@fawd.be" },
    { label: "FAWD SRL",  href: "https://fawd.be", external: true },
  ],
  Légal: [
    { label: "Mentions légales", href: "#" },
    { label: "Confidentialité",  href: "#" },
    { label: "CGV",              href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white">
      <div className="container-arcos py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center">
              <img
                src="/logo-arcos.svg"
                alt="Arcos"
                className="h-8 w-auto max-w-[140px] object-contain object-left"
              />
              <span className="sr-only">Arcos</span>
            </a>
            <p className="mt-4 max-w-[280px] text-[14px] leading-relaxed text-[#6B7280]">
              Supervision industrielle via MQTT. Dashboard, alertes et IA
              sur les données terrain.
            </p>
            <div className="mt-4 space-y-1 text-[12px] text-[#9CA3AF]">
              <p>FAWD SRL · Charleroi, Belgique</p>
              <p>Testé sur équipements réels</p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#9CA3AF]">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex cursor-pointer items-center gap-1.5 text-[14px] text-[#6B7280] transition-colors hover:text-[#0A0A0A]"
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#E5E7EB] pt-8 sm:flex-row">
          <p className="text-[12px] text-[#9CA3AF]">
            &copy; {new Date().getFullYear()} FAWD SRL. Tous droits réservés.
          </p>
          <div className="flex gap-5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-[12px] text-[#9CA3AF] transition-colors hover:text-[#6B7280]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/FAWD-IT"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-[12px] text-[#9CA3AF] transition-colors hover:text-[#6B7280]"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
