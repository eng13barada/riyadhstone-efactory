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
        "brand-gold": "#CCA876",
        "stone-light": "#F9F9F7",
        "brand-dark": "#4A4A4A",
      },
      fontFamily: {
        sans: ["Calibri", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
