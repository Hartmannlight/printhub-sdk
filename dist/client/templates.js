import { sanitizeQuery, unwrap } from "./core";
const normalizeBaseUrl = (baseUrl) => baseUrl.replace(/\/+$/, "");
export const createTemplatesClient = ({ generated, config }) => ({
    list: (query) => unwrap(generated.GET("/v1/templates", { params: { query: sanitizeQuery(query) } })),
    get: (templateId) => unwrap(generated.GET("/v1/templates/{template_id}", { params: { path: { template_id: templateId } } })),
    create: (body) => unwrap(generated.POST("/v1/templates", { body })),
    update: (templateId, body) => unwrap(generated.PUT("/v1/templates/{template_id}", { params: { path: { template_id: templateId } }, body })),
    getPreview: async (templateId) => {
        const response = await (config.fetch ?? fetch)(`${normalizeBaseUrl(config.baseUrl)}/v1/templates/${encodeURIComponent(templateId)}/preview`, {
            headers: {
                Accept: "image/png",
                ...(config.headers ?? {}),
            },
        });
        if (!response.ok) {
            throw new Error((await response.text()) || response.statusText);
        }
        return response.blob();
    },
});
//# sourceMappingURL=templates.js.map