import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Placeholder brand tokens. Real values come with the actual brand name (Section 6).
        // "Hamptons rich-girl Barbie": ivory + Barbie pink + gold trim.
        "site-a": {
          bg: "#fffaf6",
          surface: "#ffffff",
          fg: "#2b1f1c",
          muted: "#8a7267",
          accent: "#e8709c",
          gold: "#b8863c",
          blush: "#fbd9e6",
          blush2: "#f4e8cf",
        },
        // Same brand family as Site A, in a moodier register: black + gold.
        "site-b": {
          bg: "#0b0b0c",
          surface: "#161616",
          fg: "#f2f2f2",
          muted: "#a8a29c",
          accent: "#cda355",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
