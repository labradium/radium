import * as terminal from "@clack/prompts";
import color from "picocolors";
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
          initialValue: "Next.js",
          options: [
            {
              value: "next-general",
              label:
                "General Next.js template with TailwindCSS, Shadcn-UI, Geist Font, Eslint + Prettier, Next-Theme and Proper Folder Structure.",
            },
            {
              value: "react-general",
              label:
                "General React.js template with Vite, Tanstack Router, TailwindCSS, Shadcn-UI, Geist Font, Eslint + Prettier, Next-Theme and Proper Folder Structure.",
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
    const template = project.chooseTemplate;

    await copyDirectory(`../templates/${template}`, `./${project.name}`);

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
