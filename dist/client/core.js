import { createPrinthubGeneratedClient } from "../generated/runtime";
export class PrinthubApiError extends Error {
    status;
    detail;
    constructor(status, message, detail) {
        super(message);
        this.status = status;
        this.detail = detail;
    }
}
export const unwrap = async (operation) => {
    const { data, error, response } = await operation;
    if (response.ok) {
        return data;
    }
    throw new PrinthubApiError(response.status, response.statusText || "Request failed", error);
};
export const sanitizeQuery = (query) => {
    if (!query)
        return undefined;
    return Object.fromEntries(Object.entries(query).filter(([, value]) => value !== undefined && value !== null && value !== ""));
};
export const createPrinthubDependencies = (config) => ({
    generated: createPrinthubGeneratedClient(config),
    config,
});
//# sourceMappingURL=core.js.map