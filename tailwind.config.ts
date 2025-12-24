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
        // الألوان الرئيسية
        primary: {
          gold: "#edbf8c",
          dark: "#10302b",
          light: "#ead3b9",
        },
        background: {
          light: "#f8f5f0",
          white: "#ffffff",
        },
        gold: {
          DEFAULT: "#edbf8c",
          hover: "#d9a870",
        },
        dark: {
          DEFAULT: "#10302b",
        },
      },
      fontFamily: {
        arabic: ["Dubai", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        english: ["Bristone", "Georgia", "serif"],
      },
      fontSize: {
        // Typography Scale
        "hero": ["3.5rem", { lineHeight: "4rem" }],      // 56px
        "section": ["2.5rem", { lineHeight: "3rem" }],   // 40px
        "card": ["2rem", { lineHeight: "2.5rem" }],      // 32px
        "subsection": ["1.5rem", { lineHeight: "2rem" }], // 24px
      },
      spacing: {
        "section-desktop": "80px",
        "section-mobile": "48px",
        "container": "1280px",
      },
      borderRadius: {
        "card": "16px",
        "card-lg": "20px",
        "card-xl": "24px",
        "card-2xl": "32px",
      },
      boxShadow: {
        "card": "0 4px 24px rgba(0, 0, 0, 0.08)",
        "gold": "0 4px 12px rgba(237, 191, 140, 0.3)",
        "gold-hover": "0 6px 20px rgba(237, 191, 140, 0.4)",
      },
      transitionDuration: {
        "fast": "200ms",
        "normal": "300ms",
        "slow": "500ms",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-right": "slideRight 0.7s ease-out",
        "slide-left": "slideLeft 0.7s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
