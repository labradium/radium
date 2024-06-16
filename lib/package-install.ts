import * as path from "path";
import { runCommand } from "../helpers/run-command";

export async function packageInstall(
  directory: string,
  packageManager: string,
): Promise<void> {
  const resolvedPath = path.resolve(directory);

  await runCommand(`${packageManager}`, ["i"], resolvedPath);
}
