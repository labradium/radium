import { exec } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";
import fs from "node:fs/promises";

export async function gitInit(projectPath: string): Promise<void> {
	const execAsync = promisify(exec);

	const fullPath = path.resolve(process.cwd(), projectPath);

	await fs.access(fullPath);

	const { stdout, stderr } = await execAsync("git init", { cwd: fullPath });

	if (stderr) {
		console.error("Git initialization warning:", stderr);
	}

	console.log("Git repository initialized successfully.");
	console.log(stdout.trim());
}
