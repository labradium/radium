import { GeistMonoFont, GeistSansFont } from "@/lib/fonts";
import "@/styles/root-layout.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Radium",
  description: "Rapidly Ship Projects",
  icons: {
    icon: "favicon.png",
  },
  openGraph: {
    title: "Radium",
    description: "Rapidly Ship Projects",
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
    title: "Radium",
    description: "Rapidly Ship Projects",
    images: [
      "https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/make-happen.jpg",
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
      className={`${GeistSansFont.variable} ${GeistMonoFont.variable} font-geistSans`}
    >
      <body>{children}</body>
    </html>
  );
}
