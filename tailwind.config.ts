import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-dark": "#1a1a1a",
        "brand-bronze": "#c5a059",
        "brand-paper": "#f4f1ea",
        "brand-text": "#333333",
        "stone-900": "#1c1917",
        "stone-800": "#292524",
        "stone-700": "#44403c",
        "stone-600": "#57534e",
        "stone-50": "#fafaf9",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "paper-texture": "url('/noise.png')",
        "grid-pattern": "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
