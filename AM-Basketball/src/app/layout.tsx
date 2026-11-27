import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arthur de Melo | Técnico de Basquete",
  description:
    "Conheça minha trajetória como técnico, as equipes que acompanhei e meu trabalho na AM Basketball.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
