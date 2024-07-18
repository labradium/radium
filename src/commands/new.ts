import * as terminal from "@clack/prompts";
import { setTimeout } from "node:timers/promises";

export async function New() {
  const s = terminal.spinner();

  const newOptions = await terminal.group(
    {
      noteTS: () => {
        terminal.note("We use TypeScript by default..", "For Better Type Safety");
      },
      noteNX: () => terminal.note("Next.js is the only supported framework.", "Currently, "),
      chooseExtras: () =>
        terminal.multiselect({
          message: "Add your favorite extras?",
          options: [
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
          initialValue: "pnpm",
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
          message: "Initialize Git?",
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

  s.start("Initializing Project");
  await setTimeout(2000);
  terminal.note(`${newOptions}`, "Your Choices");
  s.stop("Project initialized successfully!");
}
