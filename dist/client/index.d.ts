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
            default_printer_id?: string | null;
        }>;
        get: (printerId: string) => Promise<Record<string, unknown>>;
    };
    printJobs: {
        list: (limit?: number) => Promise<{
            id: string;
            status: string;
            printer_id: string;
            template_id?: string | null;
            source_kind: string;
            page_count?: number | null;
            attempts: number;
            bytes_sent?: number | null;
            downstream_job_id?: string | null;
            downstream_job_state?: string | null;
            preview_png_base64?: string | null;
            warning?: string | null;
            error?: string | null;
            created_at: string;
            updated_at: string;
        }[]>;
        get: (jobId: string) => Promise<{
            id: string;
            status: string;
            printer_id: string;
            template_id?: string | null;
            source_kind: string;
            page_count?: number | null;
            attempts: number;
            bytes_sent?: number | null;
            downstream_job_id?: string | null;
            downstream_job_state?: string | null;
            preview_png_base64?: string | null;
            warning?: string | null;
            error?: string | null;
            created_at: string;
            updated_at: string;
        }>;
        create: (body: import("./types").PrintJobCreateRequest) => Promise<{
            id: string;
            status: string;
            printer_id: string;
            template_id?: string | null;
            source_kind: string;
            page_count?: number | null;
            attempts: number;
            bytes_sent?: number | null;
            downstream_job_id?: string | null;
            downstream_job_state?: string | null;
            preview_png_base64?: string | null;
            warning?: string | null;
            error?: string | null;
            created_at: string;
            updated_at: string;
        }>;
        createRaster: (body: import("./types").RasterPrintJobCreateRequest) => Promise<{
            id: string;
            status: string;
            printer_id: string;
            template_id?: string | null;
            source_kind: string;
            page_count?: number | null;
            attempts: number;
            bytes_sent?: number | null;
            downstream_job_id?: string | null;
            downstream_job_state?: string | null;
            preview_png_base64?: string | null;
            warning?: string | null;
            error?: string | null;
            created_at: string;
            updated_at: string;
        }>;
        createDocument: (body: import("./types").DocumentPrintJobCreateRequest) => Promise<{
            id: string;
            status: string;
            printer_id: string;
            template_id?: string | null;
            source_kind: string;
            page_count?: number | null;
            attempts: number;
            bytes_sent?: number | null;
            downstream_job_id?: string | null;
            downstream_job_state?: string | null;
            preview_png_base64?: string | null;
            warning?: string | null;
            error?: string | null;
            created_at: string;
            updated_at: string;
        }>;
        release: (jobId: string, body: import("./types").RasterPrintJobReleaseRequest) => Promise<{
            id: string;
            status: string;
            printer_id: string;
            template_id?: string | null;
            source_kind: string;
            page_count?: number | null;
            attempts: number;
            bytes_sent?: number | null;
            downstream_job_id?: string | null;
            downstream_job_state?: string | null;
            preview_png_base64?: string | null;
            warning?: string | null;
            error?: string | null;
            created_at: string;
            updated_at: string;
        }>;
        retry: (jobId: string) => Promise<{
            id: string;
            status: string;
            printer_id: string;
            template_id?: string | null;
            source_kind: string;
            page_count?: number | null;
            attempts: number;
            bytes_sent?: number | null;
            downstream_job_id?: string | null;
            downstream_job_state?: string | null;
            preview_png_base64?: string | null;
            warning?: string | null;
            error?: string | null;
            created_at: string;
            updated_at: string;
        }>;
    };
    renders: {
        renderZpl: (body: import("./types").RenderRequest) => Promise<{
            zpl: string;
            diagnostics?: import("../generated/schema").components["schemas"]["RenderDiagnostic"][];
        }>;
        renderPng: (body: import("./types").RenderRequest) => Promise<Blob>;
        renderPngDetailed: (body: import("./types").RenderRequest) => Promise<{
            blob: Blob;
            diagnostics: import("./renders").RenderDiagnostic[];
        }>;
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