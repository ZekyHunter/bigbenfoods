import Container from "@/components/layout/Container";
import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Contact | Big Ben Foods" };

export default function ContactPage() {
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-3xl md:text-4xl font-serif tracking-wide">
          Kontakt
        </h1>
        <p className="mt-3 text-neutral-300">
          Ozvěte se nám nebo se rovnou zastavte – rádi vás uvidíme.
        </p>
      </div>

      {/* Info + foto */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Levý sloupec – kontakty */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-serif tracking-wide">Big Ben Foods</h2>
            <address className="not-italic mt-2 text-neutral-300 leading-6">
              Nitrianská 1625/22
              <br />
              Vinohrady, Praha 3, 130 00
            </address>

            <ul className="mt-3 text-neutral-300 leading-7">
              <li>
                Tel:{" "}
                <Link className="hover:text-red-400" href="tel:+420123456789">
                  +420&nbsp;123&nbsp;456&nbsp;789
                </Link>
              </li>
              <li>
                E-mail:{" "}
                <Link
                  className="hover:text-red-400"
                  href="mailto:info@bigbenfoods.cz"
                >
                  info@bigbenfoods.cz
                </Link>
              </li>
            </ul>

            <div className="mt-4">
              <h3 className="font-semibold mb-1">Otevírací doba</h3>
              <ul className="text-neutral-400 leading-6">
                <li>Po–St: 11:30–23:00</li>
                <li>Čt–Pá: 11:30–24:00</li>
                <li>So: 12:00–24:00</li>
                <li>Ne: 12:00–23:00</li>
              </ul>
            </div>

            <div className="mt-5 flex gap-3">
              <Link
                href="/reservation"
                className="rounded-full border border-red-600 bg-red-600/20 hover:bg-red-600/40 text-red-200 px-5 py-2 transition"
              >
                Rezervovat stůl
              </Link>
              <Link
                href="#form"
                className="rounded-full border border-neutral-600 px-5 py-2 hover:bg-neutral-800 transition"
              >
                Napsat zprávu
              </Link>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-1">Sociální sítě</h3>
              <div className="flex gap-4 text-neutral-300">
                <Link href="#" className="hover:text-red-400">
                  Instagram
                </Link>
                <Link href="#" className="hover:text-red-400">
                  Facebook
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pravý sloupec – fotka */}
        <aside>
          <Image
            src="/img/food.jpg"
            alt="Interiér a jídlo Big Ben Foods"
            width={1200}
            height={900}
            className="w-full h-auto border border-neutral-700 object-cover"
            priority
          />
        </aside>
      </div>
    </Container>
  );
}
