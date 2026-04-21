const SITE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://fawd.be";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: "FAWD",
        url: "https://fawd.be",
        logo: `${SITE}/logo-arcos-nobg2.svg`,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE}/#arcos`,
        name: "Arcos",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "Plateforme de supervision industrielle : connexion des machines, tableaux de bord temps réel, alarmes, historique et assistance IA pour les équipes terrain.",
        url: SITE,
        inLanguage: "fr-BE",
        offers: {
          "@type": "Offer",
          description: "Tarification sur demande selon votre périmètre (contact commercial).",
        },
        provider: { "@id": `${SITE}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
