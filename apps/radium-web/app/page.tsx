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
    <main className={"mx-auto mt-16 max-w-7xl"}>
      <div className={"flex flex-col items-center justify-center"}>
        <Label
          className={
            "bg-gradient-to-r from-zinc-400 to-black bg-clip-text text-center text-8xl font-bold tracking-tighter text-transparent max-sm:text-6xl dark:from-zinc-200 dark:to-zinc-500"
          }
        >
          Empowering Developer.
        </Label>

        <Label
          className={
            "mx-60 mt-10 text-wrap text-center text-lg text-zinc-700 max-sm:mx-6 max-sm:text-sm dark:text-zinc-300"
          }
        >
          Welcome to Radium, the single platform designed to empower developers,
          whether they are beginners or professionals. Radium offers a
          comprehensive suite of tools and services crafted to streamline the
          development process, ensuring a swift and efficient delivery of
          projects.
        </Label>
        <div className={"mt-6 flex gap-4"}>
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
      <Label className={"my-8 text-xl"}>Featured Templates</Label>
      <div className={"my-4 flex flex-wrap gap-5"}>
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
