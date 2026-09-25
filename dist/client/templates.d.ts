import type { TemplateSaveRequest } from "./types";
import type { PrinthubSdkDependencies } from "./core";
export declare const createTemplatesClient: ({ generated, config }: PrinthubSdkDependencies) => {
    list: (query?: {
        tags?: string | null;
    }) => Promise<{
        id: string;
        name: string;
        description: string;
        usage_context: string;
        favorite: boolean;
        archived: boolean;
        tags: string[];
        variables: {
            [key: string]: unknown;
        }[];
        preview_target: {
            [key: string]: unknown;
        };
        preview_available: boolean;
        created_at: string;
        updated_at: string;
    }[]>;
    get: (templateId: string) => Promise<{
        id: string;
        name: string;
        description: string;
        usage_context: string;
        favorite: boolean;
        archived: boolean;
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
        print_defaults: {
            [key: string]: unknown;
        };
        created_at: string;
        updated_at: string;
        preview_warning?: string | null;
    }>;
    create: (body: TemplateSaveRequest) => Promise<{
        id: string;
        name: string;
        description: string;
        usage_context: string;
        favorite: boolean;
        archived: boolean;
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
        print_defaults: {
            [key: string]: unknown;
        };
        created_at: string;
        updated_at: string;
        preview_warning?: string | null;
    }>;
    update: (templateId: string, body: TemplateSaveRequest) => Promise<{
        id: string;
        name: string;
        description: string;
        usage_context: string;
        favorite: boolean;
        archived: boolean;
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
        print_defaults: {
            [key: string]: unknown;
        };
        created_at: string;
        updated_at: string;
        preview_warning?: string | null;
    }>;
    updateMetadata: (templateId: string, body: {
        description?: string;
        usage_context?: string;
        favorite?: boolean;
        archived?: boolean;
        tags?: string[];
    }) => Promise<{
        id: string;
        name: string;
        description: string;
        usage_context: string;
        favorite: boolean;
        archived: boolean;
        tags: string[];
        variables: {
            [key: string]: unknown;
        }[];
        preview_target: {
            [key: string]: unknown;
        };
        preview_available: boolean;
        created_at: string;
        updated_at: string;
    }>;
    getPreview: (templateId: string) => Promise<Blob>;
};
//# sourceMappingURL=templates.d.ts.map