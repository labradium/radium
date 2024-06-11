import { defineConfig } from "tsup";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const isDev = process.env.npm_lifecycle_event === "dev";

export default defineConfig({
  clean: true,
  entry: ["src/index.ts"],
  format: ["esm"],
  minify: !isDev,
  target: "esnext",
  outDir: "dist",
  onSuccess: isDev ? "node dist/index.cjs" : undefined,
});
