import type { Metadata } from "next";
import "@/styles/root-layout.css";
import { fonts } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Next Essential",
  description: "Next.js Essential Starter Template to start your next next.js project",
  icons: {
    icon: "favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fonts.GeistSans.variable} ${fonts.GeistMono.variable} font-geistMono`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
