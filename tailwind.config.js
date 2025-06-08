/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Blue Gradient Palette
        primary: {
          DEFAULT: "#0a6ab3",       // Midpoint blue for `text-primary`, `bg-primary`
          dark: "#073b7c",          // Deep blue
          mid: "#0a6ab3",           // Core blue
          light: "#4ca7d8",         // Soft cyan
        },

        // Accent & Secondary
        accent: "#e0aaff",

        // Backgrounds
        background: "#fdf6f0",     // Light theme background
        darkbg: "#0a192f",         // Dark theme background

        // Text
        text: "#1a202c",
        "text-light": "#eaf6ff",

        // Optional legacy
        lightbg: "#f3f9fb",
        darkaccent: "#3392d6",
      },

      fontFamily: {
        sans: ['"Space Grotesk"', "Inter", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },

      backgroundImage: {
        // General gradients
        "radial-blue": "radial-gradient(circle, #062b63 0%, #3392d6 50%, #062b63 100%)",
        "sky-to-white": "linear-gradient(135deg, #e0f7ff 0%, #ffffff 100%)",
        
        // Navbar and button gradient
        "navbar-gradient": "linear-gradient(to right, #4ca7d8, #0a6ab3, #073b7c)",
        "navbar-gradient-hover": "linear-gradient(to right, #5bb3e2, #1b77c2, #0d4a91)",

        // Buttons
        "btn-gradient": "linear-gradient(to right, #4ca7d8, #0a6ab3, #073b7c)",
        "btn-gradient-hover": "linear-gradient(to right, #5bb3e2, #1b77c2, #0d4a91)",

        // Footer
        "footer-gradient": "linear-gradient(to right, #4ca7d8, #0a6ab3, #073b7c)",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
