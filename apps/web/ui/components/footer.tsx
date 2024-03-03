import { Label } from "@/ui/primitives/label";
import { ThemeToggle } from "@/ui/components/theme-toggle";
import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className={"my-6 border-t-2 dark:border-zinc-900 px-12 py-8"}>
      <div className={"flex justify-between"}>
        <SocialLinks />
        <a
          href={"https://silver.vgseven.com"}
          target={"_blank"}
          className={
            "tracking-tighter font-bold text-xl hover:cursor-pointer flex flex-row gap-1"
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
