import { ThemeToggle } from "@/ui/components/theme-toggle";
import { Label } from "@/ui/primitives/label";
import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className={"my-6 border-t-2 px-12 py-8 dark:border-zinc-900"}>
      <div className={"flex justify-between"}>
        <SocialLinks />
        <a
          href={"https://silver.vgseven.com"}
          target={"_blank"}
          className={
            "flex flex-row gap-1 text-xl font-bold tracking-tighter hover:cursor-pointer"
          }
        >
          <Label>THE</Label>
          <Label>SILVER</Label>
          <Label>COMPANY</Label>
        </a>
        <ThemeToggle />
      </div>
    </footer>
  );
}
