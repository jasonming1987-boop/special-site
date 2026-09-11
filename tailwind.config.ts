import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Placeholder brand tokens. Real values come with the actual brand name (Section 6).
        "site-a": {
          bg: "#faf9f7",
          fg: "#1c1c1e",
          accent: "#c98a4b",
        },
        "site-b": {
          bg: "#0b0b0c",
          fg: "#f2f2f2",
          accent: "#e5484d",
        },
      },
    },
  },
  plugins: [],
};

export default config;
