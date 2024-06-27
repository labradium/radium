#!/usr/bin/env node

import { program } from "commander";
import picocolors from "picocolors";
import { setTimeout } from "node:timers/promises";
import { Init } from "@/commands/init";
import { Starter } from "@/commands/starter";
import { getVersion } from "@/functions/get-version";

async function cli() {
	if (process.argv.length < 3) {
		console.log(picocolors.red("unknown command try --help"));
		process.exit(1);
	}

	program.version(`${getVersion()}`, "-v, --version", "Output the current version");

	program
		.command("new")
		.description("Initialize a new project with your tools")
		.action(async () => {
			setTimeout(1000);
			console.log("Initializing New Project..");
			await Init();
		});

	program
		.command("with")
		.description("Initialize a new project with starter template")
		.action(async () => {
			setTimeout(1000);
			console.log("Initializing Starter..");
			await Starter();
		});

	program.parse(process.argv);
}

cli().catch((error) => {
	console.error(error);
	process.exit(1);
});
