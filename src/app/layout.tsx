import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const title = "Arcos — Supervision industrielle, alarmes et IA terrain";
const description =
  "Arcos connecte vos machines industrielles, centralise mesures et alarmes en temps réel, et met l’IA au service de vos équipes — tableaux de bord, historique et rapports, déployés en jours.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Arcos",
  },
  description,
  applicationName: "Arcos",
  authors: [{ name: "FAWD", url: "https://fawd.be" }],
  creator: "FAWD",
  publisher: "FAWD",
  category: "technology",
  keywords: [
    "Arcos",
    "supervision industrielle",
    "maintenance prédictive",
    "IoT industriel",
    "tableau de bord machines",
    "alarmes industrielles",
    "données terrain",
    "FAWD",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: "/",
    siteName: "Arcos",
    title,
    description,
    images: [{ url: "/hero-technician.png", width: 1200, height: 1200, alt: "Technicien industriel" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/hero-technician.png"],
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#131514",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-BE">
      <body>{children}</body>
    </html>
  );
}
