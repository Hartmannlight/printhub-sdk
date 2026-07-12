import type { PrintJobCreateRequest } from "./types";
import type { PrinthubSdkDependencies } from "./core";
export declare const createPrintJobsClient: ({ generated }: PrinthubSdkDependencies) => {
    list: (limit?: number) => Promise<{
        id: string;
        status: string;
        printer_id: string;
        template_id: string;
        attempts: number;
        bytes_sent?: number | null;
        downstream_job_id?: string | null;
        downstream_job_state?: string | null;
        error?: string | null;
        created_at: string;
        updated_at: string;
    }[]>;
    get: (jobId: string) => Promise<{
        id: string;
        status: string;
        printer_id: string;
        template_id: string;
        attempts: number;
        bytes_sent?: number | null;
        downstream_job_id?: string | null;
        downstream_job_state?: string | null;
        error?: string | null;
        created_at: string;
        updated_at: string;
    }>;
    create: (body: PrintJobCreateRequest) => Promise<{
        id: string;
        status: string;
        printer_id: string;
        template_id: string;
        attempts: number;
        bytes_sent?: number | null;
        downstream_job_id?: string | null;
        downstream_job_state?: string | null;
        error?: string | null;
        created_at: string;
        updated_at: string;
    }>;
    retry: (jobId: string) => Promise<{
        id: string;
        status: string;
        printer_id: string;
        template_id: string;
        attempts: number;
        bytes_sent?: number | null;
        downstream_job_id?: string | null;
        downstream_job_state?: string | null;
        error?: string | null;
        created_at: string;
        updated_at: string;
    }>;
};
//# sourceMappingURL=printJobs.d.ts.map