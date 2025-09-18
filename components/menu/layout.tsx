import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Playfair se použije uvnitř /menu
  return <section className={playfair.className}>{children}</section>;
}
