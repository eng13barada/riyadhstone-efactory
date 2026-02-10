import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Segoe UI', 'sans-serif'],
        display: ['var(--font-manrope)', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        brand: {
          charcoal: '#1a1918',
          gold: '#c6a87c',
          beige: '#f3ead3',
          cream: '#fdfbf7',
          mud: '#4a443e', 
          base: '#0f0f0f',
        },
        stone: {
          100: '#f3ead3',
          400: '#c6a87c',
          900: '#2b2825',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/hero_tower.jpg')",
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;