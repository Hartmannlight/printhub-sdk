import type { TemplateDetailResponse, TemplateListItem, TemplateSaveRequest } from "./types";
import type { PrinthubSdkDependencies } from "./core";
import { sanitizeQuery, unwrap } from "./core";

const normalizeBaseUrl = (baseUrl: string) => baseUrl.replace(/\/+$/, "");

export const createTemplatesClient = ({ generated, config }: PrinthubSdkDependencies) => ({
  list: (query?: { tags?: string | null }) =>
    unwrap<TemplateListItem[]>(generated.GET("/v1/templates", { params: { query: sanitizeQuery(query) } })),
  get: (templateId: string) =>
    unwrap<TemplateDetailResponse>(
      generated.GET("/v1/templates/{template_id}", { params: { path: { template_id: templateId } } })
    ),
  create: (body: TemplateSaveRequest) => unwrap<TemplateDetailResponse>(generated.POST("/v1/templates", { body })),
  update: (templateId: string, body: TemplateSaveRequest) =>
    unwrap<TemplateDetailResponse>(
      generated.PUT("/v1/templates/{template_id}", { params: { path: { template_id: templateId } }, body })
    ),
  getPreview: async (templateId: string) => {
    const response = await (config.fetch ?? fetch)(
      `${normalizeBaseUrl(config.baseUrl)}/v1/templates/${encodeURIComponent(templateId)}/preview`,
      {
        headers: {
          Accept: "image/png",
          ...(config.headers ?? {}),
        },
      }
    );
    if (!response.ok) {
      throw new Error((await response.text()) || response.statusText);
    }
    return response.blob();
  },
});
