import * as fs from "fs";
import * as path from "path";
async function copyDirectory(src, dest) {
    await fs.promises.mkdir(dest, { recursive: true });
    let entries = await fs.promises.readdir(src, { withFileTypes: true });
    for (let entry of entries) {
        let srcPath = path.join(src, entry.name);
        let destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            await copyDirectory(srcPath, destPath);
        }
        else {
            await fs.promises.copyFile(srcPath, destPath);
        }
    }
}
const sourceDir = "./templates";
const destinationDir = "./dist/templates";
copyDirectory(sourceDir, destinationDir)
    .then(() => console.log("Folder copied successfully!"))
    .catch((err) => console.error("Error copying folder:", err));
