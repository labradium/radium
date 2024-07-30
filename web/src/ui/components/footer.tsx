import { XLogoIcon } from "@/ui/icons/x-logo-icon";
import { Label } from "@/ui/primitives/label";
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className={"my-4 flex flex-col items-center justify-center gap-4"}>
      <Label
        className={
          "bg-gradient-to-tl from-black via-zinc-500 to-zinc-800 bg-clip-text text-[14rem] tracking-tighter text-transparent max-lg:text-[12rem] max-md:text-[10rem] max-sm:text-[5.5rem]"
        }
      >
        Radium
      </Label>
      <div
        className={
          "mb-3 flex flex-row items-center justify-center gap-6 text-black dark:text-zinc-400"
        }
      >
        <Link href={"https://silver.vgseven.com"} target="_blank">
          <Image
            height={25}
            width={25}
            src={
              "https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/silver-favicon.png"
            }
            alt={"silver-company"}
          />
        </Link>
        <Link href={"https://x.com/vgsevenn/"} target="_blank">
          <XLogoIcon
            width={25}
            height={25}
            className={
              "rounded-full bg-white p-1 text-black hover:bg-black hover:text-white"
            }
          />
        </Link>
        <Link href={"https://github.com/silver-radium/"} target="_blank">
          <GitHubLogoIcon
            width={25}
            height={25}
            className={
              "rounded-full bg-white p-1 text-black hover:bg-black hover:text-white"
            }
          />
        </Link>
        <Link href={"https://discord.gg/H5D6u7jR"} target="_blank">
          <DiscordLogoIcon
            width={25}
            height={25}
            className={
              "rounded-full bg-white p-1 text-black hover:bg-black hover:text-white"
            }
          />
        </Link>
      </div>
      <div className={"flex flex-row gap-2 text-zinc-800/85"}>
        <Link href={"/contribute"}>
          <Label
            className={
              "hover:cursor-pointer hover:text-black max-sm:text-[12px]"
            }
          >
            Contribute Guide
          </Label>
        </Link>
        <Link href={"/contact"}>
          <Label
            className={
              "hover:cursor-pointer hover:text-black max-sm:text-[12px]"
            }
          >
            Contact Team
          </Label>
        </Link>
      </div>
      <Label className={"text-zinc-600"}>&copy; 2024 VGSEVEN</Label>
    </div>
  );
}
