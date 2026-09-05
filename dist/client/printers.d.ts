import type { PrinthubSdkDependencies } from "./core";
export declare const createPrintersClient: ({ generated }: PrinthubSdkDependencies) => {
    list: () => Promise<{
        config_version: number;
        printers: {
            [key: string]: unknown;
        }[];
        default_printer_id?: string | null;
    }>;
    get: (printerId: string) => Promise<Record<string, unknown>>;
};
//# sourceMappingURL=printers.d.ts.map