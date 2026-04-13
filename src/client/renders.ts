import type { RenderRequest, RenderResponse } from "./types";
import type { PrinthubSdkDependencies } from "./core";
import { unwrap } from "./core";

const normalizeBaseUrl = (baseUrl: string) => baseUrl.replace(/\/+$/, "");

export const createRendersClient = ({ generated, config }: PrinthubSdkDependencies) => ({
  renderZpl: (body: RenderRequest) => unwrap<RenderResponse>(generated.POST("/v1/renders/zpl", { body })),
  renderPng: async (body: RenderRequest) => {
    const response = await (config.fetch ?? fetch)(`${normalizeBaseUrl(config.baseUrl)}/v1/renders/png`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "image/png",
        ...(config.headers ?? {}),
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error((await response.text()) || response.statusText);
    }
    return response.blob();
  },
});
