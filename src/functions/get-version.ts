import * as fs from "node:fs";
import { getPath } from "@/functions/get-path";

export function getVersion() {
  const pkgPath = getPath("package.json");

  const pkg = fs.readFileSync(pkgPath, "utf8").toString();
  const version = JSON.parse(pkg).version;
  return version;
}
