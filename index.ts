import * as terminal from "@clack/prompts";
import color from "picocolors";
import { setTimeout } from "timers/promises";
import { copyDirectory } from "./lib/copy-dir";
import { gitInit } from "./lib/git-init";
import { packageInstall } from "./lib/package-install";
import { updatePackageJson } from "./lib/update-pkg";

const s = terminal.spinner();

async function createRadium() {
  console.clear();

  terminal.intro(
    `${color.bgCyan(color.black(" Initialize New Project With Radium, Let's Get Started! "))}`,
  );

  const project = await terminal.group(
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
        terminal.note("We use TypeScript by default..", "For Type Safety");
      },
      chooseTemplate: () =>
        terminal.select({
          message: "Select Base Framework or Library",
          initialValue: "next-general",
          options: [
            {
              value: "next-general",
              label:
                "Next.js + TailwindCSS, Shadcn-UI, Geist Font, Eslint + Prettier and Next-Theme..",
            },
            {
              value: "react-general",
              label:
                "React.js + Vite, Tanstack Router, TailwindCSS, Shadcn-UI, Geist Font, Eslint + Prettier and Next-Theme..",
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
    },
    {
      onCancel: () => {
        terminal.cancel("Operation cancelled.");
        process.exit(0);
      },
    },
  );

  try {
    s.start("Initializing Project");
    await copyDirectory(
      `./templates/${project.chooseTemplate}`,
      `./${project.name}/`,
    );

    await setTimeout(3000);
    await updatePackageJson(`./${project.name}`, project.name);

    s.stop("Project initialized successfully!");
  } catch (error) {
    terminal.note("Project Initialization Failed", `Error: ${error}`);
  }

  try {
    if (project.install) {
      s.start(`Installing Packages via ${project.choosePackageManager}`);

      await setTimeout(2000);
      await packageInstall(`${project.name}`, project.choosePackageManager);

      s.stop("Packages Installed Successfully..");
    }
  } catch (error) {
    terminal.note("Package Installation Failed", `Error: ${error}`);
  }

  try {
    s.start("Initialising Git");

    await setTimeout(2000);

    await gitInit(`${project.name}`);

    s.stop("Git initialized");
  } catch (error) {
    terminal.note("Git Initialization Failed", `Error: ${error}`);
  }

  await setTimeout(1000);
  const nextSteps = `cd ${project.name}        \n${project.install ? "" : `${project.choosePackageManager} install\n`}${project.choosePackageManager} dev`;

  terminal.note(nextSteps, "Next steps.");

  terminal.outro(
    `Problems? ${color.underline(color.cyan("https://github.com/silver-radium/create-radium/issues"))}`,
  );

  process.exit(0);
}

createRadium().catch((err) => {
  console.error(err);
  process.exit(1);
});
