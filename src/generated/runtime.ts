import createClient from "openapi-fetch";

import type { paths } from "./schema";

export type PrinthubSdkConfig = {
  baseUrl: string;
  fetch?: typeof globalThis.fetch;
  headers?: HeadersInit;
  timeoutMs?: number;
};

export type PrinthubGeneratedClient = ReturnType<typeof createPrinthubGeneratedClient>;

const normalizeBaseUrl = (baseUrl: string) => baseUrl.replace(/\/+$/, "");

export const createPrinthubGeneratedClient = (config: PrinthubSdkConfig) => {
  const wrappedFetch: typeof globalThis.fetch = async (input, init) => {
    const controller = new AbortController();
    const timeoutId =
      config.timeoutMs && config.timeoutMs > 0 ? globalThis.setTimeout(() => controller.abort(), config.timeoutMs) : null;

    // openapi-fetch passes a fully constructed Request here. Starting with an
    // empty Headers object would override and remove its JSON Content-Type.
    const headers = new Headers(input instanceof Request ? input.headers : undefined);
    const initHeaders = new Headers(init?.headers);
    initHeaders.forEach((value, key) => headers.set(key, value));
    if (config.headers) {
      const configuredHeaders = new Headers(config.headers);
      configuredHeaders.forEach((value, key) => headers.set(key, value));
    }

    try {
      return await (config.fetch ?? globalThis.fetch)(input, {
        ...init,
        headers,
        signal: init?.signal ?? controller.signal,
      });
    } finally {
      if (timeoutId !== null) {
        globalThis.clearTimeout(timeoutId);
      }
    }
  };

  const client = createClient<paths>({
    baseUrl: normalizeBaseUrl(config.baseUrl),
    fetch: wrappedFetch,
  });
  return client;
};
