// app/layout.tsx
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";

export const metadata: Metadata = { title: "Big Ben Foods" };

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato", // dá proměnnou pro Tailwind
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${lato.variable} ${playfair.variable}`}>
      <body className="min-h-dvh bg-background text-foreground font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
