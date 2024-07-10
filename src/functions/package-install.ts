import { exec } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";

const execAsync = promisify(exec);

export async function packageInstall(projectPath: string, packageManager: string): Promise<void> {
  const fullPath = path.resolve(process.cwd(), projectPath);

  await execAsync(`${packageManager} install`, { cwd: fullPath });
}
