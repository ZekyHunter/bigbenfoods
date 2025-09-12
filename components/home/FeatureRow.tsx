import Image from "next/image";
import Container from "../layout/Container";

type Props = {
  image: string;
  title: string;
  textLeft: string;   // kratší červený odstavec nahoře
  textRight: string;  // delší text
  reverse?: boolean;  // prohození obrázku/textu
};

export default function FeatureRow({ image, title, textLeft, textRight, reverse }: Props) {
  return (
    <section className="border-b border-red-900 py-10">
      <Container>
        <div className={`grid items-start gap-8 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
          {/* Obrázek */}
          <div className="relative aspect-[4/3] border border-neutral-800">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>

          {/* Text */}
          <div className="max-w-prose">
            <p className="text-red-400 uppercase tracking-[.25em] text-[10px] md:text-xs">
              Welcome at
            </p>
            <h2 className="mt-2 text-xl md:text-2xl font-serif">{title}</h2>

            <p className="mt-3 text-sm text-red-400 leading-relaxed">
              {textLeft}
            </p>
            <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
              {textRight}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
