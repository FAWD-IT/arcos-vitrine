import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arcos — Supervision industrielle MQTT",
  description:
    "Arcos agrège vos topics MQTT, expose des tableaux de bord temps réel et un agent IA qui raisonne sur vos données terrain.",
  openGraph: {
    title: "Arcos — Supervision industrielle MQTT",
    description: "Dashboard, alertes et IA sur vos données MQTT. Déployé en jours.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
