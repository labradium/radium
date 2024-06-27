import * as fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export function getVersion() {
	const __filename = fileURLToPath(import.meta.url);
	const distPath = path.dirname(__filename);
	const pkgRoot = path.join(distPath, "../");
	const pkgPath = path.join(pkgRoot, "package.json");

	const pkg = fs.readFileSync(pkgPath, "utf8").toString();
	const version = JSON.parse(pkg).version;
	return version;
}
