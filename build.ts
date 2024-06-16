import * as fs from "fs";
import * as path from "path";

async function copyDirectory(src: string, dest: string) {
  await fs.promises.mkdir(dest, { recursive: true });

  const entries = await fs.promises.readdir(src, { withFileTypes: true });

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

copyDirectory("./templates", "./dist/templates").then(() => {
  console.log("Templates Copied to dist/templates");
});
