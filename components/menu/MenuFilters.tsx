"use client";
import { useState } from "react";
import Tag from "../ui/Tag";
import { ALL_TAGS } from "../../data/menu";

export default function MenuFilters({
  onChange,
}: {
  onChange: (tags: string[]) => void;
}) {
  const [active, setActive] = useState<string[]>(["sushi"]);

  const toggle = (t: string) => {
    // Pokud je tag již aktivní, odklikneme ho (nastavíme prázdný výběr)
    if (active.includes(t)) {
      setActive([]);
      onChange([]);
    } else {
      // jinak vybereme jen tento tag (jediný aktivní)
      setActive([t]);
      onChange([t]);
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      {ALL_TAGS.map((t) => (
        <Tag key={t} active={active.includes(t)} onClick={() => toggle(t)}>
          {t.toUpperCase()}
        </Tag>
      ))}
    </div>
  );
}
