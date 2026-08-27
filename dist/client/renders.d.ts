import type { RenderRequest } from "./types";
import type { PrinthubSdkDependencies } from "./core";
export type RenderDiagnostic = {
    code: string;
    message: string;
    severity: "warning" | "error" | string;
    element_id?: string | null;
    leaf_alias?: string | null;
    actual_lines?: number | null;
    max_lines?: number | null;
};
export declare const createRendersClient: ({ generated, config }: PrinthubSdkDependencies) => {
    renderZpl: (body: RenderRequest) => Promise<{
        zpl: string;
        diagnostics?: import("../generated/schema").components["schemas"]["RenderDiagnostic"][];
    }>;
    renderPng: (body: RenderRequest) => Promise<Blob>;
    renderPngDetailed: (body: RenderRequest) => Promise<{
        blob: Blob;
        diagnostics: RenderDiagnostic[];
    }>;
};
//# sourceMappingURL=renders.d.ts.map