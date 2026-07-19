import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        ink: "#F5F5F5",
        muted: "#A1A1AA",
        panel: "#111318",
        navy: "#080A0F",
        gold: "#D4AF37",
        line: "rgba(255,255,255,0.08)"
      },
      boxShadow: {
        "gold-soft": "0 0 32px rgba(212, 175, 55, 0.18)"
      },
      backgroundImage: {
        "subtle-grid":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
