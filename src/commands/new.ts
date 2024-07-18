// import { getPath } from "@/functions/get-path";
import * as terminal from "@clack/prompts";
import * as color from "picocolors";
import { setTimeout } from "node:timers/promises";

export async function New(): Promise<void> {
  // const libPath = getPath("lib");
  const s = terminal.spinner();

  terminal.intro(`${color.bgCyan(color.black(" Initialize New Project With Radium, Let's Get Started! "))}`);

  const newProject = await terminal.group(
    {
      name: () =>
        terminal.text({
          message: "What is the name of your project?",
          placeholder: "radium",
          validate: (value) => {
            if (value.length === 0) return "Project name is required!";
          },
        }),
      note: () => {
        terminal.note("We use TypeScript by default..", "For Better Type Safety");
      },
      chooseBase: () =>
        terminal.select({
          message: "Select Base Framework or Library",
          initialValue: "next",
          options: [
            {
              value: "next",
              label: "Next.js",
            },
            {
              value: "other",
              label: "React.js",
            },
            {
              value: "package",
              label: "TypeScript Package",
            },
          ],
        }),
      chooseExtras: () =>
        terminal.multiselect({
          message: "Add your favorite extras?",
          options: [
            {
              value: "eslint",
              label: "ESlint",
            },
            {
              value: "prettier",
              label: "Prettier",
            },
            {
              value: "husky",
              label: "Husky",
            },
            {
              value: "changesets",
              label: "Changesets",
            },
            {
              value: "github-workflow",
              label: "Github Workflow",
            },
            {
              value: "vscode-settings",
              label: "VSCode Settings",
            },
            {
              value: "biome",
              label: "Biomejs",
            },
          ],
        }),
      choosePackageManager: () =>
        terminal.select({
          message: "Select Package Manager",
          initialValue: "bun",
          options: [
            {
              value: "pnpm",
              label: "pnpm",
            },
            {
              value: "yarn",
              label: "yarn",
            },
            {
              value: "npm",
              label: "npm",
            },
            {
              value: "bun",
              label: "bun",
            },
          ],
        }),
      install: () =>
        terminal.confirm({
          message: "Install dependencies?",
          initialValue: false,
        }),
      git: () =>
        terminal.confirm({
          message: "Init Git?",
          initialValue: false,
        }),
    },
    {
      onCancel: () => {
        terminal.cancel("Operation cancelled.");
        process.exit(0);
      },
    }
  );

  try {
    s.start("Initializing Project");

    await setTimeout(3000);
    console.log(newProject);
    // console.log(libPath);

    s.stop("Project initialized successfully!");
  } catch (error) {
    terminal.note(`Error: ${error}`, "Project Initialization Failed");
    process.exit(1);
  }
}
