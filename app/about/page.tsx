import Container from "@/components/layout/Container";
import Link from "next/link";
import Image from "next/image";
import LightboxGallery from "@/components/gallery/LightboxGallery";

export const metadata = { title: "About | Big Ben Foods" };

const GALLERY = [
  { src: "/img/samurai.jpg", alt: "Samurai roll" },
  { src: "/img/food.jpg", alt: "Interiér restaurace" },
  { src: "/img/samurai.jpg", alt: "Detail sushi" },
  { src: "/img/food.jpg", alt: "Servírování" },
  { src: "/img/samurai.jpg", alt: "Sushi set" },
  { src: "/img/food.jpg", alt: "Atmosféra" },
];

export default function AboutPage() {
  return (
    <Container>
      {/* Úvod */}
      <section className="py-10">
        <h1 className="text-3xl md:text-2xl tracking-wide text-neutral-900 dark:text-neutral-300 font-lato mb-4">
          O nás
        </h1>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300 font-lato max-w-2xl">
          Big Ben Foods sLorem Ipsum is simply dummy text of the printing and
          typesetting industry. Vinohrady, Nitrianská 1625/22.
        </p>
      </section>

      {/* Dva sloupce: text + foto */}
      <section className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-serif tracking-wide">Our philosophy</h2>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300 font-lato">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-serif tracking-wide">Suroviny atd.</h2>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300 font-lato">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-serif tracking-wide">Náš tým</h2>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300 font-lato">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        <div className="aspect-[4/3] relative border border-neutral-700">
          <Image
            src="/img/food.jpg"
            alt="Kuchyně Big Ben Foods"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Milníky */}
      <section className="mt-12">
        <h2 className="text-xl font-serif tracking-wide mb-4">Milníky</h2>
        <ol className="space-y-3 text-neutral-700 dark:text-neutral-300 font-lato">
          <li>
            <span className="text-neutral-400">2018 —</span> Otevření na
            Vinohradech
          </li>
          <li>
            <span className="text-neutral-400">2021 —</span> Nové sushi & poke
            menu
          </li>
          <li>
            <span className="text-neutral-400">2024 —</span> Rekonstrukce
            interiéru
          </li>
        </ol>
      </section>

      {/* Galerie lightbox/ možná nějaký carousel? */}
      <section className="mt-12">
        <h2 className="text-3xl md:text-2xl tracking-wide text-neutral-900 dark:text-neutral-300 font-lato mb-4">
          Galerie
        </h2>
        <LightboxGallery images={GALLERY} />
      </section>

      {/* CTA */}
      <section className="mt-12 pb-6">
        <Link
          href="/reservation"
          className="inline-block rounded-full border border-accent bg-accent text-white hover:bg-accent/90 px-4 py-2 text-sm font-bold"
        >
          REZERVOVAT STŮL
        </Link>
      </section>
    </Container>
  );
}
