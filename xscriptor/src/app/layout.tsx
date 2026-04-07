
import type { Metadata } from "next";
import "./globals.css";
import TransitionProvider from "./components/transitionProvider";
import { ReactNode } from "react";
import XFooter from "./components/xcomponents/xfooter/XFooter";


const FOOTER_LINKS = [
  { label: "Términos y Condiciones", href: "/terminos-y-condiciones" },
  { label: "Contacto", href: "/contacto" }
];

const FOOTER_CONFIG = {
  text: "Xscriptor",
  showYear: true,
  yearFirst: false,
};

const FOOTER_COLORS = {
  bg: "var(--bg)",
  text: "var(--text)",
  accent: "var(--accent)",
  border: "var(--border)"
};



export const metadata: Metadata = {
  metadataBase: new URL("https://xscriptor.com"),
  title: {
    default: "Xscriptor — Óscar Preciado",
    template: "%s | Xscriptor",
  },
  description:
    "Xscriptor, un sitio especializado en literatura y arte. Únete a la comunidad, conecta con tu naturaleza creativa y llena de vida a tu entorno.",
  keywords: [
    "literatura", "poesía", "escritura creativa", "frases", "textos",
    "fotografía artística", "artes visuales", "filosofía literaria",
    "blog de pensamiento creativo", "Xscriptor", "Óscar Preciado"
  ],
  authors: [{ name: "Óscar Preciado", url: "https://xscriptor.com" }],
  creator: "Óscar Preciado",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://xscriptor.com",
    siteName: "Xscriptor",
    title: "Xscriptor — Óscar Preciado",
    description: "Literatura, poesía y arte. Conecta con tu naturaleza creativa.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Xscriptor — Literatura y Arte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xscriptor — Óscar Preciado",
    description: "Literatura, poesía y arte. Conecta con tu naturaleza creativa.",
    images: ["/hero.png"],
    creator: "@xscriptor",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={`min-h-screen flex flex-col bg-(--bg) text-(--text)`}>
        <TransitionProvider />
        <main>
          {children}
        </main>
        
        <XFooter 
          links={FOOTER_LINKS}
          copyright={FOOTER_CONFIG}
          layout="horizontal"
          columns={1}
          colors={FOOTER_COLORS}
        />
      </body>
    </html>
  );
}
