import { GeistMonoFont, GeistSansFont, JetBrainsMonoFont } from "@/lib/fonts";
import { ThemeProvider } from "@/lib/functions/theme-providers";
import "@/styles/root-layout.css";
import { Footer } from "@/ui/components/footer";
import { Header } from "@/ui/components/header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Radium: Empowering Developer.",
  description:
    "Welcome to Radium, the single platform designed to empower developers, whether they are beginners or professionals. Radium offers a comprehensive suite of tools and services crafted to streamline the development process, ensuring a swift and efficient delivery of projects.",
  icons: {
    icon: "favicon.png",
  },
  openGraph: {
    title: "Radium Next.js Template",
    description: "A Template Used by Team Radium for almost every project.",
    url: "https://radium.vgseven.com",
    siteName: "Radium",
    images: [
      {
        url: "https://eo4grnhr9puxdgdq.public.blob.vercel-storage.com/vgseven-company-og/vgseven-company-og.svg",
        width: 800,
        height: 600,
      },
      {
        url: "https://eo4grnhr9puxdgdq.public.blob.vercel-storage.com/vgseven-company-og/vgseven-company-og.svg",
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
    title: "Radium",
    description: "A Template Used by Team Radium for almost every project.",
    images: [
      "https://eo4grnhr9puxdgdq.public.blob.vercel-storage.com/vgseven-company-og/vgseven-company-og.svg",
    ],
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
      className={`${GeistSansFont.variable} ${GeistMonoFont.variable} ${JetBrainsMonoFont.variable}`}
      suppressHydrationWarning
    >
      <body className={"font-mono"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
