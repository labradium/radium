import { downloadDirectory } from "@/functions/get-template";
import { updatePackageJson } from "@/functions/prepare-project";
import { checkURL, getRepoInfo } from "@/functions/utils";
import type { RepoInfo } from "@/types/types";
import * as terminal from "@clack/prompts";
import * as fs from "node:fs";
import * as path from "node:path";
import { packageInstall } from "@/functions/prepare-project";
import { gitInit } from "@/functions/prepare-project";

export async function With(projName: string, url: string) {
  const s = terminal.spinner();

  const withOptions = await terminal.group(
    {
      note: () =>
        terminal.note("Project with existing template...", "Setting up"),
      choosePackageManager: () =>
        terminal.select({
          message: "Choose Package Manager",
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
    const urlCheck = await checkURL(url);
    let repo: RepoInfo;

    if (urlCheck) {
      repo = getRepoInfo(url);
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

    const projectPath = path.join(process.cwd(), projName);
    if (withOptions.install) {
      s.start("Installing Dependencies");
      await packageInstall(projectPath, withOptions.choosePackageManager);
      s.stop("Dependencies installed successfully!");
    }

    if (withOptions.git) {
      s.start("Initializing Git");
      await gitInit(projectPath);
      s.stop("Git initialized successfully!");
    }

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
