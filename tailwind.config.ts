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
      },
      fontFamily: {
        sans: ["Calibri", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "paper-texture": "url('/noise.png')", // Placeholder for noise, or we can use CSS radial gradient
      },
    },
  },
  plugins: [],
};
export default config;
