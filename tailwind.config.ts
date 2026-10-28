import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        nyt: {
          paper: "#FAF7F0",
          paperTint: "#F4EFE6",
          darkPaper: "#0D0F14",
          darkCard: "#151922",
          darkTint: "#1C212D",
          ink: "#111317",
          darkInk: "#F0F2F6",
          muted: "#5A606D",
          darkMuted: "#9CA3AF",
          rule: "#1A1D24",
          darkRule: "#2D3442",
          accent: {
            red: "#E11D48",
            amber: "#D97706",
            emerald: "#059669",
            blue: "#2563EB",
            indigo: "#6366F1",
            purple: "#9333EA",
            cyan: "#0891B2",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", '"Times New Roman"', "serif"],
        headline: ["var(--font-headline)", "Playfair Display", "Georgia", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "Menlo", "Consolas", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
