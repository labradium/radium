import fs from "fs-extra";
import path from "node:path";
import { getPath } from "./get-path";

export async function updatePackageJson(projectPath: string, projectName: string): Promise<void> {
  const packageJsonPath = path.resolve(process.cwd(), projectPath, "package.json");

  const packageJson = JSON.parse(await fs.promises.readFile(packageJsonPath, "utf-8"));

  packageJson.name = projectName;

  await fs.promises.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

export async function copyFiles(projectName: string): Promise<void> {
  const sourceDir = path.join(getPath("src"), "lib", "next");
  const destinationDir = path.join(process.cwd(), projectName);

  if (!fs.existsSync(sourceDir)) {
    throw new Error(`Source directory does not exist: ${sourceDir}`);
  }

  await fs.ensureDir(destinationDir);

  await fs.copy(sourceDir, destinationDir);
}
