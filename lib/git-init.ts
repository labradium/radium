import { exec } from "child_process";
import path from "path";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function gitInit(projectPath: string): Promise<void> {
  const fullPath = path.resolve(process.cwd(), projectPath);
  try {
    await execAsync(`git init ${fullPath}`);
    console.log(`Git repository initialized at ${fullPath}`);
  } catch (error) {
    console.error("Failed to initialize Git repository:", error);
    throw error;
  }
}
