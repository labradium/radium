import { downloadDirectory } from "../functions/get-template";
import { updatePackageJson } from "../functions/prepare-project";
import { checkURL, getRepoInfo } from "../functions/utils";
import type { repoInfo } from "../types/types";
import * as terminal from "@clack/prompts";
import * as fs from "node:fs";
import * as path from "node:path";
import { packageInstall } from "../functions/prepare-project";
import { gitInit } from "../functions/prepare-project";

export async function With(projName: string) {
  const s = terminal.spinner();

  const withOptions = await terminal.group(
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
      choosePackageManager: () =>
        terminal.select({
          message: "Choose Package Manager",
          initialValue: "npm",
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

  try {
    const urlCheck = await checkURL(withOptions.chooseTemplate);
    let repo: repoInfo;

    if (urlCheck) {
      repo = getRepoInfo(withOptions.chooseTemplate);
    } else {
      terminal.note("Invalid URL", "Project Initialization Failed");
      process.exit(1);
    }

    s.start(`Initializing Project with ${repo.repo}`);

    await downloadDirectory(repo.owner, repo.repo, repo.sub, projName);

    const packageJSONPath = path.join(projName, "package.json");
    if (fs.existsSync(packageJSONPath)) {
      await updatePackageJson(projName, projName);
    }

    s.stop("Project initialized successfully!");

    s.start("Installing Dependencies");
    const projectPath = path.join(process.cwd(), projName);
    if (withOptions.install) {
      await packageInstall(projectPath, withOptions.choosePackageManager);
    }
    s.stop("Dependencies installed successfully!");

    s.start("Initializing Git");
    if (withOptions.git) {
      await gitInit(projectPath);
    }
    s.stop("Git initialized successfully!");

    let message = "";
    if (!withOptions.install) {
      message = `cd ${projName} \n${withOptions.choosePackageManager} i \n${withOptions.choosePackageManager} run dev`;
    } else {
      message = `cd ${projName} \n${withOptions.choosePackageManager} run dev`;
    }

    terminal.note(message, "Happy Coding!");
    process.exit(0);
  } catch (error) {
    terminal.note(`Error: ${error}`, "Project Initialization Failed");
    process.exit(1);
  }
}
