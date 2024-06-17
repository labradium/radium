import * as fs from "fs";
import * as path from "path";

export async function copyDirectory(src: string, dest: string) {
  const srcDirPath = path.resolve(src);

  if (await fs.promises.exists(dest)) {
    console.log("Directory already exists:", dest);
  } else {
    await fs.promises.mkdir(dest);

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
