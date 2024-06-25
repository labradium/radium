import fs from "node:fs";
import path from "node:path";

export async function updatePackageJson(projectPath: string, projectName: string): Promise<void> {
	const packageJsonPath = path.resolve(process.cwd(), projectPath, "package.json");

	const packageJson = JSON.parse(await fs.promises.readFile(packageJsonPath, "utf-8"));

	packageJson.name = projectName;

	await fs.promises.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
}
