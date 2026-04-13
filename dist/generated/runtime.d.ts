import type { paths } from "./schema";
export type PrinthubSdkConfig = {
    baseUrl: string;
    fetch?: typeof globalThis.fetch;
    headers?: HeadersInit;
    timeoutMs?: number;
};
export type PrinthubGeneratedClient = ReturnType<typeof createPrinthubGeneratedClient>;
export declare const createPrinthubGeneratedClient: (config: PrinthubSdkConfig) => import("openapi-fetch").Client<paths, `${string}/${string}`>;
//# sourceMappingURL=runtime.d.ts.map