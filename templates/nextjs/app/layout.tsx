import type { Metadata } from "next";
import { GeistSansFont } from "@/lib/fonts";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@/lib/functions/theme-providers";
import "@/styles/root-layout.css";

export const metadata: Metadata = {
  title: "Radium Next.js Template",
  description: "A Template Used by Teams for almost every project.",
  icons: {
    icon: "favicon.png",
  },
  openGraph: {
    title: "Radium Next.js Template",
    description: "A Template Used by Teams for almost every project.",
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
      className={`${GeistSansFont.variable}`}
      suppressHydrationWarning
    >
      <body className={"font-mono"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
