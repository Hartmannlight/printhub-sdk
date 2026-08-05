import { unwrap } from "./core";
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
export const createRendersClient = ({ generated, config }) => {
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
        renderZpl: (body) => unwrap(generated.POST("/v1/renders/zpl", { body })),
        renderPng: async (body) => (await renderPngDetailed(body)).blob,
        renderPngDetailed,
    };
};
//# sourceMappingURL=renders.js.map