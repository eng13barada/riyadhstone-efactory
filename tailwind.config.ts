import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#2B2825",     // Salmani Warm Charcoal (Primary Background)
          gold: "#D4B56C",     // Riyadh Limestone Gold (Accents)
          cream: "#F5F5F0",    // Off-White (Text)
          beige: "#E8E6E3",    // Muted Stone (Secondary Text)
          charcoal: "#1F1D1B", // Deepest Dark (Footer/Nav)
          accent: "#D4B56C",   // Gold Alias
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
