import { unwrap } from "./core";
const normalizeBaseUrl = (baseUrl) => baseUrl.replace(/\/+$/, "");
export const createRendersClient = ({ generated, config }) => ({
    renderZpl: (body) => unwrap(generated.POST("/v1/renders/zpl", { body })),
    renderPng: async (body) => {
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
//# sourceMappingURL=renders.js.map