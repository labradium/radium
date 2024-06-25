import { GeistMonoFont, GeistSansFont } from "@/lib/fonts";
import { ThemeProvider } from "@/lib/providers/theme-providers";
import "@/styles/root-layout.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Next.js Essential Starter by Radium",
	description: "An Essential Next.js Starter by Radium.",
	icons: {
		icon: "favicon.png",
	},
	openGraph: {
		title: "Next.js Essential Starter by Radium",
		description: "An Essential Next.js Starter by Radium.",
		url: "https://radium.vgseven.com",
		siteName: "Radium",
		images: [
			{
				url: "https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/make-happen.jpg",
				width: 800,
				height: 600,
			},
			{
				url: "https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/make-happen.jpg",
				width: 1800,
				height: 1600,
				alt: "Radium",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Next.js Essential Starter by Radium",
		description: "An Essential Next.js Starter by Radium.",
		images: ["https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/make-happen.jpg"],
	},
	metadataBase: new URL("https://radium.vgseven.com"),
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "/en-US",
			"de-DE": "/de-DE",
		},
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={`${GeistSansFont.variable} ${GeistMonoFont.variable} font-geistSans`}>
			<body>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
