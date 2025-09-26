// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Maria Esperanza Gallegos - Sitio Oficial",
  description: "Explora las obras, biografía y blog de Maria Esperanza Gallegos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // CAMBIO 1: Aseguramos que el HTML ocupe toda la altura
    <html lang="es" className="h-full">
      {/* CAMBIO 2: Aseguramos que el BODY también ocupe toda la altura y mantenemos la estructura flex */}
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans bg-gray-50 flex flex-col h-full`}>
        <Navbar />
        {/* La clase 'flex-grow' hace que este contenido principal empuje al footer hacia abajo */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}