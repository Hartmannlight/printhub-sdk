import type { PrintZplRequest, PrinterRegistrationRequest, PrinterSettingsRequest } from "./types";
import type { PrinthubSdkDependencies } from "./core";
export declare const createPrintersClient: ({ generated }: PrinthubSdkDependencies) => {
    list: () => Promise<{
        config_version: number;
        printers: {
            [key: string]: unknown;
        }[];
        default_printer_id?: string | null;
    }>;
    register: (body: PrinterRegistrationRequest) => Promise<Record<string, unknown>>;
    getConfiguration: (printerId: string) => Promise<Record<string, unknown>>;
    updateSettings: (printerId: string, body: PrinterSettingsRequest) => Promise<Record<string, unknown>>;
    importConfiguration: (body: Record<string, unknown>) => Promise<{
        config_version: number;
        printers: {
            [key: string]: unknown;
        }[];
        default_printer_id?: string | null;
    }>;
    discover: (baseUrl?: string) => Promise<Record<string, unknown>>;
    get: (printerId: string) => Promise<Record<string, unknown>>;
    upsert: (printerId: string, body: Record<string, unknown>) => Promise<{
        config_version: number;
        printers: {
            [key: string]: unknown;
        }[];
        default_printer_id?: string | null;
    }>;
    getStatus: (printerId: string) => Promise<{
        printer_id: string;
        raw: {
            [key: string]: string;
        };
        parsed: {
            [key: string]: unknown;
        };
        normalized: {
            [key: string]: unknown;
        };
    }>;
    printZpl: (printerId: string, body: PrintZplRequest) => Promise<{
        printer_id: string;
        bytes_sent: number;
        preview_png_base64?: string | null;
        job_id?: string | null;
        job_state?: string | null;
    }>;
};
//# sourceMappingURL=printers.d.ts.map