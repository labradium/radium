import { ThemeToggle } from "@/ui/components/theme-toggle";
import { Button } from "@/ui/primitives/button";
import { Label } from "@/ui/primitives/label";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={"relative flex h-screen flex-col items-center justify-center"}
    >
      <Label className={"text-4xl font-semibold"}>
        Radium Next.js Blog Template
      </Label>
      <p className={"mx-8 my-4 max-w-3xl text-center text-base"}>
        This is a blog template built with Next.js and Radium. It features a
        responsive design, customizable layout, and a blog post component
      </p>
      <div className={"flex flex-row gap-4"}>
        <Link href={"/about"}>
          <Button className={"rounded-full"}>About</Button>
        </Link>
        <Link href={"/blog"}>
          <Button className={"rounded-full"}>Blog</Button>
        </Link>
      </div>
      <Link
        href={"https://github.com/vgseven/radium"}
        className={"mb-6"}
        target={"_blank"}
      >
        <Button className={"mt-6 rounded-full"}>
          <GitHubLogoIcon className={"mx-2"} /> Star on GitHub
        </Button>
      </Link>
      <ThemeToggle />
    </main>
  );
}
