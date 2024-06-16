import { exec } from "child_process";
import path from "path";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function gitInit(projectPath: string): Promise<void> {
  const fullPath = path.resolve(process.cwd(), projectPath);
  await execAsync(`git init ${fullPath}`);
}
