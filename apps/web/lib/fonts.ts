import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import localFont from "next/font/local";

export const GeistSansFont = GeistSans;

export const GeistMonoFont = GeistMono;

export const JetBrainsMonoFont = localFont({
  src: "../public/fonts/JetBrainsMono.ttf",
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: "400",
});
