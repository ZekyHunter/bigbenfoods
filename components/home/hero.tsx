import Image from "next/image";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="border-b border-red-900 py-8 md:py-10">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Obrázek v rámečku s overlay textem */}
          <div className="relative border border-neutral-800">
            <div className="relative aspect-[16/9]">
              <Image
                src="/img/food.jpg"
                alt="Big Ben Foods"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute left-5 top-4 md:left-7 md:top-6">
                <p className="text-[10px] md:text-xs tracking-[.25em] text-red-400 uppercase">
                  Welcome at
                </p>
                <h1 className="mt-1 text-xl md:text-2xl font-serif">Big Ben Foods</h1>
              </div>
            </div>
          </div>

          {/* popisek + link pod fotkou */}
          <p className="mt-3 text-center text-sm text-neutral-400">
            Lorem ipsum dolor sit amet consectetur. Sezonní a svěží suroviny, poctivé
            chutě, menu s respektem k tradici. Dalsi text lorem ipsum atd...
          </p>
          <p className="mt-2 text-center">
            <a
              href="/menu"
              className="inline-block text-red-400 hover:underline underline-offset-4"
            >
              See the Menu
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
