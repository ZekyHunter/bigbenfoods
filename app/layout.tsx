import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = { title: "Big Ben Foods" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className="bg-neutral-950 text-neutral-200">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
