import { Footer } from "@/ui/components/footer";
import { Header } from "@/ui/components/header";

export function ViewLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className={"my-28"}>{children}</div>
      <Footer />
    </>
  );
}
