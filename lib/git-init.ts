import * as path from "path";
import { runCommand } from "../helpers/run-command";

export async function gitInit(directory: string): Promise<void> {
  const resolvedPath = path.resolve(directory);

  await runCommand("git", ["init"], resolvedPath);
  await runCommand("git", ["checkout", "-b", "main"], resolvedPath);
  await runCommand("git", ["add", "."], resolvedPath);
  await runCommand("git", ["commit", "-m", "init"], resolvedPath);
}
