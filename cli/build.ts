import * as fs from "fs-extra";

async function main() {
  await fs.remove("./dist");

  fs.copySync("./lib", "./dist/lib");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
