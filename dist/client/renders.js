import { PrinthubApiError } from "./core";
const normalizeBaseUrl = (baseUrl) => baseUrl.replace(/\/+$/, "");
const parseDiagnostics = (value) => {
    if (!value)
        return [];
    try {
        const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
        return JSON.parse(atob(base64));
    }
    catch {
        return [];
    }
};
export const createRendersClient = ({ config }) => {
    const renderZpl = async (body) => {
        const response = await (config.fetch ?? fetch)(`${normalizeBaseUrl(config.baseUrl)}/v1/renders/zpl`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                ...(config.headers ?? {}),
            },
            body: JSON.stringify(body),
        });
        const payload = await response.json().catch(() => undefined);
        if (!response.ok) {
            const detail = payload && "detail" in payload ? payload.detail : undefined;
            const message = typeof detail === "string" ? detail : response.statusText || "Request failed";
            throw new PrinthubApiError(response.status, message, detail);
        }
        return payload;
    };
    const renderPngDetailed = async (body) => {
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
        renderPng: async (body) => (await renderPngDetailed(body)).blob,
        renderPngDetailed,
    };
};
//# sourceMappingURL=renders.js.map