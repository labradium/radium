#!/usr/bin/env node

import * as color from "picocolors";
import { New } from "@/commands/new";
import { With } from "@/commands/with";
import { program } from "commander";
import { getVersion } from "@/functions/utils";

export async function init() {
  if (process.argv.length < 3) {
    console.log(color.red("unknown command try --help"));
    process.exit(1);
  }

  program.version(`${getVersion()}`, "-v, --version", "Output the current version");

  program
    .command("new")
    .option("-n, --name <name>", "Project name")
    .description("Initialize a new project with custom toolings")
    .action(async (value) => {
      await New(value.name);
    });

  program
    .command("with")
    .option("-u, --url <url>", "Starter template url")
    .description("Initialize a new project with starter template")
    .action(async (value) => {
      await With(value.url);
    });

  program.parse(process.argv);
}

init().catch((error) => {
  console.error(error);
  process.exit(1);
});
