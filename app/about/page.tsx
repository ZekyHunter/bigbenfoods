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
        <h1 className="text-3xl md:text-4xl font-serif tracking-wide">O nás</h1>
        <p className="mt-3 text-neutral-300 max-w-2xl">
          Big Ben Foods sLorem Ipsum is simply dummy text of the printing and
          typesetting industry. Vinohrady, Nitrianská 1625/22.
        </p>
      </section>

      {/* Dva sloupce: text + foto */}
      <section className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-serif tracking-wide">Our philosophy</h2>
            <p className="mt-2 text-neutral-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-serif tracking-wide">Suroviny atd.</h2>
            <p className="mt-2 text-neutral-300">
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
            <p className="mt-2 text-neutral-300">
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
        <ol className="space-y-3 text-neutral-300">
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
        <h2 className="text-xl font-serif tracking-wide mb-4">Galerie</h2>
        <LightboxGallery images={GALLERY} />
      </section>

      {/* CTA */}
      <section className="mt-12 pb-6">
        <Link
          href="/reservation"
          className="inline-block rounded-full border border-red-600 bg-red-600/20 hover:bg-red-600/40 text-red-200 px-6 py-2 transition"
        >
          Rezervovat stůl
        </Link>
      </section>
    </Container>
  );
}
