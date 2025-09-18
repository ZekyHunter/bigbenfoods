"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { Lato } from "next/font/google";

// Lato font
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const NAV = [
  { href: "/", label: "HOME" },
  { href: "/menu", label: "MENU" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header
      className="
      sticky top-0 z-50
    backdrop-blur border-b border-border
    bg-background/95 supports-[backdrop-filter]:bg-background/80
    bg-[linear-gradient(to_bottom,rgba(185,28,28,0.10),rgba(185,28,28,0.10))]
    dark:bg-[linear-gradient(to_bottom,rgba(239,68,68,0.10),rgba(239,68,68,0.10))]
    "
    >
      <Container>
        <div className="h-14 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-xl tracking-wide text-foreground"
          >
            <span className="text-accent font-black">BIG</span> BEN FOODS
          </Link>

          {/* NAV – Lato + aktivní spodní border */}
          <nav className={`hidden md:flex gap-8 ${lato.className}`}>
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "inline-flex items-center h-14 px-1",
                    "text-md font-bold",
                    "text-muted hover:text-foreground",
                    "border-b-3 transition-colors", // spodní čára
                    active
                      ? "border-accent text-foreground" // aktivní = červená čára
                      : "border-transparent hover:border-accent/60",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/reservation"
            className={`${lato.className} rounded-full border border-accent bg-accent text-white hover:bg-accent/90 px-4 py-2 text-sm font-bold`}
          >
            RESERVATION
          </Link>
        </div>
      </Container>
      <div className="h-[2px] bg-accent/100" />
    </header>
  );
}
