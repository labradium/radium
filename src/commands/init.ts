import { copyFiles } from "@/functions/prepare-project";
import * as terminal from "@clack/prompts";
import * as fs from "node:fs";
import * as path from "node:path";
import { packageInstall } from "@/functions/prepare-project";
import { gitInit } from "@/functions/prepare-project";
import { updatePackageJson } from "@/functions/prepare-project";
import { addBiome, addShadcnUI, addTheme } from "@/functions/setting-project";
import { downloadDirectory } from "@/functions/get-template";
import { checkURL, getRepoInfo } from "@/functions/utils";
import { parserName, type RepoInfo } from "@/types/types";

export async function New() {
  const s = terminal.spinner();

  const newOptions = await terminal.group(
    {
      projectName: () =>
        terminal.text({
          message: "What is the name of your project?",
          placeholder: "radium",
          validate(value) {
            if (!parserName.safeParse(value).success) {
              return "Project name is required!";
            }
          },
        }),

      noteTS: () =>
        terminal.note(
          "We use TypeScript by default..",
          "For Better Type Safety"
        ),

      noteNX: () =>
        terminal.note(
          "Next.js is the only supported framework, Soon React and others.",
          "Currently"
        ),
      noteBase: () =>
        terminal.note(
          "Base Next.js Template consist TailwindCSS and Geist Font..",
          "Base Template Initialized"
        ),
      addBiome: () =>
        terminal.confirm({
          message: "Do You want to add biome?",
          initialValue: true,
        }),
      addShadcnUI: () =>
        terminal.confirm({
          message: "Do You want to add shadcn-ui?",
          initialValue: true,
        }),
      addTheme: () =>
        terminal.confirm({
          message: "Do You want to add theme?",
          initialValue: true,
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
    s.start("Initializing Project");
    await copyFiles(newOptions.projectName);

    const packageJSONPath = path.join(newOptions.projectName, "package.json");
    if (fs.existsSync(packageJSONPath)) {
      await updatePackageJson(newOptions.projectName, newOptions.projectName);
    }
    s.stop("Project initialized successfully!");

    if (newOptions.addBiome) {
      s.message("Adding biome...");
      await addBiome(newOptions.projectName);
      s.stop("Biome added successfully!");
    }

    if (newOptions.addShadcnUI) {
      s.start("Adding shadcn-ui...");
      await addShadcnUI(newOptions.projectName);
      s.stop("shadcn-ui added successfully!");
    }

    if (newOptions.addTheme) {
      s.start("Adding theme...");
      await addTheme(newOptions.projectName);
      s.stop("theme added successfully!");
    }

    const projectPath = path.join(process.cwd(), newOptions.projectName);
    if (newOptions.install) {
      s.start("Installing Dependencies");
      await packageInstall(projectPath, newOptions.choosePackageManager);
      s.stop("Dependencies installed successfully!");
    }

    if (newOptions.git) {
      s.start("Initializing Git");
      await gitInit(projectPath);
      s.stop("Git initialized successfully!");
    }

    let message = "";
    if (!newOptions.install) {
      message = `cd ${newOptions.projectName} \n${newOptions.choosePackageManager} i \n${newOptions.choosePackageManager} run dev`;
    } else {
      message = `cd ${newOptions.projectName} \n${newOptions.choosePackageManager} run dev`;
    }

    terminal.note(message, "Happy Coding!");
    process.exit(0);
  } catch (error) {
    terminal.note(`Error: ${error}`, "Project Initialization Failed");
    process.exit(1);
  }
}

export async function With() {
  const s = terminal.spinner();

  const withOptions = await terminal.group(
    {
      projectName: () =>
        terminal.text({
          message: "What is the name of your project?",
          placeholder: "radium",
          validate(value) {
            if (!parserName.safeParse(value).success) {
              return "Project name is required!";
            }
          },
        }),
      templateURL: () =>
        terminal.text({
          message: "What is the URL of the template?",
          placeholder: "https://github.com/vgseven/next-essential",
          validate(value) {
            if (!value.includes("https://github.com/")) {
              return "Invalid URL!";
            }
          },
        }),
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
    const urlCheck = await checkURL(withOptions.templateURL);
    let repo: RepoInfo;

    if (urlCheck) {
      repo = getRepoInfo(withOptions.templateURL);
    } else {
      terminal.note("Invalid URL", "Project Initialization Failed");
      process.exit(1);
    }

    s.start(`Initializing Project with ${repo.repo}`);

    await downloadDirectory(
      repo.owner,
      repo.repo,
      repo.sub,
      withOptions.projectName
    );

    const packageJSONPath = path.join(withOptions.projectName, "package.json");
    if (fs.existsSync(packageJSONPath)) {
      await updatePackageJson(withOptions.projectName, withOptions.projectName);
    }

    s.stop("Project initialized successfully!");

    const projectPath = path.join(process.cwd(), withOptions.projectName);
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
      message = `cd ${withOptions.projectName} \n${withOptions.choosePackageManager} i \n${withOptions.choosePackageManager} run dev`;
    } else {
      message = `cd ${withOptions.projectName} \n${withOptions.choosePackageManager} run dev`;
    }

    terminal.note(message, "Happy Coding!");
    process.exit(0);
  } catch (error) {
    terminal.note(`Error: ${error}`, "Project Initialization Failed");
    process.exit(1);
  }
}
