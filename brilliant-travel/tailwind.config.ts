import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navigation: "var(--navigation-foreground)",
        border: "var(--navigation-border)",
        hero: "var(--hero-foreground)",
      },
      backgroundImage: {
        gradient: "var(--hero-gradient)",
      }
    },
  },
  plugins: [],
} satisfies Config;
