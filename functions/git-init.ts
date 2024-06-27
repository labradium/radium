import { exec } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";
import fs from "node:fs/promises";
import { error } from "node:console";

const execAsync = promisify(exec);

export async function gitInit(projectPath: string): Promise<void> {
	try {
		const fullPath = path.resolve(process.cwd(), projectPath);

		await fs.access(fullPath);

		try {
			await execAsync("git rev-parse --is-inside-work-tree", { cwd: fullPath });
			console.log("Git repository already initialized.");
			return;
		} catch (error) {
			console.log(error);
		}

		const { stdout, stderr } = await execAsync("git init", { cwd: fullPath });

		if (stderr) {
			console.error("Git initialization warning:", stderr);
		}

		console.log("Git repository initialized successfully.");
		console.log(stdout.trim());
	} catch (error) {
		if (error instanceof Error) {
			if ((error as NodeJS.ErrnoException).code === "ENOENT") {
				console.error(`Error: Directory does not exist: ${projectPath}`);
			} else {
				console.error("Error initializing Git repository:", error.message);
			}
		} else {
			console.error("An unknown error occurred:", error);
		}
		throw error;
	}
}
