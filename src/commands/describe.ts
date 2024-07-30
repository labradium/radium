import { intro, spinner, note, outro } from "@clack/prompts";
import color from "picocolors";
import { setTimeout } from "node:timers/promises";

export async function Describe() {
  const s = spinner();

  intro(`${color.bgGreen("Radium Describe")}`);
  s.start("Initializing AI");
  await setTimeout(3000);
  s.stop("Radium Describe is on its way!");

  note(
    "Radium Describe is an AI powered tool to help you initialize a new project with words",
    "Stage Alpha"
  );

  outro("Thanks for using Radium!");
}
