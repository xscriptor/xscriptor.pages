
import type { Metadata } from "next";
import "./globals.css";
import TransitionProvider from "./components/transitionProvider";
import { ReactNode } from "react";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Xscriptor — Óscar Preciado",
  description:
    "Xscriptor, un sitio especializado en literatura y arte. Únete a la comunidad, conecta con tu naturaleza creativa y llena de vida a tu entorno.",
  keywords: [
    "literatura","poesía","escritura creativa","frases","textos",
    "fotografía artística","artes visuales","filosofía literaria",
    "blog de pensamiento creativo","Xscriptor","Óscar Preciado"
  ],
  authors: [{ name: "Óscar Preciado", url: "https://xscriptor.com" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={`min-h-screen flex flex-col bg-(--bg) text-(--text)`}>
        <TransitionProvider />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
