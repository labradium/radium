import fs from "fs";
import path from "path";

export async function updatePackageJson(
  projectPath: string,
  projectName: string,
): Promise<void> {
  const packageJsonPath = path.resolve(
    process.cwd(),
    projectPath,
    "package.json",
  );
  if (!fs.existsSync(packageJsonPath)) {
    throw new Error(`package.json not found in ${packageJsonPath}`);
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  packageJson.name = projectName;

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}
