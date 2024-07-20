import { $ } from "bun";

await $`rm -rf dist`.quiet();
