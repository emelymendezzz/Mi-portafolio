import type { Metadata } from "next";
// Importamos las fuentes de Google
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

// Configuración de la fuente Sans-serif (para el cuerpo)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Pesos que usaremos
  variable: "--font-montserrat", // Nombre de la variable CSS
});

// Configuración de la fuente Serif (para títulos)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"], // Pesos que usaremos
  variable: "--font-playfair", // Nombre de la variable CSS
});

export const metadata: Metadata = {
  title: "Emely Mendez - Portafolio",
  description: "Portafolio de Diseño y Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/*
        Aplicamos las variables de fuente al body.
        Ahora podemos usarlas en Tailwind con:
        - font-sans (para Montserrat)
        - font-serif (para Playfair Display)
      */}
      <body className={`${montserrat.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}