import type { PrintDraftCreateRequest, PrintDraftDetailResponse, PrintDraftResponse } from "./types";
import type { PrinthubSdkDependencies } from "./core";
import { unwrap } from "./core";

export const createDraftsClient = ({ generated }: PrinthubSdkDependencies) => ({
  create: (body: PrintDraftCreateRequest) => unwrap<PrintDraftResponse>(generated.POST("/v1/drafts", { body })),
  get: (draftId: string) =>
    unwrap<PrintDraftDetailResponse>(generated.GET("/v1/drafts/{draft_id}", { params: { path: { draft_id: draftId } } })),
});
