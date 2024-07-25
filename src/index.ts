#!/usr/bin/env node

import * as color from "picocolors";
import { New, With } from "@/commands/init";
import { program } from "commander";
// import { getVersion } from "@/functions/utils";
import { Describe } from "@/commands/describe";

export async function init() {
  if (process.argv.length < 3) {
    console.log(color.red("unknown command try --help"));
    process.exit(1);
  }

  // program.version(
  //   `${getVersion()}`,
  //   "-v, --version",
  //   "Output the current version"
  // );

  program
    .command("init")
    .option("--new", "Initialize a new project with custom toolings")
    .option("--with", "Initialize a new project with starter template")
    .description(
      "Initialize a new project with custom toolings or with starter template, use --new for new project and --with for starter template."
    )
    .action(async (value) => {
      if (value.new) {
        await New();
      } else if (value.with) {
        await With();
      } else {
        console.log(color.red("Invalid arguments"));
      }
    });

  program
    .command("describe")
    .description("Initialize a new project with words.")
    .action(async () => {
      await Describe();
    });

  program.parse(process.argv);
}

init().catch((error) => {
  console.error(error);
  process.exit(1);
});
