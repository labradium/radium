import { getPackages } from "@manypkg/get-packages";

const packages = await getPackages(process.cwd());

packages.packages.map((pkg) => {
	console.log(pkg.packageJson.name);
});
