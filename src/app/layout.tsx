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
    "Arcos agrège vos topics MQTT, expose des tableaux de bord et un agent IA qui raisonne sur vos données terrain.",
  keywords: [
    "supervision industrielle",
    "MQTT",
    "monitoring IoT",
    "dashboard temps réel",
    "agent IA industriel",
    "maintenance prédictive",
  ],
  openGraph: {
    title: "Arcos — Supervision industrielle MQTT",
    description: "Dashboard, alertes et IA sur vos données MQTT. Déployé en jours.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-white text-[#0A0A0A]">
        {children}
      </body>
    </html>
  );
}
