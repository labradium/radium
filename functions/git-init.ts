import { exec } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";

const execAsync = promisify(exec);

export async function gitInit(projectPath: string): Promise<void> {
	const fullPath = path.resolve(process.cwd(), projectPath);

	await execAsync(`git init ${fullPath}`);
}
