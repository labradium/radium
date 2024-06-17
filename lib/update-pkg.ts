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

  try {
    const packageJson = JSON.parse(
      await fs.promises.readFile(packageJsonPath, "utf-8"),
    );
    packageJson.name = projectName;

    await fs.promises.writeFile(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2),
    );
    console.log(`package.json updated with project name: ${projectName}`);
  } catch (error) {
    console.error("Failed to update package.json:", error);
    throw error;
  }
}
