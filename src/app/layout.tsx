import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/** Syne — geometric, ultra-bold, editorial. Signature des titres Arcos. */
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/** Inter — neutre, lisible, corps de texte. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

/** JetBrains Mono — données, tags, métriques. */
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    description:
      "Dashboard, alertes et IA sur vos données MQTT. Déployé en jours.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
