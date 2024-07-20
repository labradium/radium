import { $ } from "bun";

await $`rm -rf dist node_modules bun.lockb`.quiet();
