import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./src/routes/**/*.{ts,tsx}", "./src/ui/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        geistSans: ["geist"],
        geistMono: ["geist-mono"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
