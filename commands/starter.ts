import * as terminal from "@clack/prompts";
import * as color from "picocolors";
import { setTimeout } from "node:timers/promises";
import { packageInstall } from "@/functions/package-install";
import { downloadDirectory } from "@/functions/get-template";
import { repoInfo } from "@/functions/repo-info";

const s = terminal.spinner();

export async function Starter() {
	console.clear();
	terminal.intro(`${color.bgCyan(color.black(" Initialize New Project With Starter Template, Let's Get Started! "))}`);

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
			repoUrl: () =>
				terminal.text({
					message: "Paste the url of the starter template github repository..",
					placeholder: "https://github.com/silver-radium/templates/tree/main/next/next-general",
					validate: (value) => {
						if (value.length === 0) return "Repository url is required!";
					},
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
			gitInit: () =>
				terminal.confirm({
					message: "Initialize Git?",
					initialValue: true,
				}),
			depInstall: () =>
				terminal.confirm({
					message: "Install dependencies?",
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

		await setTimeout(2000);
		const { owner, repo, subDir } = repoInfo(project.repoUrl);
		await downloadDirectory(owner, repo, subDir, project.name);
		s.stop("Project initialized successfully!");
	} catch (error) {
		terminal.note(`Error: ${error}`, "Project Initialization Failed");
		process.exit(1);
	}

	try {
		if (project.depInstall) {
			s.start(`Installing Packages via ${project.choosePackageManager}`);

			await setTimeout(2000);
			await packageInstall(project.name, project.choosePackageManager);

			s.stop("Packages Installed Successfully..");
		}
	} catch (error) {
		terminal.note(`Error: ${error}`, "Project Initialization Failed");
		process.exit(1);
	}
}
