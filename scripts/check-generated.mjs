import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const temporaryDirectory = mkdtempSync(join(tmpdir(), "printhub-sdk-contract-"));
const generatedPath = join(temporaryDirectory, "schema.ts");
const executable = resolve("node_modules", "openapi-typescript", "bin", "cli.js");

try {
  execFileSync(process.execPath, [executable, "openapi/printhub-openapi.json", "-o", generatedPath], {
    stdio: "inherit",
  });
  const expected = readFileSync("src/generated/schema.ts", "utf8").replaceAll("\r\n", "\n");
  const actual = readFileSync(generatedPath, "utf8").replaceAll("\r\n", "\n");
  if (actual !== expected) {
    console.error("Generated schema is stale; run `npm run generate` and commit the result.");
    process.exitCode = 1;
  }
} finally {
  rmSync(temporaryDirectory, { recursive: true, force: true });
}
