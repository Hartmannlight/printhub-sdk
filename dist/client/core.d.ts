import type { PrinthubGeneratedClient, PrinthubSdkConfig } from "../generated/runtime";
export declare class PrinthubApiError extends Error {
    status: number;
    detail?: unknown;
    constructor(status: number, message: string, detail?: unknown);
}
export declare const unwrap: <T>(operation: Promise<{
    data?: T;
    error?: unknown;
    response: Response;
}>) => Promise<T>;
export declare const sanitizeQuery: <T extends Record<string, unknown> | undefined>(query: T) => T | undefined;
export type PrinthubSdkDependencies = {
    generated: PrinthubGeneratedClient;
    config: PrinthubSdkConfig;
};
export declare const createPrinthubDependencies: (config: PrinthubSdkConfig) => PrinthubSdkDependencies;
//# sourceMappingURL=core.d.ts.map