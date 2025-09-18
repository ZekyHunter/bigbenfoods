import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)", "ui-sans-serif", "system-ui", "sans-serif"],
        // sans: ["var(--font-lato)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
