import { exec } from "child_process";
import path from "path";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function packageInstall(
  projectPath: string,
  packageManager: string,
) {
  const fullPath = path.resolve(process.cwd(), projectPath);
  await execAsync(`${packageManager} i`, { cwd: fullPath });
}
