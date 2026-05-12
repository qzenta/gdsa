import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

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
          DEFAULT: "#8B1A1A",
          dark: "#5C0000",
          light: "#A63232",
        },
        accent: {
          DEFAULT: "#C8960C",
          light: "#E8B84B",
          pale: "#FDF3DC",
        },
        green: {
          accent: "#1E5631",
          light: "#2D7A47",
        },
        charcoal: {
          DEFAULT: "#1C1C1C",
          light: "#3A3A3A",
        },
        neutral: {
          warm: "#F7F4EF",
          mid: "#EDE8E0",
          border: "#D9D1C5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1" }],
        "display-lg": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.15" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2" }],
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(135deg, #5C0000 0%, #8B1A1A 50%, #3D0000 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #C8960C 0%, #E8B84B 50%, #C8960C 100%)",
        "dark-gradient":
          "linear-gradient(180deg, #1C1C1C 0%, #2D1010 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        card: "0 4px 24px rgba(28,28,28,0.08)",
        "card-hover": "0 8px 40px rgba(28,28,28,0.14)",
        gold: "0 4px 24px rgba(200,150,12,0.25)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [typography],
};

export default config;
