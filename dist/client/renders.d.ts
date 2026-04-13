import type { RenderRequest } from "./types";
import type { PrinthubSdkDependencies } from "./core";
export declare const createRendersClient: ({ generated, config }: PrinthubSdkDependencies) => {
    renderZpl: (body: RenderRequest) => Promise<{
        zpl: string;
    }>;
    renderPng: (body: RenderRequest) => Promise<Blob>;
};
//# sourceMappingURL=renders.d.ts.map