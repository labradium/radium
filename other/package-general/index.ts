#!/usr/bin/env node

import * as terminal from "@clack/prompts";
import color from "picocolors";
import { setTimeout } from "node:timers/promises";

const s = terminal.spinner();

async function createRadium() {
	console.clear();

	terminal.intro(`${color.bgCyan(color.black(" Welcome to CLI General Template by Radium, Let's Get Started! "))}`);

	const project = await terminal.group(
		{
			name: () =>
				terminal.text({
					message: "What is the name of your project?",
					placeholder: "radium",
					validate: (value) => {
						if (value.length === 0) return "Project name is required!";
					},
				}),
			note: () => {
				terminal.note("We use TypeScript by default..", "For Type Safety");
			},
			chooseBase: () =>
				terminal.select({
					message: "Select Base Framework or Library",
					initialValue: "next",
					options: [
						{
							value: "next",
							label: "Next.js",
						},
						{
							value: "react",
							label: "React.js",
						},
					],
				}),
			chooseTemplate: () =>
				terminal.select({
					message: "Select Template",
					initialValue: "next-general",
					options: [
						{
							value: "general",
							label: "Next.js + TailwindCSS, Shadcn-UI, Geist Font, Eslint + Prettier and Next-Theme..",
						},
						{
							value: "general",
							label:
								"React.js + Vite, Tanstack Router, TailwindCSS, Shadcn-UI, Geist Font, Eslint + Prettier and Next-Theme..",
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
		}
	);

	try {
		s.start("Initializing Project");

		await setTimeout(3000);

		s.stop("Project initialized successfully!");
	} catch (error) {
		terminal.note(`Error: ${error}`, "Project Initialization Failed");
		process.exit(1);
	}

	if (project.install) {
		try {
			s.start(`Installing Packages via ${project.choosePackageManager}`);

			await setTimeout(2000);

			s.stop("Packages Installed Successfully..");
		} catch (error) {
			terminal.note(`Error: ${error}`, "Package Installation Failed");
			process.exit(1);
		}
	}

	try {
		s.start("Initializing Git");

		await setTimeout(2000);

		s.stop("Git initialized");
	} catch (error) {
		terminal.note(`Error: ${error}`, "Git Initialization Failed");
		process.exit(1);
	}

	const nextSteps = `cd ${project.name}\n${project.install ? "" : `${project.choosePackageManager} install\n`}${project.choosePackageManager} dev`;

	terminal.note(nextSteps, "Next steps.");

	terminal.outro(`Problems? ${color.underline(color.cyan("https://github.com/silver-radium/create-radium/issues"))}`);

	process.exit(0);
}

createRadium().catch((err) => {
	console.error("Unhandled Error:", err);
	process.exit(1);
});
