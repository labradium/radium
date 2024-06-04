import { XLogoIcon } from "@/ui/icons/x-logo-icon";
import { Button } from "@/ui/primitives/button";
import { Label } from "@/ui/primitives/label";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={"relative flex h-screen flex-col items-center justify-center"}
    >
      <Label
        className={
          "bg-gradient-to-tl from-white to-zinc-800 bg-clip-text text-center text-8xl font-bold tracking-tighter text-transparent max-sm:text-6xl"
        }
      >
        Empowering Developer.
      </Label>
      <div className={"mt-6 flex flex-row gap-4"}>
        <Link href={"https://x.com/vgsevenn"} target="_blank">
          <Button className={"rounded-2xl"} variant={"default"}>
            <XLogoIcon height={15} width={15} />
            <Label className={"ml-2 cursor-pointer"}>Find More Updates</Label>
          </Button>
        </Link>
        <Link href={"https://github.com/vgseven/radium"} target="_blank">
          <Button className={"rounded-2xl"} variant={"secondary"}>
            <GitHubLogoIcon />
            <Label className={"ml-2 cursor-pointer"}>Star on GitHub</Label>
          </Button>
        </Link>
      </div>
    </main>
  );
}
