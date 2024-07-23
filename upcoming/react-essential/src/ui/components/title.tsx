import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export function Title({ title }: { title: string }) {
  useDocumentTitle(title);

  return void 0;
}
