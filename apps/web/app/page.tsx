import { Button } from "@/ui/primitives/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/ui/primitives/card";
import { Label } from "@/ui/primitives/label";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className={"mt-16 mx-auto max-w-7xl"}>
      <div className={"flex flex-col justify-center items-center "}>
        <Label
          className={
            "text-8xl max-sm:text-6xl text-center font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 dark:from-zinc-200 to-black dark:to-zinc-500"
          }
        >
          Empowering Developer.
        </Label>

        <Label
          className={
            "mt-10 text-lg max-sm:text-sm text-zinc-700 dark:text-zinc-300 text-center text-wrap max-sm:mx-6 mx-60"
          }
        >
          Welcome to Radium, the single platform designed to empower developers,
          whether they are beginners or professionals. Radium offers a
          comprehensive suite of tools and services crafted to streamline the
          development process, ensuring a swift and efficient delivery of
          projects.
        </Label>
        <div className={"flex gap-4 mt-6"}>
          <a href={"https://github.com/labradium/radium"} target="_blank">
            <Button className={"rounded-2xl"}>Get Started</Button>
          </a>
          <a href={"https://github.com/labradium/radium"} target="_blank">
            <Button className={"rounded-2xl"} variant={"secondary"}>
              <Label className={"flex flex-row gap-2"}>
                <GitHubLogoIcon /> Star on GitHub
              </Label>
            </Button>
          </a>
        </div>
      </div>
      <Label className={"text-xl my-8"}>Featured Templates</Label>
      <div className={"flex flex-wrap gap-5 my-4"}>
        <Card className={"w-[39rem]"}>
          <CardHeader>
            <Label className={"text-xl font-bold"}>
              Radium Next.js Template
            </Label>
            <CardDescription>
              A Next.js Template setup with Next.js 14, TailwindCSS, Shadcn-UI,
              Radix-UI, and more.
            </CardDescription>
          </CardHeader>
          <CardContent>
            A Next.js Template setup with Next.js 14, TailwindCSS, Shadcn-UI,
            Radix-UI, and more. A Next.js Template setup with Next.js 14,
            TailwindCSS, Shadcn-UI, Radix-UI, and more. A Next.js Template setup
            with Next.js 14, TailwindCSS, Shadcn-UI, Radix-UI, and more. A
            Next.js Template setup with Next.js 14, TailwindCSS, Shadcn-UI,
            Radix-UI, and more.
          </CardContent>
        </Card>
        <Card className={"w-[39rem]"}>
          <CardHeader>
            <Label className={"text-xl font-bold"}>
              Radium Next.js Template
            </Label>
            <CardDescription>
              A Next.js Template setup with Next.js 14, TailwindCSS, Shadcn-UI,
              Radix-UI, and more.
            </CardDescription>
          </CardHeader>
          <CardContent>
            A Next.js Template setup with Next.js 14, TailwindCSS, Shadcn-UI,
            Radix-UI, and more. A Next.js Template setup with Next.js 14,
            TailwindCSS, Shadcn-UI, Radix-UI, and more. A Next.js Template setup
            with Next.js 14, TailwindCSS, Shadcn-UI, Radix-UI, and more. A
            Next.js Template setup with Next.js 14, TailwindCSS, Shadcn-UI,
            Radix-UI, and more.
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
