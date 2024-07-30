import { MainLayout } from "@/ui/layouts/main";
import { Button } from "@/ui/primitives/button";
import { Highlight } from "@/ui/primitives/highlight";
import { Label } from "@/ui/primitives/label";
import { UnderlineHover } from "@/ui/primitives/underline-hover";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
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
            "mb-6 bg-gradient-to-tl from-black via-zinc-500 to-zinc-800 bg-clip-text text-center text-7xl font-semibold tracking-tighter text-transparent max-lg:mx-4 max-sm:text-6xl"
          }
        >
          Empowering Developers
        </Label>
        <Label
          className={
            "my-1 max-w-[48rem] text-center text-sm text-muted-foreground max-lg:mx-4 max-sm:text-[12px]"
          }
        >
          Radium,{" "}
          <UnderlineHover variant={"secondary"}>
            Empowering Developers
          </UnderlineHover>{" "}
          To Rapidly Ship Projects. Our mission is to streamline the development
          process by enabling developers to{" "}
          <UnderlineHover variant={"secondary"}>
            focus on innovation and functionality
          </UnderlineHover>
          , rather than dealing with issues, resources, and configurations.
        </Label>
        <div className={"my-4 flex flex-row gap-4"}>
          <Link href="/docs">
            <Button variant={"outline"}>Get Started</Button>
          </Link>
          <Link href="https://github.com/silver-radium/">
            <Button variant={"secondary"}>
              <GitHubLogoIcon className={"mr-2"} /> Star on GitHub
            </Button>
          </Link>
        </div>
      </div>
      <div className={"bg-accent px-14 py-12 text-accent-foreground"}>
        <Label className={"text-3xl"}>Radium Init</Label>
        <div>
          <p className={"my-4 text-sm text-zinc-300"}>
            Radium Init is a powerful CLI tool designed to help developers
            quickly initialize new projects using a variety of starter
            templates. Whether you're starting from scratch or looking to build
            on an existing setup, Radium Init simplifies the setup process,
            allowing you to jump straight into development and skip the process
            of project initialization.
          </p>
          <Label className={"my-2"}>Key Features</Label>
          <ul
            className={
              "my-4 flex list-inside list-disc flex-col gap-2 text-sm text-zinc-300"
            }
          >
            <li>
              <Highlight>Starters</Highlight>: Choose from a wide range of
              starter templates tailored to different frameworks and project
              types.
            </li>
            <li>
              <Highlight>Depenedencies Installation</Highlight>: With simple
              options you can install dependencies with your choice of package
              managers.
            </li>
            <li>
              <Highlight>Git Initialization</Highlight>: With simple options you
              can initialize project to git.
            </li>
            <li>
              <Highlight>Just URL</Highlight>: Get Started with simple Starter
              or Template GitHub URL no matter it's sub-dir or main directory.
            </li>
          </ul>
          <p className={"text-sm text-zinc-300"}>
            Currently Radium Init supports initialization only with templates
            but we're working on some AI and Custom tooling features..
          </p>
          <Link
            href={"https://github.com/silver-radium/init"}
            target={"_blank"}
          >
            <Button variant={"default"} className={"mt-4"}>
              Know More <ArrowRightIcon className={"ml-2"} />
            </Button>
          </Link>
        </div>
      </div>
      <div className={"px-14 py-12"}>
        <Label className={"text-3xl"}>Radium Lab</Label>
        <div>
          <p className={"my-4 text-sm text-zinc-900"}>
            Radium Lab, Lab - It's an place where you can find features and
            tools that're currently under development. Before becoming an stable
            we can try the new upcoming features and improve that to become best
            and performant stable. Inside Radium Lab we're currently testing
            JavaScript Signals, React 19 with Next.js 15 and React Compiler and
            much more are on the way..
          </p>
        </div>
      </div>
      <div className={"bg-accent px-14 py-12 text-accent-foreground"}>
        <Label className={"text-3xl"}>Radium Templates</Label>
        <div>
          <p className={"my-4 text-sm text-zinc-300"}>
            Radium Templates, An Collection of Ready to Ship Templates.
            Currently Radium offers only Next.js and React.js Templates but we
            are working on adding more frameworks such as Astro, Solid and
            Svelte..
          </p>
        </div>
        <Label className={"my-2"}>Key Features</Label>
        <ul
          className={
            "my-4 flex list-inside list-disc flex-col gap-2 text-sm text-zinc-300"
          }
        >
          <li>
            <Highlight>Perfect Configuration</Highlight>: Every starter template
            is configured with the best practices for your project.
          </li>
          <li>
            <Highlight>Ready to Use</Highlight>: Just Init and Start Coding. No
            need to configure anything.
          </li>
        </ul>
        <Link
          href={"https://github.com/silver-radium/templates"}
          target={"_blank"}
        >
          <Button variant={"default"} className={"mt-4"}>
            Know More <ArrowRightIcon className={"ml-2"} />
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
}
