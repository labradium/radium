import * as terminal from "@clack/prompts";
import * as color from "picocolors";
import { setTimeout } from "node:timers/promises";

export async function Describe() {
  const s = terminal.spinner();

  terminal.intro(`${color.bgGreen("Radium Describe")}`);
  s.start("Initializing AI");
  await setTimeout(3000);
  s.stop("Radium Describe is on its way!");

  terminal.note(
    "Radium Describe is an AI powered tool to help you initialize a new project with words",
    "Stage Alpha"
  );

  terminal.outro("Thanks for using Radium!");
}
