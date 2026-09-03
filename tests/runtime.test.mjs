import assert from "node:assert/strict";
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
