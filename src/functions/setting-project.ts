import * as fs from "fs-extra";
// import { getPath } from "@/functions/utils";
import * as path from "node:path";

export async function addBiome(projectPath: string): Promise<void> {
  // const biomePath = path.join(getPath("lib"), "extras", "biome", "biome.json");
  const biomePath = path.join(process.cwd(), "lib", "extras", "biome", "biome.json");
  const pkgPath = path.join(projectPath, "package.json");
  const pkg = JSON.parse(await fs.readFile(pkgPath, "utf-8"));

  pkg.scripts = {
    ...pkg.scripts,
    lint: "biome lint --write .",
    format: "biome format --write .",
  };

  pkg.devDependencies = {
    ...pkg.devDependencies,
    "@biomejs/biome": "^1.8.3",
  };

  await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2));
  await fs.createFile(path.join(projectPath, "biome.json"));
  await fs.copy(biomePath, path.join(projectPath, "biome.json"));
}

export async function addShadcnUI(projectPath: string): Promise<void> {
  // const shadcnUIPath = path.join(getPath("lib"), "extras", "shadcn");
  const shadcnUIPath = path.join(process.cwd(), "lib", "extras", "shadcn");
  const pkgPath = path.join(projectPath, "package.json");
  const pkg = JSON.parse(await fs.readFile(pkgPath, "utf-8"));

  pkg.scripts = {
    ...pkg.scripts,
    "ui:add": "bunx shadcn-ui@latest add",
  };

  pkg.dependencies = {
    ...pkg.dependencies,
    "tailwind-merge": "^2.4.0",
    "tailwindcss-animate": "^1.0.7",
    "@radix-ui/react-icons": "^1.3.0",
    "@radix-ui/react-label": "^2.1.0",
    "class-variance-authority": "^0.7.0",
    clsx: "^2.1.1",
  };

  await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2));
  await fs.copy(shadcnUIPath, path.join(projectPath));
}

export async function addTheme(projectPath: string): Promise<void> {
  // const themePath = path.join(getPath("lib"), "extras", "theme");
  const themePath = path.join(process.cwd(), "lib", "extras", "theme");
  const pkgPath = path.join(projectPath, "package.json");
  const pkg = JSON.parse(await fs.readFile(pkgPath, "utf-8"));

  pkg.dependencies = {
    ...pkg.dependencies,
    "next-themes": "^0.3.0",
  };

  await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2));
  await fs.copy(themePath, path.join(projectPath));
}
