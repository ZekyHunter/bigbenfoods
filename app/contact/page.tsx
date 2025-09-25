import Container from "@/components/layout/Container";
import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Contact | Big Ben Foods" };

export default function ContactPage() {
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-3xl md:text-2xl tracking-wide text-neutral-900 dark:text-neutral-300 font-lato mb-4">
          Kontakt
        </h1>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300 font-lato text-md">
          Ozvěte se nám nebo se rovnou zastavte – rádi vás uvidíme.
        </p>
      </div>

      {/* Info + foto */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Levý sloupec – kontakty */}
        <section className="space-y-6">
          <div>
            <h2 className="uppercase dark:text-neutral-300 font-serif text-xl tracking-wide text-foreground">
              <span className="text-accent font-black">BIG</span> Ben Foods
            </h2>
            <address className="not-italic mt-2 text-neutral-700 dark:text-neutral-300 font-lato leading-6 text-sm">
              Nitrianská 1625/22
              <br />
              Vinohrady, Praha 3, 130 00
            </address>

            <ul className="mt-3 text-neutral-900 dark:text-neutral-300 font-lato text-sm leading-7">
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
              <h3 className="font-semibold mb-1 text-neutral-900 dark:text-neutral-300 font-lato">
                Otevírací doba
              </h3>
              <ul className="text-neutral-700 dark:text-neutral-300 font-lato leading-6 text-sm">
                <li>Po–St: 11:30–23:00</li>
                <li>Čt–Pá: 11:30–24:00</li>
                <li>So: 12:00–24:00</li>
                <li>Ne: 12:00–23:00</li>
              </ul>
            </div>

            <div className="mt-5 flex gap-3">
              <Link
                href="/reservation"
                className="inline-block rounded-full border border-accent bg-accent text-white hover:bg-accent/90 px-4 py-2 text-sm font-bold"
              >
                REZERVOVAT STŮL
              </Link>
              <Link
                href="#form"
                className="rounded-full border-2 border-neutral-600 px-4 py-2 hover:bg-neutral-200/50 transition text-sm font-bold"
              >
                NAPSAT ZPRÁVU
              </Link>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-1 text-neutral-900 dark:text-neutral-300 font-lato">
                Social sites
              </h3>
              <div className="flex gap-4 text-neutral-700 dark:text-neutral-300 font-lato">
                <Link href="#" className="hover:text-red-400 underline">
                  Instagram
                </Link>
                <Link href="#" className="hover:text-red-400 underline">
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
