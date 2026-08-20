import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: "#B8862E",
        goldDark: "#93691F",
        juniper: "#435C42",
        juniperDark: "#324434",
        rust: "#9C4A2E",
        timberline: "#241E16",
        paper: "#F7F1E4",
        paperRaised: "#ECE1CB",
        ink: "#2A241B",
        inkSoft: "#5C5442",
      },
      fontFamily: {
        head: ["var(--font-head)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
