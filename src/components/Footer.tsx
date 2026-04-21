import { ExternalLink } from "lucide-react";

const COL = {
  Produit: [
    { label: "Dashboard",        href: "#features"      },
    { label: "Agent IA",         href: "#features"      },
    { label: "Alertes",          href: "#features"      },
    { label: "Multi-sites",      href: "#features"      },
    { label: "Intégrations MQTT", href: "#integrations" },
  ],
  Entreprise: [
    { label: "À propos",  href: "#"                    },
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
    <footer style={{ background: "var(--black)", borderTop: "1px solid var(--border-dark)" }}>
      <div className="c py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center">
              <img
                src="/logo-arcos.svg"
                alt="Arcos"
                className="h-7 w-auto max-w-[130px] object-contain brightness-0 invert"
              />
            </a>
            <p className="mt-4 max-w-[280px] text-[14px] leading-relaxed" style={{ color: "var(--text-muted-light)" }}>
              Supervision industrielle via MQTT. Dashboard, alertes et IA sur vos données terrain.
            </p>
            <div className="mt-6 space-y-1 text-[12px]" style={{ color: "var(--grey-4)" }}>
              <p>FAWD SRL · Charleroi, Belgique</p>
              <p>
                <a
                  href="https://fawd.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{ color: "var(--teal)" }}
                >
                  fawd.be
                </a>
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(COL).map(([cat, links]) => (
            <div key={cat}>
              <h4
                className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em]"
                style={{ color: "var(--grey-3)" }}
              >
                {cat}
              </h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="flex items-center gap-1.5 text-[13px] cursor-pointer transition-colors"
                      style={{ color: "var(--text-muted-light)" }}
                      {...("external" in l && l.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {l.label}
                      {"external" in l && l.external && <ExternalLink className="h-3 w-3 opacity-40" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row"
          style={{ borderColor: "var(--border-dark)" }}
        >
          <p className="text-[12px]" style={{ color: "var(--grey-4)" }}>
            &copy; {new Date().getFullYear()} FAWD SRL. Tous droits réservés.
          </p>
          <div className="flex gap-5">
            {[
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "GitHub",   href: "https://github.com/FAWD-IT" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] cursor-pointer transition-colors"
                style={{ color: "var(--grey-4)" }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
