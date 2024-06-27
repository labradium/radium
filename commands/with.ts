import { downloadDirectory } from "@/functions/get-template";
import { gitInit } from "@/functions/git-init";
import { packageInstall } from "@/functions/package-install";
import { repoInfo } from "@/functions/repo-info";
import type { Options } from "@/types/options";
import picocolors from "picocolors";

export async function With(options: Options) {
	if (options.url) {
		console.log("Initializing project...");
		const { owner, repo, subDir } = repoInfo(options.url);
		await downloadDirectory(owner, repo, subDir, options.name);
	}

	if (options.git) {
		console.log("Initializing git...");
		await gitInit(options.name);
	}

	if (options.install) {
		console.log("Installing dependencies with", options.install);
		await packageInstall(options.name, options.install);
	}

	console.log(picocolors.green("Project Initialized Successfully!"));
	console.log(picocolors.green("Happy Coding!"));
}
