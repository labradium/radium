import * as fs from "fs-extra";
import * as path from "node:path";
import { getPath } from "../functions/utils";
import { exec } from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(exec);

export async function updatePackageJson(projectPath: string, projectName: string): Promise<void> {
  const packageJsonPath = path.resolve(process.cwd(), projectPath, "package.json");

  const packageJson = JSON.parse(await fs.promises.readFile(packageJsonPath, "utf-8"));

  packageJson.name = projectName;

  await fs.promises.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

export async function copyFiles(projectName: string): Promise<void> {
  const sourceDir = path.join(getPath("lib"), "base");
  // const sourceDir = path.join(process.cwd(), "lib", "base");
  const destinationDir = path.join(process.cwd(), projectName);

  if (!fs.existsSync(sourceDir)) {
    throw new Error(`Source directory does not exist: ${sourceDir}`);
  }

  await fs.ensureDir(destinationDir);

  await fs.copy(sourceDir, destinationDir);
}

export async function packageInstall(projectPath: string, packageManager: string): Promise<void> {
  const fullPath = path.resolve(process.cwd(), projectPath);

  await execAsync(`${packageManager} install`, { cwd: fullPath });
}

export async function gitInit(projectPath: string): Promise<void> {
  const execAsync = promisify(exec);

  const fullPath = path.resolve(process.cwd(), projectPath);

  await fs.access(fullPath);

  await execAsync("git init", { cwd: fullPath });
}
