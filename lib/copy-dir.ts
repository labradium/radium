import fs from "fs";
import ncp from "ncp";
import { promisify } from "util";

const copy = promisify(ncp);

export async function copyDirectory(
  source: string,
  destination: string,
): Promise<void> {
  if (!fs.existsSync(source)) {
    throw new Error(`Source directory does not exist: ${source}`);
  }

  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  await copy(source, destination);
}
