import { exec } from "child_process";
import path from "path";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function packageInstall(
  projectPath: string,
  packageManager: string,
): Promise<void> {
  const fullPath = path.resolve(process.cwd(), projectPath);
  try {
    await execAsync(`${packageManager} install`, { cwd: fullPath });
    console.log(
      `Dependencies installed using ${packageManager} at ${fullPath}`,
    );
  } catch (error) {
    console.error(`Failed to install packages using ${packageManager}:`, error);
    throw error;
  }
}
