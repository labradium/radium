import * as fs from "node:fs";

export function getVersion() {
	const pkg = fs.readFileSync("./package.json", "utf8").toString();
	const version = JSON.parse(pkg).version;
	return version;
}
