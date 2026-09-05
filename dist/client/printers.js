import { unwrap } from "./core";
export const createPrintersClient = ({ generated }) => ({
    list: () => unwrap(generated.GET("/v1/printers")),
    get: (printerId) => unwrap(generated.GET("/v1/printers/{printer_id}", { params: { path: { printer_id: printerId } } })),
});
//# sourceMappingURL=printers.js.map