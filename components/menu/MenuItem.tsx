import Image from "next/image";
import type { MenuItem as T } from "../../data/menu";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function MenuItem({ item }: { item: T }) {
  return (
    <article className="grid grid-cols-[1fr_auto] gap-6 py-6 border-b border-neutral-800">
      {/* text vlevo */}
      <div>
        {item.prefix && (
          <a
            href="#"
            className="text-red-400 text-sm underline decoration-transparent hover:underline"
          >
            {item.prefix}
          </a>
        )}
        <h3
          className={`${playfair.className} font-serif uppercase tracking-wide`}
        >
          {item.title}
        </h3>

        <div className="mt-1 text-[14px] text-neutral-400 leading-relaxed">
          {item.inside && <div>Inside: {item.inside}</div>}
          {item.outside && <div>Outside: {item.outside}</div>}
        </div>
      </div>

      {/* obrázek + ceny vpravo */}
      <div className="flex items-start gap-6">
        {item.image && (
          <Image
            src={item.image}
            alt={item.title}
            width={82}
            height={58}
            className="rounded"
          />
        )}
        <ul className="text-sm text-neutral-300 text-right min-w-[120px]">
          {item.prices.map((p) => (
            <li key={p.variant} className="flex justify-end gap-3">
              <span className="text-neutral-400">{p.variant}</span>
              <span>{p.czk} Kč</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
