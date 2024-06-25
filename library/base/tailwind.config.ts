import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: ["./app/**/*.{ts,tsx}", "./ui/**/*.{ts,tsx}"],
	prefix: "",
	theme: {
		extend: {
			fontFamily: {
				geistSans: ["var(--font-geist-sans)"],
				geistMono: ["var(--font-geist-mono)"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
} satisfies Config;

export default config;
