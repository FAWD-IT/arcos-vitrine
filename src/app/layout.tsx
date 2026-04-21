import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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
    <html lang="fr" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-white text-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}
