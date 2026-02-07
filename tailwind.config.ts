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
        // Salmani Dark Theme Palette
        brand: {
          base: '#2B2825',    // Warm Charcoal (Background)
          mud: '#4F3F31',     // Najdi Mud (Secondary BG)
          sand: '#F5DFB3',    // Soft Sand (Cards/Light Text)
          cream: '#FFFDE8',   // Lime Plaster (Primary Text)
          gold: '#D4B56C',    // Riyadh Limestone (Accent/Buttons)
          green: '#6F8672',   // Dried Palm (Subtle details)
        },
        // Keep existing defaults if needed, but prioritize brand colors
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
