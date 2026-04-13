import type { PrinthubSdkConfig } from "../generated/runtime";
import { PrinthubApiError } from "./core";
export * from "./core";
export * from "./types";
export declare const createPrinthubSdk: (config: PrinthubSdkConfig) => {
    drafts: {
        create: (body: import("./types").PrintDraftCreateRequest) => Promise<{
            draft_id: string;
            expires_at: string;
        }>;
        get: (draftId: string) => Promise<{
            draft_id: string;
            template: {
                [key: string]: unknown;
            };
            variables: {
                [key: string]: unknown;
            };
            target: import("../generated/schema").components["schemas"]["RenderTarget"];
            debug: boolean;
            created_at: string;
            expires_at: string;
        }>;
    };
    printers: {
        list: () => Promise<{
            config_version: number;
            printers: {
                [key: string]: unknown;
            }[];
        }>;
        get: (printerId: string) => Promise<Record<string, unknown>>;
        upsert: (printerId: string, body: Record<string, unknown>) => Promise<{
            config_version: number;
            printers: {
                [key: string]: unknown;
            }[];
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
        printZpl: (printerId: string, body: import("./types").PrintZplRequest) => Promise<{
            printer_id: string;
            bytes_sent: number;
            preview_png_base64?: string | null;
        }>;
        printTemplate: (printerId: string, body: import("./types").PrintTemplateRequest) => Promise<{
            printer_id: string;
            bytes_sent: number;
            preview_png_base64?: string | null;
        }>;
    };
    renders: {
        renderZpl: (body: import("./types").RenderRequest) => Promise<{
            zpl: string;
        }>;
        renderPng: (body: import("./types").RenderRequest) => Promise<Blob>;
    };
    templates: {
        list: (query?: {
            tags?: string | null;
        }) => Promise<{
            id: string;
            name: string;
            tags: string[];
            variables: {
                [key: string]: unknown;
            }[];
            preview_target: {
                [key: string]: unknown;
            };
            preview_available: boolean;
        }[]>;
        get: (templateId: string) => Promise<{
            id: string;
            name: string;
            tags: string[];
            variables: {
                [key: string]: unknown;
            }[];
            preview_target: {
                [key: string]: unknown;
            };
            preview_available: boolean;
            template: {
                [key: string]: unknown;
            };
            sample_data: {
                [key: string]: unknown;
            };
        }>;
        create: (body: import("./types").TemplateSaveRequest) => Promise<{
            id: string;
            name: string;
            tags: string[];
            variables: {
                [key: string]: unknown;
            }[];
            preview_target: {
                [key: string]: unknown;
            };
            preview_available: boolean;
            template: {
                [key: string]: unknown;
            };
            sample_data: {
                [key: string]: unknown;
            };
        }>;
        update: (templateId: string, body: import("./types").TemplateSaveRequest) => Promise<{
            id: string;
            name: string;
            tags: string[];
            variables: {
                [key: string]: unknown;
            }[];
            preview_target: {
                [key: string]: unknown;
            };
            preview_available: boolean;
            template: {
                [key: string]: unknown;
            };
            sample_data: {
                [key: string]: unknown;
            };
        }>;
        getPreview: (templateId: string) => Promise<Blob>;
    };
};
export type PrinthubSdk = ReturnType<typeof createPrinthubSdk>;
export { PrinthubApiError };
//# sourceMappingURL=index.d.ts.map