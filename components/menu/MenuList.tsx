"use client";
import { useMemo, useState } from "react";
import { menuItems, SECTION_ORDER } from "../../data/menu";
import MenuItem from "./MenuItem";
import MenuFilters from "./MenuFilters";

export default function MenuList() {
  const [tags, setTags] = useState<string[]>(["sushi"]);

  const filtered = useMemo(() => {
    if (tags.length === 0) return menuItems;
    return menuItems.filter((m) =>
      tags.every((t) => m.tags.includes(t as any))
    );
  }, [tags]);

  const sections = SECTION_ORDER.filter((s) =>
    filtered.some((i) => i.section === s)
  );

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16">
      {/* Nadpis + filtry */}
      <section className="py-10 border-b-2 border-red-700">
        <p className="text-3xl md:text-2xl tracking-wide text-neutral-900 dark:text-neutral-300 font-lato mb-4">
          Menu
        </p>
        <MenuFilters onChange={setTags} />
      </section>

      {/* Sekce a položky */}
      {sections.map((sec) => (
        <section key={sec} className="pt-8">
          <h2 className="text-xl md:text-2xl font-serif tracking-wide mb-4">
            {sec.toUpperCase()}
          </h2>
          <div>
            {filtered
              .filter((i) => i.section === sec)
              .map((i) => (
                <MenuItem key={i.id} item={i} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
