import type { TemplateSaveRequest } from "./types";
import type { PrinthubSdkDependencies } from "./core";
export declare const createTemplatesClient: ({ generated, config }: PrinthubSdkDependencies) => {
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
    create: (body: TemplateSaveRequest) => Promise<{
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
    update: (templateId: string, body: TemplateSaveRequest) => Promise<{
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
//# sourceMappingURL=templates.d.ts.map