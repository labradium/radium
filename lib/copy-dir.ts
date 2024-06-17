import * as fs from "fs";
import * as path from "path";

async function pathExists(p: string): Promise<boolean> {
  try {
    await fs.promises.access(p);
    return true;
  } catch {
    return false;
  }
}

export async function copyDirectory(src: string, dest: string): Promise<void> {
  const srcDirPath = path.resolve(src);

  if (await pathExists(dest)) {
    console.log("Directory already exists:", dest);
  } else {
    await fs.promises.mkdir(dest, { recursive: true });

    const entries = await fs.promises.readdir(srcDirPath, {
      withFileTypes: true,
    });

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        await copyDirectory(srcPath, destPath);
      } else {
        await fs.promises.copyFile(srcPath, destPath);
      }
    }
  }
}
