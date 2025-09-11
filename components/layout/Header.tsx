import Link from "next/link";
import Container from "./Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur border-b border-red-900">
      <Container>
        <div className="h-14 flex items-center justify-between">
          <Link href="/" className="font-serif text-xl tracking-wide">
            <span className="text-red-500 font-black">BIG</span> BEN FOODS
          </Link>
          <nav className="hidden md:flex gap-8 text-sm">
            <Link href="/">HOME</Link>
            <Link href="/menu">MENU</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
          </nav>
          <Link
            href="/contact#reservation"
            className="rounded-full border border-red-600 px-4 py-2 text-sm hover:bg-red-700/20"
          >
            RESERVATION
          </Link>
        </div>
      </Container>
      <div className="h-[2px] bg-red-800/60" />
    </header>
  );
}
