#!/usr/bin/env node

import * as terminal from "@clack/prompts";
import * as color from "picocolors";
import { setTimeout } from "node:timers/promises";
import { checkURL, getRepoInfo } from "./functions/utils";
import type { repoInfo } from "./types/types";

async function init() {
  const s = terminal.spinner();

  terminal.intro(`${color.bgCyan(color.black(" Initialize New Project With Radium, Let's Get Started! "))}`);

  const chooseProjectMethod = await terminal.group(
    {
      name: () =>
        terminal.text({
          message: "What is the name of your project?",
          placeholder: "radium",
          validate: (value) => {
            if (value.length === 0) return "Project name is required!";
          },
        }),
      chooseMethod: () =>
        terminal.select({
          message: "Choose Project Method",
          initialValue: "new",
          options: [
            {
              value: "new",
              label: "New Project with Custome toolings...",
            },
            {
              value: "with",
              label: "With Existing GitHub Template URL...",
            },
          ],
        }),
    },
    {
      onCancel: () => {
        terminal.cancel("Operation cancelled.");
        process.exit(0);
      },
    }
  );

  if (chooseProjectMethod.chooseMethod === "new") {
    const settingProject = await terminal.group(
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
    terminal.note(`${settingProject}`, "Your Choices");
    s.stop("Project initialized successfully!");
  }

  if (chooseProjectMethod.chooseMethod === "with") {
    const settingProject = await terminal.group(
      {
        note: () => terminal.note("Project with existing template...", "Setting up"),
        chooseTemplate: () =>
          terminal.text({
            message: "Enter the URL of the template...",
            placeholder: "https://github.com/vgseven/next-essential",
            validate: (value) => {
              if (value.length === 0) return "Template URL is required!";
            },
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

    try {
      const urlCheck = await checkURL(settingProject.chooseTemplate);
      let repo: repoInfo;

      if (urlCheck) {
        repo = getRepoInfo(settingProject.chooseTemplate);
      } else {
        terminal.note("Invalid URL", "Project Initialization Failed");
        process.exit(1);
      }

      s.start(`Initializing Project with ${repo.repo}`);
      await setTimeout(2000);
      terminal.note("Setting up...", "Your Choices");
      s.stop("Project initialized successfully!");
    } catch (error) {
      terminal.note(`Error: ${error}`, "Project Initialization Failed");
      process.exit(1);
    }
  }
}

init().catch((error) => {
  console.error(error);
  process.exit(1);
});
