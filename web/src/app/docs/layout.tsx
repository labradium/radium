import { GeistMonoFont, GeistSansFont } from "@/lib/fonts";
import "@/styles/root-layout.css";
import { DocsLayout } from "@/ui/layouts/docs";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Radium - Empowering Developers To Rapidly Ship Projects",
  description: "An Essential Next.js Starter by Radium.",
  icons: {
    icon: "favicon.png",
  },
};

export default function DocsRootLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      className={`${GeistSansFont.variable} ${GeistMonoFont.variable} font-geistMono`}
    >
      <div>{children}</div>
    </DocsLayout>
  );
}
