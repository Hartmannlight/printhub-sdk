import { unwrap } from "./core";
export const createDraftsClient = ({ generated }) => ({
    create: (body) => unwrap(generated.POST("/v1/drafts", { body })),
    get: (draftId) => unwrap(generated.GET("/v1/drafts/{draft_id}", { params: { path: { draft_id: draftId } } })),
});
//# sourceMappingURL=drafts.js.map