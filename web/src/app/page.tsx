import { MainLayout } from "@/ui/layouts/main";
import { Button } from "@/ui/primitives/button";
import { Label } from "@/ui/primitives/label";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout className={"flex flex-col gap-4"}>
      <div
        className={
          "relative flex h-screen flex-col items-center justify-center"
        }
      >
        <Label
          className={
            "mb-4 bg-gradient-to-tl from-black via-zinc-600 to-zinc-800 bg-clip-text text-center text-7xl font-semibold tracking-tighter text-transparent max-lg:mx-4 max-sm:text-6xl"
          }
        >
          Rapid Shipments
        </Label>
        <p
          className={
            "my-1 max-w-[48rem] text-center text-sm font-medium max-lg:mx-4 max-sm:text-[12px]"
          }
        >
          Radium, Rapidly Ship Projects - Radium helps to streamline the
          development process by enabling developers to focus on building and
          functionality , rather than dealing with configurations or gettung
          started. Radium offers Radium CLI, Radium Templates, Radium Starters,
          and Radium Stacks to kick off your next project at speed of light and
          best architecture.
        </p>
        <div className={"my-4 flex flex-row gap-4"}>
          <Link href="https://github.com/radiumlabs">
            <Button>Get Started</Button>
          </Link>
          <Link href="https://github.com/radiumlabs/radium">
            <Button variant={"outline"}>
              <GitHubLogoIcon className={"mr-2"} /> Star on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
