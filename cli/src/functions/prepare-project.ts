import { default as fs } from "fs-extra";
import { default as path } from "node:path";
import { getPath } from "@/functions/utils";
import { spawn } from "node:child_process";

export async function execCommand(command: string, options: { cwd: string }) {
  return new Promise<void>((resolve, reject) => {
    const process = spawn(command, {
      ...options,
      shell: true,
      stdio: "ignore",
    });

    process.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}: ${command}`));
      }
    });

    process.on("error", (err) => {
      reject(err);
    });
  });
}

export async function updatePackageJson(
  projectPath: string,
  projectName: string
): Promise<void> {
  const packageJsonPath = path.resolve(
    process.cwd(),
    projectPath,
    "package.json"
  );

  const packageJson = JSON.parse(
    await fs.promises.readFile(packageJsonPath, "utf-8")
  );

  packageJson.name = projectName;

  await fs.promises.writeFile(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2)
  );
}

export async function copyFiles(projectName: string): Promise<void> {
  const sourceDir = path.join(getPath("lib"), "base");
  const destinationDir = path.join(process.cwd(), projectName);

  if (!fs.existsSync(sourceDir)) {
    throw new Error(`Source directory does not exist: ${sourceDir}`);
  }

  await fs.ensureDir(destinationDir);
  await fs.copy(sourceDir, destinationDir);

  const gitIgnorePath = path.join(destinationDir, "gitignore");
  const destinationGitIgnorePath = path.join(destinationDir, ".gitignore");

  if (fs.existsSync(gitIgnorePath)) {
    await fs.rename(gitIgnorePath, destinationGitIgnorePath);
  }
}

export async function packageInstall(
  projectPath: string,
  packageManager: string
): Promise<void> {
  const fullPath = path.resolve(process.cwd(), projectPath);

  await execCommand(`${packageManager} install`, { cwd: fullPath });
}

export async function gitInit(projectPath: string): Promise<void> {
  const fullPath = path.resolve(process.cwd(), projectPath);

  await fs.access(fullPath);
  await execCommand("git init", { cwd: fullPath });
}
