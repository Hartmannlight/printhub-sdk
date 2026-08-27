import { unwrap } from "./core";
export const createPrintersClient = ({ generated }) => ({
    list: () => unwrap(generated.GET("/v1/printers")),
    register: (body) => unwrap(generated.POST("/v1/printers/register", { body })),
    getConfiguration: (printerId) => unwrap(generated.GET("/v1/printers/{printer_id}/configuration", { params: { path: { printer_id: printerId } } })),
    updateSettings: (printerId, body) => unwrap(generated.PATCH("/v1/printers/{printer_id}", { params: { path: { printer_id: printerId } }, body })),
    importConfiguration: (body) => unwrap(generated.POST("/v1/printer-registry/import", { body })),
    discover: (baseUrl) => baseUrl
        ? unwrap(generated.POST("/v1/zebra-tamer/discover", { body: { base_url: baseUrl } }))
        : unwrap(generated.GET("/v1/zebra-tamer/agents")),
    get: (printerId) => unwrap(generated.GET("/v1/printers/{printer_id}", { params: { path: { printer_id: printerId } } })),
    upsert: (printerId, body) => unwrap(generated.PUT("/v1/printers/{printer_id}", { params: { path: { printer_id: printerId } }, body })),
    getStatus: (printerId) => unwrap(generated.GET("/v1/printers/{printer_id}/status", { params: { path: { printer_id: printerId } } })),
    printZpl: (printerId, body) => unwrap(generated.POST("/v1/printers/{printer_id}/prints/zpl", { params: { path: { printer_id: printerId } }, body })),
    printTemplate: (printerId, body) => unwrap(generated.POST("/v1/printers/{printer_id}/prints/template", { params: { path: { printer_id: printerId } }, body })),
});
//# sourceMappingURL=printers.js.map