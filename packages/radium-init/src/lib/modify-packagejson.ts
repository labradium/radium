import * as fs from "fs-extra";
import * as path from "path";

export async function updatePackageJson(dest: string, newName: string) {
  const packageJsonPath = path.join(dest, "package.json");
  if (await fs.pathExists(packageJsonPath)) {
    const packageJson = await fs.readJson(packageJsonPath);

    packageJson.name = newName;

    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
  }
}
