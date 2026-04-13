import { unwrap } from "./core";
export const createPrintersClient = ({ generated }) => ({
    list: () => unwrap(generated.GET("/v1/printers")),
    get: (printerId) => unwrap(generated.GET("/v1/printers/{printer_id}", { params: { path: { printer_id: printerId } } })),
    upsert: (printerId, body) => unwrap(generated.PUT("/v1/printers/{printer_id}", { params: { path: { printer_id: printerId } }, body })),
    getStatus: (printerId) => unwrap(generated.GET("/v1/printers/{printer_id}/status", { params: { path: { printer_id: printerId } } })),
    printZpl: (printerId, body) => unwrap(generated.POST("/v1/printers/{printer_id}/prints/zpl", { params: { path: { printer_id: printerId } }, body })),
    printTemplate: (printerId, body) => unwrap(generated.POST("/v1/printers/{printer_id}/prints/template", { params: { path: { printer_id: printerId } }, body })),
});
//# sourceMappingURL=printers.js.map