#!/usr/bin/env node

import * as terminal from "@clack/prompts";
import * as color from "picocolors";
import { New } from "@/commands/new";
import { With } from "@/commands/with";

export async function init() {
  terminal.intro(
    `${color.bgCyan(color.black(" Initialize New Project With Radium, Let's Get Started! "))}`
  );

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
    await New(chooseProjectMethod.name);
  }

  if (chooseProjectMethod.chooseMethod === "with") {
    await With(chooseProjectMethod.name);
  }
}

init().catch((error) => {
  console.error(error);
  process.exit(1);
});
