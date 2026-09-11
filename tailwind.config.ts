import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Placeholder brand tokens. Real values come with the actual brand name (Section 6).
        // Warm, editorial beauty-brand palette for Site A: cream + blush + rose gold.
        "site-a": {
          bg: "#fdf6f2",
          surface: "#ffffff",
          fg: "#3a2b28",
          muted: "#8c766f",
          accent: "#c17a54",
          blush: "#f4dcd2",
          blush2: "#efe3da",
        },
        "site-b": {
          bg: "#0b0b0c",
          fg: "#f2f2f2",
          accent: "#e5484d",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
