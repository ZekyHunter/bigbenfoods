"use client";
import { useState } from "react";
import Tag from "../ui/Tag";
import { ALL_TAGS } from "../../data/menu";

export default function MenuFilters({ onChange }:{ onChange:(tags:string[])=>void }) {
  const [active, setActive] = useState<string[]>(["sushi"]);

  const toggle = (t: string) => {
    const next = active.includes(t) ? active.filter(x => x !== t) : [...active, t];
    setActive(next);
    onChange(next);
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
