import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { createPrinthubGeneratedClient } from "../src/generated/runtime.ts";

test("generated POST requests preserve their JSON content type", async () => {
  let request;
  const client = createPrinthubGeneratedClient({
    baseUrl: "http://printhub.test",
    fetch: async (input) => {
      request = input;
      return new Response(JSON.stringify({ id: "job-1", status: "sent" }), {
        status: 202,
        headers: { "Content-Type": "application/json" },
      });
    },
  });

  const body = {
    printer_id: "virtual-zebra",
    template_id: "briefadresse",
    variables: { address: "Max Mustermann\nMusterweg 1\n12345 Musterstadt" },
  };
  await client.POST("/v1/print-jobs", { body });

  assert.equal(request.headers.get("Content-Type"), "application/json");
  assert.deepEqual(JSON.parse(await request.text()), body);
});

test("printer client exposes only PrintHub read models", () => {
  return readFile(new URL("../src/client/printers.ts", import.meta.url), "utf8").then((source) => {
    assert.match(source, /list:/);
    assert.match(source, /get:/);
    assert.doesNotMatch(source, /register:|updateSettings:|discover:|getStatus:|printZpl:/);
  });
});

test("published contract excludes physical printer administration", async () => {
  const contract = JSON.parse(
    await readFile(new URL("../openapi/printhub-openapi.json", import.meta.url), "utf8"),
  );
  const paths = contract.paths;
  const retired = [
    "/v1/printers/{printer_id}/prints/zpl",
    "/v1/printers/{printer_id}/status",
    "/v1/printers/{printer_id}/configuration",
    "/v1/printers/register",
    "/v1/printer-registry/export",
    "/v1/printer-registry/import",
    "/v1/zebra-tamer/agents",
    "/v1/zebra-tamer/discover",
  ];

  assert.deepEqual(Object.keys(paths["/v1/printers"]), ["get"]);
  assert.deepEqual(Object.keys(paths["/v1/printers/{printer_id}"]), ["get"]);
  retired.forEach((path) => assert.equal(paths[path], undefined));
});
