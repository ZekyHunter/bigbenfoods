export type Tag =
  | "soups"
  | "appetizers"
  | "salads"
  | "vietnamese"
  | "specials"
  | "thai"
  | "poke"
  | "chinese"
  | "japanese"
  | "desserts"
  | "sushi"
  | "drinks"
  | "sides";

export type Section =
  | "Fusion Rolls"
  | "Futo Rolls"
  | "Soups"
  | "Appetizers"
  | "Salads"
  | "Vietnamese Mains"
  | "Thai"
  | "Poke Bowls"
  | "Specials";

export type Price = { variant: string; czk: number };

export type MenuItem = {
  id: string;
  section: Section;
  prefix?: string; // např. "Mr."
  title: string; // např. "SAMURAI ROLL"
  inside?: string; // stručný popis
  outside?: string; // doplňující popis / ingredience
  tags: Tag[];
  prices: Price[];
  image?: string; // /img/... (volitelné)
};

export const SECTION_ORDER: Section[] = [
  "Soups",
  "Appetizers",
  "Salads",
  "Vietnamese Mains",
  "Thai",
  "Poke Bowls",
  "Specials",
  "Fusion Rolls",
  "Futo Rolls",
];

export const ALL_TAGS: Tag[] = [
  "soups",
  "appetizers",
  "salads",
  "vietnamese",
  "specials",
  "thai",
  "poke",
  "chinese",
  "japanese",
  "desserts",
  "sushi",
  "drinks",
  "sides",
];

export const menuItems: MenuItem[] = [
  // ======================
  // SPECIALS (E1–E7)
  // ======================
  {
    id: "sp-1",
    section: "Specials",
    title: "Cá suối chiên giòn (crispy stream fish)",
    inside: "Viet. sladkokyselo-pikantně-slaná omáčka + jihoamerický rum",
    tags: ["specials", "vietnamese"],
    prices: [{ variant: "", czk: 459 }],
    image: "/img/specials/stream-fish.jpg",
  },
  {
    id: "sp-2",
    section: "Specials",
    title: "Cá hồi chiên (fried salmon)",
    inside: "Pikantní vietnamská 5-koření omáčka + saké",
    tags: ["specials", "vietnamese"],
    prices: [{ variant: "", czk: 469 }],
    image: "/img/specials/salmon.jpg",
  },
  {
    id: "sp-3",
    section: "Specials",
    title: "Cá nheo chiên giòn (crispy catfish)",
    inside: "Sladkokyselo-pikantní omáčka + Becherovka",
    tags: ["specials", "vietnamese"],
    prices: [{ variant: "", czk: 429 }],
  },
  {
    id: "sp-4",
    section: "Specials",
    title: "Cá thu rán (fried mackerel)",
    inside: "Sladkokyselo-pikantní omáčka + Metaxa",
    tags: ["specials", "vietnamese"],
    prices: [{ variant: "", czk: 459 }],
  },
  {
    id: "sp-5",
    section: "Specials",
    title: "Tôm hùm nướng (3) – grilled lobsters",
    inside:
      "Asijské bylinky, sladkokyselo-pikantní omáčka, rýžové víno Làng Vân",
    tags: ["specials"],
    prices: [{ variant: "(3 ks)", czk: 499 }],
    image: "/img/specials/lobster.jpg",
  },
  {
    id: "sp-7",
    section: "Specials",
    title: "Đậu phụ sốt cà chua (tofu in tomato sauce)",
    inside: "Tofu v tamarindové rajčatové omáčce, viet. bylinky",
    tags: ["specials", "salads", "vietnamese"],
    prices: [{ variant: "", czk: 249 }],
  },

  // ======================
  // SOUPS (A1–A6)
  // ======================
  {
    id: "su-1",
    section: "Soups",
    title: "Súp ~ Việt Nam",
    inside: "Tradiční vietnamská polévka s čerstvou zeleninou",
    outside: "General Vietnamese-style soup with fresh vegetables",
    tags: ["soups", "vietnamese"],
    prices: [
      { variant: "[A] kuře", czk: 69 },
      { variant: "[B] hovězí", czk: 79 },
      { variant: "[C] kreveta", czk: 89 },
      { variant: "[D] krab", czk: 89 },
      { variant: "[E] ryba", czk: 89 },
    ],
    image: "/img/soups/vietnam.jpg",
  },
  {
    id: "su-2",
    section: "Soups",
    title: "Súp cay (spicy soup)",
    inside: "Kuřecí, houby, bambus, paprika, jidášovo ucho…",
    tags: ["soups", "vietnamese"],
    prices: [{ variant: "", czk: 69 }],
  },
  {
    id: "su-3",
    section: "Soups",
    title: "Súp tỏi (garlic soup)",
    tags: ["soups"],
    prices: [{ variant: "", czk: 79 }],
  },
  {
    id: "su-4",
    section: "Soups",
    title: "Miso Soup",
    inside: "Miso polévka s mořskými řasami",
    tags: ["soups", "japanese"],
    prices: [
      { variant: "[A] kuře", czk: 89 },
      { variant: "[B] hovězí", czk: 89 },
      { variant: "[C] kreveta", czk: 99 },
      { variant: "[D] ryba", czk: 99 },
      { variant: "[E] tofu", czk: 79 },
    ],
  },
  {
    id: "su-5",
    section: "Soups",
    title: "Tom Yum",
    inside: "Thajská kyselo-pikantní",
    tags: ["soups", "thai"],
    prices: [
      { variant: "[A] kuře", czk: 89 },
      { variant: "[B] hovězí", czk: 89 },
      { variant: "[C] kreveta", czk: 109 },
      { variant: "[D] krab", czk: 99 },
      { variant: "[E] ryba", czk: 99 },
    ],
    image: "/img/soups/tom-yum.jpg",
  },
  {
    id: "su-6",
    section: "Soups",
    title: "Tom Kha",
    inside: "Kokosové mléko, galangal, citronová tráva",
    tags: ["soups", "thai"],
    prices: [
      { variant: "[A] kuře", czk: 99 },
      { variant: "[B] hovězí", czk: 99 },
      { variant: "[C] kreveta", czk: 109 },
      { variant: "[D] krab", czk: 99 },
      { variant: "[E] ryba", czk: 109 },
    ],
  },

  // ======================
  // APPETIZERS (B1–B7)
  // ======================
  {
    id: "ap-1",
    section: "Appetizers",
    title: "Nem rán (2) – smažené jarní závitky",
    inside: "Fried spring rolls (2 pcs)",
    tags: ["appetizers", "vietnamese"],
    prices: [{ variant: "(2 ks)", czk: 79 }],
  },
  {
    id: "ap-2",
    section: "Appetizers",
    title: "Nem rán mini (5) – mini závitky",
    inside: "Mini fried rolls (5 pcs)",
    tags: ["appetizers", "vietnamese"],
    prices: [
      { variant: "[A] kuře", czk: 79 },
      { variant: "[B] vegetariánské", czk: 69 },
    ],
  },
  {
    id: "ap-3",
    section: "Appetizers",
    title: "Gỏi cuốn tươi (2) – fresh spring rolls",
    tags: ["appetizers", "vietnamese"],
    prices: [
      { variant: "[A] kachna", czk: 129 },
      { variant: "[B] kuře", czk: 109 },
      { variant: "[C] hovězí", czk: 109 },
      { variant: "[D] kreveta", czk: 119 },
      { variant: "[E] tofu", czk: 99 },
    ],
  },
  {
    id: "ap-4",
    section: "Appetizers",
    title: "Tempura (5)",
    inside: "Breaded fried shrimp (5 pcs)",
    tags: ["appetizers", "japanese"],
    prices: [{ variant: "kreveta", czk: 169 }],
  },
  {
    id: "ap-5",
    section: "Appetizers",
    title: "Tempura gà (5) – kuřecí stripsy",
    tags: ["appetizers"],
    prices: [{ variant: "chicken", czk: 159 }],
  },
  {
    id: "ap-6",
    section: "Appetizers",
    title: "Phô mai chiên (5) – smažený sýr",
    tags: ["appetizers"],
    prices: [{ variant: "", czk: 109 }],
  },
  {
    id: "ap-7",
    section: "Appetizers",
    title: "Há cảo Gyoza (3) – knedlíčky",
    tags: ["appetizers", "japanese"],
    prices: [
      { variant: "[A] kuře", czk: 99 },
      { variant: "[B] hovězí", czk: 99 },
      { variant: "[C] kreveta", czk: 109 },
      { variant: "[D] veg", czk: 89 },
    ],
  },

  // ======================
  // SALADS (C1–C6)
  // ======================
  {
    id: "sa-1",
    section: "Salads",
    title: "Salat chay – vegetarian mix",
    tags: ["salads"],
    prices: [{ variant: "", czk: 139 }],
  },
  {
    id: "sa-2",
    section: "Salads",
    title: "Salad gà nướng – grilled chicken",
    tags: ["salads"],
    prices: [{ variant: "", czk: 169 }],
  },
  {
    id: "sa-3",
    section: "Salads",
    title: "Nộm xoài – mango salad",
    tags: ["salads", "vietnamese"],
    prices: [
      { variant: "[A] kuře", czk: 179 },
      { variant: "[B] hovězí", czk: 189 },
      { variant: "[C] kreveta", czk: 189 },
      { variant: "[D] tofu", czk: 179 },
    ],
  },
  {
    id: "sa-5",
    section: "Salads",
    title: "Salad cá hồi – se lososem",
    tags: ["salads"],
    prices: [{ variant: "", czk: 189 }],
  },
  {
    id: "sa-6",
    section: "Salads",
    title: "Salad Wakame (100 g)",
    tags: ["salads", "japanese"],
    prices: [{ variant: "", czk: 109 }],
    image: "/img/salads/wakame.jpg",
  },

  // ======================
  // POKE BOWLS (G1–G5)
  // ======================
  {
    id: "po-1",
    section: "Poke Bowls",
    title: "Woké Bowl Special",
    inside: "Losos & tuňák, mango, salát z mořských řas, sojová omáčka…",
    tags: ["poke", "japanese"],
    prices: [{ variant: "", czk: 339 }],
    image: "/img/poke/woke-special.jpg",
  },
  {
    id: "po-2",
    section: "Poke Bowls",
    title: "Aloha Sake (salmon)",
    inside:
      "Sushi rýže, losos, okurka, mango, avokádo, sojová om., spicy mayo…",
    tags: ["poke", "japanese"],
    prices: [{ variant: "", czk: 319 }],
  },
  {
    id: "po-3",
    section: "Poke Bowls",
    title: "Angry Bird (chicken tempura)",
    tags: ["poke"],
    prices: [{ variant: "", czk: 319 }],
  },
  {
    id: "po-4",
    section: "Poke Bowls",
    title: "Chay (vegetarian)",
    tags: ["poke"],
    prices: [{ variant: "", czk: 219 }],
  },
  {
    id: "po-5",
    section: "Poke Bowls",
    title: "Ahi Shrimp (shrimp)",
    tags: ["poke"],
    prices: [{ variant: "", czk: 299 }],
  },

  // ======================
  // THAI (F1–F7)
  // ======================
  {
    id: "th-1",
    section: "Thai",
    title: "Thai Kari (red / yellow / green) + jasmine rice",
    inside: "Kokosové mléko, výběr kari",
    tags: ["thai"],
    prices: [
      { variant: "[A] kuře", czk: 239 },
      { variant: "[B] hovězí", czk: 249 },
      { variant: "[C] kachna", czk: 309 },
      { variant: "[D] kreveta", czk: 249 },
      { variant: "[E] tofu", czk: 219 },
      { variant: "[F] pečené kuřecí prso", czk: 269 },
    ],
  },
  {
    id: "th-2",
    section: "Thai",
    title: "Pad Thai",
    inside: "Rýžové nudle, vejce, tamarind, arašídy, limetka",
    tags: ["thai"],
    prices: [
      { variant: "[A] kuře", czk: 229 },
      { variant: "[B] hovězí", czk: 239 },
      { variant: "[C] kachna", czk: 299 },
      { variant: "[D] kreveta", czk: 249 },
      { variant: "[E] tofu", czk: 219 },
      { variant: "[F] pečené kuřecí prso", czk: 259 },
    ],
  },
  {
    id: "th-3",
    section: "Thai",
    title: "Khao Pad – smažená rýže s vejcem",
    tags: ["thai"],
    prices: [
      { variant: "[A] kuře", czk: 209 },
      { variant: "[B] hovězí", czk: 219 },
      { variant: "[C] kachna", czk: 289 },
      { variant: "[D] kreveta", czk: 249 },
      { variant: "[E] tofu", czk: 199 },
      { variant: "[F] pečené kuřecí prso", czk: 249 },
    ],
  },
  {
    id: "th-6",
    section: "Thai",
    title: "Bún xào Thái – rýžové nudle (maso, vejce, zelenina)",
    tags: ["thai"],
    prices: [
      { variant: "[A] kuře", czk: 209 },
      { variant: "[B] hovězí", czk: 219 },
      { variant: "[C] kachna", czk: 289 },
      { variant: "[D] kreveta", czk: 249 },
      { variant: "[E] tofu", czk: 199 },
      { variant: "[F] pečené kuřecí prso", czk: 249 },
    ],
  },
  {
    id: "th-7",
    section: "Thai",
    title: "Miến xào Thái – skleněné nudle (maso, vejce, zelenina)",
    tags: ["thai"],
    prices: [
      { variant: "[A] kuře", czk: 229 },
      { variant: "[B] hovězí", czk: 239 },
      { variant: "[C] kachna", czk: 299 },
      { variant: "[D] kreveta", czk: 249 },
      { variant: "[E] tofu", czk: 219 },
      { variant: "[F] pečené kuřecí prso", czk: 259 },
    ],
  },

  // ======================
  // VIETNAMESE MAINS (D1–D21 – výběr)
  // ======================
  {
    id: "vn-1",
    section: "Vietnamese Mains",
    title: "Kachní Bún Chả (D1)",
    inside:
      "Rýžové nudle, grilované kachní prso, bylinky, salát, omáčka Big Ben",
    tags: ["vietnamese"],
    prices: [{ variant: "", czk: 299 }],
  },
  {
    id: "vn-2",
    section: "Vietnamese Mains",
    title: "Bún Chả (D2)",
    inside: "Rýžové nudle, grilované vepřové maso, salát, viet. omáčka",
    prices: [{ variant: "", czk: 249 }],
    tags: ["vietnamese"],
  },
  {
    id: "vn-3",
    section: "Vietnamese Mains",
    title: "Bún bò nam bộ (D3)",
    inside: "Rýžové nudle, restované hovězí, salát, viet. omáčka",
    tags: ["vietnamese"],
    prices: [
      { variant: "[A] kuře", czk: 219 },
      { variant: "[B] hovězí", czk: 229 },
      { variant: "[C] kachna", czk: 289 },
      { variant: "[D] kreveta", czk: 239 },
      { variant: "[E] tofu", czk: 209 },
      { variant: "[F] pečené kuřecí prso", czk: 259 },
    ],
  },
  {
    id: "vn-4",
    section: "Vietnamese Mains",
    title: "Bún nem (D4)",
    inside: "Rýžové nudle, 3 smažené závitky, salát, viet. omáčka",
    tags: ["vietnamese"],
    prices: [{ variant: "", czk: 219 }],
  },
  {
    id: "vn-5",
    section: "Vietnamese Mains",
    title: "Phở trộn ngan nướng Big Ben (D5)",
    inside: "Phở nudle, grilované kachní prso, čerstvá zelenina a bylinky",
    tags: ["vietnamese"],
    prices: [{ variant: "", czk: 299 }],
  },
  {
    id: "vn-6",
    section: "Vietnamese Mains",
    title: "Cơm trộn Bibimbap (D6)",
    inside: "Sushi rýže, hovězí a kuřecí maso, zelenina, omáčka",
    tags: ["vietnamese"],
    prices: [{ variant: "", czk: 269 }],
  },
  {
    id: "vn-7",
    section: "Vietnamese Mains",
    title: "Phở nước (D7)",
    inside: "Vývar 9–12 h z hovězích a kuřecích kostí, viet. bylinky",
    tags: ["vietnamese"],
    prices: [
      { variant: "[A] kuře", czk: 219 },
      { variant: "[B] hovězí", czk: 229 },
      { variant: "[C] kachna", czk: 289 },
      { variant: "[D] kreveta", czk: 249 },
      { variant: "[E] tofu", czk: 219 },
    ],
  },
  {
    id: "vn-8",
    section: "Vietnamese Mains",
    title: "Miến trộn Sài Gòn (D9)",
    inside:
      "Skleněné nudle, krevety, tofu, čerstvá zelenina a bylinky, omáčka Sài Gòn",
    tags: ["vietnamese"],
    prices: [{ variant: "", czk: 289 }],
  },
  {
    id: "vn-9",
    section: "Vietnamese Mains",
    title: "Bún bò Huế (D10)",
    inside: "Rýžové nudle, hovězí maso, rajče, citronová tráva, pikantní vývar",
    tags: ["vietnamese"],
    prices: [{ variant: "", czk: 249 }],
  },
  {
    id: "vn-10",
    section: "Vietnamese Mains",
    title: "Mì xào (D15) – smažené nudle s vejcem a zeleninou",
    tags: ["vietnamese"],
    prices: [
      { variant: "[A] kuře", czk: 189 },
      { variant: "[B] hovězí", czk: 199 },
      { variant: "[C] kachna", czk: 289 },
      { variant: "[D] kreveta", czk: 199 },
      { variant: "[E] tofu", czk: 189 },
      { variant: "[F] pečené kuřecí prso", czk: 249 },
    ],
  },
  {
    id: "vn-11",
    section: "Vietnamese Mains",
    title: "Phở xào (D17) – smažené phở nudle s vejcem a zeleninou",
    tags: ["vietnamese"],
    prices: [
      { variant: "[A] kuře", czk: 219 },
      { variant: "[B] hovězí", czk: 229 },
      { variant: "[C] kachna", czk: 299 },
      { variant: "[D] kreveta", czk: 239 },
      { variant: "[E] tofu", czk: 219 },
      { variant: "[F] pečené kuřecí prso", czk: 259 },
    ],
  },
  {
    id: "vn-12",
    section: "Vietnamese Mains",
    title: "Miến xào (D18) – skleněné nudle s vejcem a zeleninou",
    tags: ["vietnamese"],
    prices: [
      { variant: "[A] kuře", czk: 229 },
      { variant: "[B] hovězí", czk: 239 },
      { variant: "[C] kachna", czk: 299 },
      { variant: "[D] kreveta", czk: 249 },
      { variant: "[E] tofu", czk: 219 },
      { variant: "[F] pečené kuřecí prso", czk: 269 },
    ],
  },
  {
    id: "vn-13",
    section: "Vietnamese Mains",
    title: "Xào đỗ đũa (D19) – maso se zeleninou a fazolkami",
    tags: ["vietnamese"],
    prices: [
      { variant: "[A] kuře", czk: 219 },
      { variant: "[B] hovězí", czk: 229 },
      { variant: "[C] kachna", czk: 289 },
      { variant: "[D] kreveta", czk: 239 },
      { variant: "[E] tofu", czk: 209 },
      { variant: "[F] pečené kuřecí prso", czk: 259 },
    ],
  },
  {
    id: "vn-14",
    section: "Vietnamese Mains",
    title: "Xào giá (D20) – maso se zeleninou a mungo klíčky",
    tags: ["vietnamese"],
    prices: [
      { variant: "[A] kuře", czk: 219 },
      { variant: "[B] hovězí", czk: 229 },
      { variant: "[C] kachna", czk: 289 },
      { variant: "[D] kreveta", czk: 239 },
      { variant: "[E] tofu", czk: 209 },
      { variant: "[F] pečené kuřecí prso", czk: 259 },
    ],
  },
  {
    id: "vn-15",
    section: "Vietnamese Mains",
    title:
      "Xào sả ớt cay (D21) – maso se zeleninou, chilli a citronovou trávou",
    tags: ["vietnamese"],
    prices: [
      { variant: "[A] kuře", czk: 219 },
      { variant: "[B] hovězí", czk: 229 },
      { variant: "[C] kachna", czk: 289 },
      { variant: "[D] kreveta", czk: 239 },
      { variant: "[E] tofu", czk: 209 },
      { variant: "[F] pečené kuřecí prso", czk: 259 },
    ],
  },

  // ======================
  // SUSHI – už existuje (ponechávám tvoje ukázky)
  // ======================
  {
    id: "fr-1",
    section: "Fusion Rolls",
    prefix: "M1.",
    title: "SAMURAI ROLL",
    inside: "spicy tuna, avocado, cucumber",
    outside:
      "salmon, crispy onion, spicy mayonnaise, teriyaki sauce, curly parsley",
    tags: ["sushi", "japanese"],
    prices: [
      { variant: "4 ks", czk: 159 },
      { variant: "8 ks", czk: 319 },
    ],
    image: "/img/samurai.jpg",
  },
  {
    id: "fr-2",
    section: "Fusion Rolls",
    prefix: "M1.",
    title: "SAMURAI ROLL",
    inside: "spicy tuna, avocado, cucumber",
    outside:
      "salmon, crispy onion, spicy mayonnaise, teriyaki sauce, curly parsley",
    tags: ["sushi", "japanese"],
    prices: [
      { variant: "4 ks", czk: 159 },
      { variant: "8 ks", czk: 319 },
    ],
    image: "/img/samurai.jpg",
  },
  {
    id: "fr-3",
    section: "Fusion Rolls",
    prefix: "M1.",
    title: "SAMURAI ROLL",
    inside: "spicy tuna, avocado, cucumber",
    outside:
      "salmon, crispy onion, spicy mayonnaise, teriyaki sauce, curly parsley",
    tags: ["sushi", "japanese"],
    prices: [
      { variant: "4 ks", czk: 159 },
      { variant: "8 ks", czk: 319 },
    ],
    image: "/img/samurai.jpg",
  },
  {
    id: "fr-4",
    section: "Fusion Rolls",
    prefix: "Mr.",
    title: "SAMURAI ROLL",
    inside: "spicy tuna, avocado, cucumber",
    outside:
      "salmon, crispy onion, spicy mayonnaise, teriyaki sauce, curly parsley",
    tags: ["sushi", "japanese"],
    prices: [
      { variant: "4 ks", czk: 159 },
      { variant: "8 ks", czk: 319 },
    ],
    image: "/img/samurai.jpg",
  },

  {
    id: "fu-1",
    section: "Futo Rolls",
    prefix: "Mr.",
    title: "SAMURAI ROLL",
    inside: "spicy tuna, avocado, cucumber",
    outside:
      "salmon, crispy onion, spicy mayonnaise, teriyaki sauce, curly parsley",
    tags: ["sushi", "japanese"],
    prices: [
      { variant: "4 ks", czk: 159 },
      { variant: "8 ks", czk: 319 },
    ],
    image: "/img/samurai.jpg",
  },
  {
    id: "fu-2",
    section: "Futo Rolls",
    prefix: "M1.",
    title: "SAMURAI ROLL",
    inside: "spicy tuna, avocado, cucumber",
    outside:
      "salmon, crispy onion, spicy mayonnaise, teriyaki sauce, curly parsley",
    tags: ["sushi", "japanese"],
    prices: [
      { variant: "4 ks", czk: 159 },
      { variant: "8 ks", czk: 319 },
    ],
    image: "/img/samurai.jpg",
  },
  {
    id: "fu-3",
    section: "Futo Rolls",
    prefix: "M1.",
    title: "SAMURAI ROLL",
    inside: "spicy tuna, avocado, cucumber",
    outside:
      "salmon, crispy onion, spicy mayonnaise, teriyaki sauce, curly parsley",
    tags: ["sushi", "japanese"],
    prices: [
      { variant: "4 ks", czk: 159 },
      { variant: "8 ks", czk: 319 },
    ],
    image: "/img/samurai.jpg",
  },
  {
    id: "fu-4",
    section: "Futo Rolls",
    prefix: "M1.",
    title: "SAMURAI ROLL",
    inside: "spicy tuna, avocado, cucumber",
    outside:
      "salmon, crispy onion, spicy mayonnaise, teriyaki sauce, curly parsley",
    tags: ["sushi", "japanese"],
    prices: [
      { variant: "4 ks", czk: 159 },
      { variant: "8 ks", czk: 319 },
    ],
    image: "/img/samurai.jpg",
  },
];
