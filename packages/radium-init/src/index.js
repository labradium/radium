import { copyDirectory } from "@/lib/copy-template";
import { tryGitInit } from "@/lib/git-init";
import * as terminal from "@clack/prompts";
import { $ } from "bun";
import { setTimeout } from "node:timers/promises";
import color from "picocolors";
import { updatePackageJson } from "./lib/modify-packagejson";
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
      chooseTemplate: () =>
        terminal.text({
          message: "Enter the name of the template you want to initialize :- ",
          placeholder: "next-general",
          validate: (value) => {
            if (value.length === 0) return `Template name is required!`;
          },
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
    await copyDirectory(
      `./templates/${project.chooseTemplate}`,
      `./${project.name}`,
    );
    await updatePackageJson(`./${project.name}`, project.name);
    terminal.note(
      `${project.chooseTemplate} Template Initialized successfully!`,
      "Congratulations!",
    );
  } catch (err) {
    terminal.note("Failed", `Error copying folder: ${err}`);
  }
  if (project.install) {
    s.start(`Installing via ${project.choosePackageManager}`);
    await $`cd ${project.name}`.quiet();
    await $`${project.choosePackageManager} i`.quiet();
    await setTimeout(1000);
    s.stop("Packages installed Successfully..");
  }
  s.start("Initialising Git");
  await setTimeout(1000);
  tryGitInit(".");
  s.stop("Git initialized");
  let nextSteps = `cd ${project.name}        \n${project.install ? "" : `${project.choosePackageManager} install\n`}${project.choosePackageManager} dev`;
  terminal.note(nextSteps, "Next steps.");
  terminal.outro(
    `Problems? ${color.underline(color.cyan("https://github.com/silver-radium/init/issues"))}`,
  );
}
main().catch(console.error);
