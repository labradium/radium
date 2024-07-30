import { Footer } from "@/ui/components/footer";
import { Header } from "@/ui/components/header";
import type { ReactNode } from "react";

export function MainLayout({
  children,
  className,
}: { children: ReactNode; className?: string }) {
  return (
    <main className={className}>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
