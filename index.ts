#!/usr/bin/env node

import * as terminal from "@clack/prompts";
import path from "node:path";
import color from "picocolors";
import { setTimeout } from "node:timers/promises";
import { getTemplate } from "@/functions/download-template";
import { gitInit } from "@/functions/git-init";
import { packageInstall } from "@/functions/package-install";
import { modifyProject, updatePackageJson } from "@/functions/modify-project";

const s = terminal.spinner();

async function createRadium() {
	console.clear();

	terminal.intro(`${color.bgCyan(color.black(" Initialize New Project With Radium, Let's Get Started! "))}`);

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
			typeNote: () => {
				terminal.note("We use TypeScript by default..", "For Type Safety");
			},
			chooseAddOn: () =>
				terminal.select({
					message: "Choose Linter and Formatter",
					initialValue: "biomejs",
					options: [
						{
							value: "biomejs",
							label: "Biome.js Linter and Formatter - Powered by Rust (Recommended)",
						},
						{
							value: "eslint-prettier",
							label: "Eslint + Prettier",
						},
					],
				}),
			choosePackageManager: () =>
				terminal.select({
					message: "Choose Package Manager",
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
			depInstall: () =>
				terminal.confirm({
					message: "Install dependencies?",
					initialValue: true,
				}),
			gitInit: () =>
				terminal.confirm({
					message: "Initialize Git?",
					initialValue: true,
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

		await getTemplate(project.name, "library/base");

		if (project.chooseAddOn === "eslint-prettier") {
			const projDir = path.resolve(process.cwd(), project.name);
			modifyProject(projDir);
			await getTemplate(projDir, "library/addon");
		}

		await updatePackageJson(path.resolve(process.cwd(), project.name), project.name);

		await setTimeout(3000);
		s.stop("Project initialized successfully!");
	} catch (error) {
		terminal.note(`Error: ${error}`, "Project Initialization Failed");
		process.exit(1);
	}

	if (project.depInstall) {
		try {
			s.start(`Installing Packages via ${project.choosePackageManager}`);

			await setTimeout(2000);
			await packageInstall(project.name, project.choosePackageManager);

			s.stop("Packages Installed Successfully..");
		} catch (error) {
			terminal.note(`Error: ${error}`, "Package Installation Failed");
			process.exit(1);
		}
	}

	if (project.gitInit) {
		try {
			s.start("Initializing Git");

			await setTimeout(2000);
			await gitInit(path.resolve(process.cwd(), project.name));

			s.stop("Git initialized");
		} catch (error) {
			terminal.note(`Error: ${error}`, "Git Initialization Failed");
			process.exit(1);
		}
	}

	const nextSteps = `cd ${project.name}\n${project.depInstall ? "" : `${project.choosePackageManager} install\n`}${project.choosePackageManager} dev`;

	terminal.note(nextSteps, "Next steps.");

	terminal.outro(`Problems? ${color.underline(color.cyan("https://github.com/silver-radium/create-radium/issues"))}`);

	process.exit(0);
}

createRadium().catch((err) => {
	console.error("Unhandled Error:", err);
	process.exit(1);
});
