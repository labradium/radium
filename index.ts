#!/usr/bin/env node

import { program } from "commander";
import picocolors from "picocolors";
import { setTimeout } from "node:timers/promises";
import { getVersion } from "@/functions/get-version";
import { With } from "@/commands/with";
import type { Options } from "./types/options";

async function cli() {
	if (process.argv.length < 3) {
		console.log(picocolors.red("unknown command try --help"));
		process.exit(1);
	}

	program.version(`${getVersion()}`, "-v, --version", "Output the current version");

	program
		.command("with")
		.option("-u, --url <url>", "URL of the starter template")
		.option("-n, --name <name>", "Name of the project")
		.option("-g, --git", "Initialize git")
		.option("-i, --install <install>", "Install dependencies")
		.description("Initialize a new project with starter template")
		.action(async (options: Options) => {
			setTimeout(1000);
			await With(options);
		});

	program.parse(process.argv);
}

cli()
	.then(() => {
		console.log(picocolors.green("Project Initialized Successfully!"));
		console.log(picocolors.green("Happy Coding!"));
	})
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
