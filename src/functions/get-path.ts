import { fileURLToPath } from "node:url";
import * as path from "node:path";

export function getPath(dir: string): string {
  const __filename = fileURLToPath(import.meta.url);
  const distPath = path.dirname(__filename);
  const pkgRoot = path.join(distPath, "../");
  const pkgPath = path.join(pkgRoot, dir);

  return pkgPath;
}
