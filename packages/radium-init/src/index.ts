import { copyDirectory } from "@/lib/copy-template";
import * as terminal from "@clack/prompts";
import { setTimeout } from "node:timers/promises";
import color from "picocolors";

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
        terminal.select({
          message: "Select Template",
          initialValue: "next-general",
          options: [
            {
              value: "next-general",
              label:
                "Next.js (TailwindCSS + shadcn-ui + Geist Font + Next-Theme",
            },
            {
              value: "react-general",
              label:
                "React.js Tanstack-Router + Vite + TailwindCSS + shadcn-ui + Geist Font + Next-Theme",
            },
            {
              value: "turborepo-general",
              label: "Turborepo with TailwindCSS and Bun.js",
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

  copyDirectory(`./templates/${project.chooseTemplate}`, `./${project.name}`)
    .then(() =>
      terminal.note(
        `${project.chooseTemplate} Template Initialized successfully!`,
        "Congratulations!",
      ),
    )
    .catch((err) => terminal.note("Failed", `Error copying folder: ${err}`));

  if (project.install) {
    const s = terminal.spinner();
    s.start(`Installing via ${project.choosePackageManager}`);
    // install dependencies
    await setTimeout(1000);
    s.stop(`Installing via ${project.choosePackageManager}`);
  }

  let nextSteps = `cd ${project.name}        \n${project.install ? "" : `${project.choosePackageManager} install\n`}${project.choosePackageManager} dev`;

  terminal.note(nextSteps, "Next steps.");

  terminal.outro(
    `Problems? ${color.underline(color.cyan("https://github.com/silver-radium/init/issues"))}`,
  );
}

main().catch(console.error);
