export type Tag =
  | "soups" | "appetizers" | "salads" | "vietnamese" | "specials" | "thai"
  | "poke" | "chinese" | "japanese" | "desserts" | "sushi" | "drinks" | "sides";

export type Section = "Fusion Rolls" | "Futo Rolls";

export type Price = { variant: string; czk: number };

export type MenuItem = {
  id: string;
  section: Section;
  prefix?: string;      // "Mr."
  title: string;        // "SAMURAI ROLL"
  inside?: string;
  outside?: string;
  tags: Tag[];
  prices: Price[];
  image?: string;       // /img/sushi/roll.png
};

export const SECTION_ORDER: Section[] = ["Fusion Rolls", "Futo Rolls"];

export const ALL_TAGS: Tag[] = [
  "soups","appetizers","salads","vietnamese","specials","thai",
  "poke","chinese","japanese","desserts","sushi","drinks","sides",
];

export const menuItems: MenuItem[] = [
  // ===== FUSION ROLLS =====
  {
    id: "fr-1",
    section: "Fusion Rolls",
    prefix: "Mr.",
    title: "SAMURAI ROLL",
    inside: "spicy tuna, avocado, cucumber",
    outside: "salmon, crispy onion, spicy mayonnaise, teriyaki sauce, curly parsley",
    tags: ["sushi", "japanese"],
    prices: [{ variant: "4 ks", czk: 159 }, { variant: "8 ks", czk: 319 }],
    image: "/img/sushi/samurai.png",
  },
  { id: "fr-2", section: "Fusion Rolls", prefix: "Mr.", title: "SAMURAI ROLL",
    inside: "spicy tuna, avocado, cucumber",
    outside: "salmon, crispy onion, spicy mayonnaise, teriyaki sauce, curly parsley",
    tags: ["sushi", "japanese"], prices: [{ variant: "4 ks", czk: 159 }, { variant: "8 ks", czk: 319 }],
    image: "/img/sushi/samurai.png" },
  { id: "fr-3", section: "Fusion Rolls", prefix: "Mr.", title: "SAMURAI ROLL",
    inside: "spicy tuna, avocado, cucumber",
    outside: "salmon, crispy onion, spicy mayonnaise, teriyaki sauce, curly parsley",
    tags: ["sushi", "japanese"], prices: [{ variant: "4 ks", czk: 159 }, { variant: "8 ks", czk: 319 }],
    image: "/img/sushi/samurai.png" },
  { id: "fr-4", section: "Fusion Rolls", prefix: "Mr.", title: "SAMURAI ROLL",
    inside: "spicy tuna, avocado, cucumber",
    outside: "salmon, crispy onion, spicy mayonnaise, teriyaki sauce, curly parsley",
    tags: ["sushi", "japanese"], prices: [{ variant: "4 ks", czk: 159 }, { variant: "8 ks", czk: 319 }],
    image: "/img/sushi/samurai.png" },

  // ===== FUTO ROLLS =====
  { id: "fu-1", section: "Futo Rolls", prefix: "Mr.", title: "SAMURAI ROLL",
    inside: "spicy tuna, avocado, cucumber",
    outside: "salmon, crispy onion, spicy mayonnaise, teriyaki sauce, curly parsley",
    tags: ["sushi", "japanese"], prices: [{ variant: "4 ks", czk: 159 }, { variant: "8 ks", czk: 319 }],
    image: "/img/sushi/samurai.png" },
  { id: "fu-2", section: "Futo Rolls", prefix: "Mr.", title: "SAMURAI ROLL",
    inside: "spicy tuna, avocado, cucumber",
    outside: "salmon, crispy onion, spicy mayonnaise, teriyaki sauce, curly parsley",
    tags: ["sushi", "japanese"], prices: [{ variant: "4 ks", czk: 159 }, { variant: "8 ks", czk: 319 }],
    image: "/img/sushi/samurai.png" },
  { id: "fu-3", section: "Futo Rolls", prefix: "Mr.", title: "SAMURAI ROLL",
    inside: "spicy tuna, avocado, cucumber",
    outside: "salmon, crispy onion, spicy mayonnaise, teriyaki sauce, curly parsley",
    tags: ["sushi", "japanese"], prices: [{ variant: "4 ks", czk: 159 }, { variant: "8 ks", czk: 319 }],
    image: "/img/sushi/samurai.png" },
  { id: "fu-4", section: "Futo Rolls", prefix: "Mr.", title: "SAMURAI ROLL",
    inside: "spicy tuna, avocado, cucumber",
    outside: "salmon, crispy onion, spicy mayonnaise, teriyaki sauce, curly parsley",
    tags: ["sushi", "japanese"], prices: [{ variant: "4 ks", czk: 159 }, { variant: "8 ks", czk: 319 }],
    image: "/img/sushi/samurai.png" },
];
