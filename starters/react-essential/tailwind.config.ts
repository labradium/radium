import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./src/routes/**/*.{ts,tsx}", "./src/ui/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        geistSans: ["geist-sans"],
        geistMono: ["geist-mono"],
      },
    },
    colors: {
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
