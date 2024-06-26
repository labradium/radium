#!/usr/bin/env node

import { program } from "commander";
import picocolors from "picocolors";
import { setTimeout } from "node:timers/promises";
import { Init } from "@/commands/init";
import { Starter } from "@/commands/starter";

async function cli() {
	if (process.argv.length < 3) {
		console.log(picocolors.red("unknown command try --help"));
		process.exit(1);
	}

	program
		.command("init")
		.description("Initialize a new project with your tools")
		.action(async () => {
			setTimeout(1000);
			console.log("Initializing New Project..");
			await Init();
		});

	program
		.command("starter")
		.description("Initialize a new project with starter template")
		.action(async () => {
			setTimeout(1000);
			console.log("Initializing Starter..");
			await Starter();
		});

	program
		.command("integrate")
		.description("Integrate any tool to your existing project")
		.action(() => {
			console.log("integrating is currently under development");
		});

	program
		.command("migrate")
		.description("Migrate any tool to your specific tool")
		.action(() => {
			console.log("migrating is currently under development");
		});

	program.parse(process.argv);
}

cli().catch((error) => {
	console.error(error);
	process.exit(1);
});
