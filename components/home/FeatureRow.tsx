import Image from "next/image";
import Container from "../layout/Container";

type Props = {
  image: string;
  title: string;
  textLeft: string; // kratší červený odstavec nahoře
  textRight: string; // delší text
  reverse?: boolean; // prohození obrázku/textu
};

export default function FeatureRow({
  image,
  title,
  textLeft,
  textRight,
  reverse,
}: Props) {
  return (
    <section className=" py-10">
      <Container>
        <div
          className={`grid items-start gap-8 md:grid-cols-2 ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Obrázek */}
          <div className="relative aspect-[4/3] border border-neutral-800">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>

          {/* Text */}
          <div className="max-w-prose">
            <p className="text-red-400 uppercase tracking-[.25em] text-[10px] md:text-xs font-lato">
              Welcome at
            </p>
            <h2 className="mt-2 text-xl md:text-2xl font-playfair font-medium">
              {title}
            </h2>

            <p className="mt-3 text-md text-red-400 leading-relaxed font-lato">
              {textLeft}
            </p>
            <p className="mt-3 text-md text-neutral-900 dark:text-neutral-300 font-lato leading-relaxed">
              {textRight}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
