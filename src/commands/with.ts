import { checkURL, getRepoInfo } from "@/functions/utils";
import type { repoInfo } from "@/types/types";
import * as terminal from "@clack/prompts";
import { setTimeout } from "node:timers/promises";

export async function With() {
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
    await setTimeout(2000);
    terminal.note("Setting up...", "Your Choices");
    s.stop("Project initialized successfully!");
    process.exit(0);
  } catch (error) {
    terminal.note(`Error: ${error}`, "Project Initialization Failed");
    process.exit(1);
  }
}
