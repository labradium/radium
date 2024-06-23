import { GeistMonoFont, GeistSansFont } from "@/lib/fonts";
import { ThemeProvider } from "@/lib/functions/theme-providers";
import "@/styles/root-layout.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Next.js General Template by Radium",
	description: "An General Next.js Template by Radium.",
	icons: {
		icon: "favicon.png",
	},
	openGraph: {
		title: "Next.js General Template by Radium",
		description: "An General Next.js Template by Radium.",
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
		title: "Next.js General Template by Radium",
		description: "An General Next.js Template by Radium.",
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
		<html
			lang="en"
			className={`${GeistSansFont.variable} ${GeistMonoFont.variable} font-geistSans`}
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
