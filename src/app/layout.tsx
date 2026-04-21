import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arcos — Supervisez vos machines. En temps réel.",
  description:
    "Arcos connecte vos équipements industriels, visualise vos données et laisse une IA analyser à votre place.",
  keywords: [
    "supervision industrielle",
    "monitoring industriel",
    "IoT",
    "IA industrielle",
    "dashboard temps réel",
    "maintenance prédictive",
  ],
  openGraph: {
    title: "Arcos — Supervisez vos machines. En temps réel.",
    description:
      "Connectez vos équipements industriels, visualisez vos données et laissez une IA analyser à votre place.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
