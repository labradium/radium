import radiumIcon from "@/public/favicon.png";
import { SocialLinks } from "@/ui/components/social-links";
import { Label } from "@/ui/primitives/label";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header
      className={
        "flex flex-row items-center justify-between border-b border-zinc-800 px-4 py-4"
      }
    >
      <Link className={"flex flex-row gap-2"} href={"/"}>
        <Image alt="radium-icon" src={radiumIcon} width={28} height={28} />
        <Label className={"text-lg hover:cursor-pointer"}>Radium</Label>
      </Link>
      <section className={"flex flex-row gap-4"}>
        <Link
          href={"/docs"}
          className={
            "text-secondary-foreground hover:bg-secondary/80 flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium hover:cursor-pointer"
          }
        >
          Documentation
        </Link>
        <Link
          href={"/explore"}
          className={
            "text-secondary-foreground bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium hover:cursor-pointer"
          }
        >
          Explore
        </Link>
        <Link
          href={"/templates"}
          className={
            "text-secondary-foreground hover:bg-secondary/80 flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium hover:cursor-pointer"
          }
        >
          Templates
        </Link>
        <Link
          href={"/components"}
          className={
            "text-secondary-foreground hover:bg-secondary/80 flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium hover:cursor-pointer"
          }
        >
          Components
        </Link>
        <Link
          href={"/cli"}
          className={
            "text-secondary-foreground hover:bg-secondary/80 flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium hover:cursor-pointer"
          }
        >
          CLI
        </Link>
        <Link
          href={"/upcoming"}
          className={
            "text-secondary-foreground hover:bg-secondary/80 flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium hover:cursor-pointer"
          }
        >
          Upcoming
        </Link>
      </section>
      <SocialLinks />
    </header>
  );
}
