import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "./components/footer/footer";
import ThemeScript from "./components/ThemeScript";



export const metadata: Metadata = {
  title: "Dev - Xscriptor",
  description: "Dev from X",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>      
        <ThemeScript />
        <div className="fixed top-4 right-4 z-50">
        </div>
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
      </body>      
    </html>
  );
}
