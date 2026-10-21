import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { SITE } from "@/lib/site";
import { Analytics } from "@/components/site/Analytics";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "E eu com isso?",
    template: "%s · E eu com isso?",
  },
  description:
    "Entenda, em linguagem simples e com fontes verificáveis, o que as propostas dos candidatos à Presidência podem significar para a sua vida.",
  applicationName: "E eu com isso?",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "E eu com isso?",
    title: "E eu com isso?",
    description:
      "Descubra o que as propostas dos candidatos podem significar para a sua vida. Gratuito, sem cadastro e com fontes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "E eu com isso?",
    description:
      "Descubra o que as propostas dos candidatos podem significar para a sua vida.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-dvh bg-paper font-sans text-ink antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
