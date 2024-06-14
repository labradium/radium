import { spawn } from "child_process";

export async function runCommand(
  command: string,
  args: string[],
  directory: string,
): Promise<void> {
  return new Promise((resolve, reject) => {
    const cmd = spawn(command, args, { cwd: directory });

    let stderrOutput = "";

    // Suppressing stdout, but capturing stderr for debugging
    cmd.stdout.on("data", () => {});
    cmd.stderr.on("data", (data) => {
      stderrOutput += data.toString();
    });

    cmd.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with code ${code}: ${stderrOutput}`));
      }
    });

    cmd.on("error", (error) => {
      reject(error);
    });
  });
}
