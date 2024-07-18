import { $ } from "bun";

await $`rm -rf dist`;
await $`rm -rf node_modules`;
await $`rm -rf bun.lockb`;
