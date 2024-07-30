import { DocsFooter } from "@/ui/components/docs/footer";
import { DocsHeader } from "@/ui/components/docs/header";
import type { ReactNode } from "react";

export function DocsLayout({
  children,
  className,
}: { children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <DocsHeader />
      <div>
        <div>{children}</div>
      </div>
      <DocsFooter />
    </div>
  );
}
