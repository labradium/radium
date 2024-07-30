import type { Config } from "tailwindcss";

const config = {
  content: ["./src/app/**/*.{ts,tsx}"],
  extend: {
    fontFamily: {
      geistSans: ["var(--font-geist-sans)"],
      geistMono: ["var(--font-geist-mono)"],
    },
  },
} satisfies Config;

export default config;
