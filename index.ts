import * as terminal from "@clack/prompts";
import { setTimeout } from "node:timers/promises";
import color from "picocolors";
import { copyDirectory } from "./lib/copy-template";
import { gitInit } from "./lib/git-init";
import { updatePackageJson } from "./lib/modify-packagejson";
import { packageInstall } from "./lib/package-install";

const s = terminal.spinner();

async function main() {
  console.clear();

  await setTimeout(1000);

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
            if (value.length === 0) return `Project name is required!`;
          },
        }),
      note: () => {
        terminal.note("We use TypeScript by default..", "For Type Safety");
      },
      chooseBase: () =>
        terminal.select({
          message: "Select Base Framework or Library",
          initialValue: "Next.js",
          options: [
            {
              value: "next",
              label: "Next.js",
            },
            {
              value: "react",
              label: "React.js",
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
    const template =
      project.chooseBase === "next" ? "next-general" : "react-general";

    await copyDirectory(`./templates/${template}`, `./${project.name}`);

    await updatePackageJson(`./${project.name}`, project.name);
    terminal.note(
      `${template} Template Initialized successfully!`,
      "Congratulations!",
    );

    if (project.install) {
      s.start(`Installing via ${project.choosePackageManager}`);

      packageInstall(`./${project.name}`, project.choosePackageManager);

      s.stop("Packages installed Successfully..");
    }

    s.start("Initialising Git");

    gitInit(`${project.name}`);

    s.stop("Git initialized");
  } catch (err) {
    terminal.note("Failed", `Error: ${err}`);
  }

  let nextSteps = `cd ${project.name}        \n${project.install ? "" : `${project.choosePackageManager} install\n`}${project.choosePackageManager} dev`;

  terminal.note(nextSteps, "Next steps.");

  terminal.outro(
    `Problems? ${color.underline(color.cyan("https://github.com/silver-radium/create-radium/issues"))}`,
  );
}

main().catch(console.error);
