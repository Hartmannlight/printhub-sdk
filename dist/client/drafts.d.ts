import type { PrintDraftCreateRequest } from "./types";
import type { PrinthubSdkDependencies } from "./core";
export declare const createDraftsClient: ({ generated }: PrinthubSdkDependencies) => {
    create: (body: PrintDraftCreateRequest) => Promise<{
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
//# sourceMappingURL=drafts.d.ts.map