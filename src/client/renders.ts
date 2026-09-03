import type { RenderRequest, RenderResponse } from "./types";
import type { PrinthubSdkDependencies } from "./core";
import { PrinthubApiError } from "./core";

const normalizeBaseUrl = (baseUrl: string) => baseUrl.replace(/\/+$/, "");

export type RenderDiagnostic = {
  code: string;
  message: string;
  severity: "warning" | "error" | string;
  element_id?: string | null;
  leaf_alias?: string | null;
  actual_lines?: number | null;
  max_lines?: number | null;
};

const parseDiagnostics = (value: string | null): RenderDiagnostic[] => {
  if (!value) return [];
  try {
    const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64)) as RenderDiagnostic[];
  } catch {
    return [];
  }
};

export const createRendersClient = ({ config }: PrinthubSdkDependencies) => {
  const renderZpl = async (body: RenderRequest) => {
    const response = await (config.fetch ?? fetch)(`${normalizeBaseUrl(config.baseUrl)}/v1/renders/zpl`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(config.headers ?? {}),
      },
      body: JSON.stringify(body),
    });
    const payload = await response.json().catch(() => undefined) as RenderResponse | { detail?: unknown } | undefined;
    if (!response.ok) {
      const detail = payload && "detail" in payload ? payload.detail : undefined;
      const message = typeof detail === "string" ? detail : response.statusText || "Request failed";
      throw new PrinthubApiError(response.status, message, detail);
    }
    return payload as RenderResponse;
  };

  const renderPngDetailed = async (body: RenderRequest) => {
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
    return {
      blob: await response.blob(),
      diagnostics: parseDiagnostics(response.headers.get("X-PrintHub-Diagnostics")),
    };
  };

  return {
    renderZpl,
    renderPng: async (body: RenderRequest) => (await renderPngDetailed(body)).blob,
    renderPngDetailed,
  };
};
