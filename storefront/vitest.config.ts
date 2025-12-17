import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const rootDir = fileURLToPath(new URL("./", import.meta.url));

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["lib/**/*.test.ts", "lib/**/*.spec.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(rootDir),
    },
  },
});
