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
          dark: "#4F3F31",     // Najdi Mud (Deep Warm Brown)
          beige: "#F5DFB3",    // Soft Beige
          cream: "#FFFDE8",    // Off-White Lime Plaster
          gold: "#D4B56C",     // Riyadh Limestone Gold (Accents)
          palm: "#6F8672",     // Dried Palm Green
          charcoal: "#393939", // Primary Text
        },
      },
      backgroundImage: {
        'najdi-pattern': "url('/patterns/najdi-geometry.png')",
      },
    },
  },
  plugins: [],
};
export default config;
