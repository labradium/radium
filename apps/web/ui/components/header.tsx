import { Label } from "@/ui/primitives/label";
import Image from "next/image";
import radiumIcon from "@/public/favicon.png";
import Link from "next/link";
import { SocialLinks } from "@/ui/components/social-links";

export function Header() {
  return (
    <header
      className={
        "border-b border-zinc-800 px-4 py-4 flex flex-row justify-between items-center"
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
            "flex items-center justify-center rounded-2xl text-sm font-medium text-secondary-foreground hover:bg-secondary/80 px-4 py-2 hover:cursor-pointer"
          }
        >
          Documentation
        </Link>
        <Link
          href={"/explore"}
          className={
            "flex items-center justify-center rounded-2xl text-sm font-medium text-secondary-foreground bg-secondary hover:bg-primary hover:text-primary-foreground px-4 py-2 hover:cursor-pointer"
          }
        >
          Explore
        </Link>
        <Link
          href={"/templates"}
          className={
            "flex items-center justify-center rounded-2xl text-sm font-medium text-secondary-foreground hover:bg-secondary/80 px-4 py-2 hover:cursor-pointer"
          }
        >
          Templates
        </Link>
        <Link
          href={"/components"}
          className={
            "flex items-center justify-center rounded-2xl text-sm font-medium text-secondary-foreground hover:bg-secondary/80 px-4 py-2 hover:cursor-pointer"
          }
        >
          Components
        </Link>
        <Link
          href={"/cli"}
          className={
            "flex items-center justify-center rounded-2xl text-sm font-medium text-secondary-foreground hover:bg-secondary/80 px-4 py-2 hover:cursor-pointer"
          }
        >
          CLI
        </Link>
        <Link
          href={"/upcoming"}
          className={
            "flex items-center justify-center rounded-2xl text-sm font-medium text-secondary-foreground hover:bg-secondary/80 px-4 py-2 hover:cursor-pointer"
          }
        >
          Upcoming
        </Link>
      </section>
      <SocialLinks />
    </header>
  );
}
