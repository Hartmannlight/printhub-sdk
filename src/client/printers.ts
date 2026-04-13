import type { PrintResponse, PrintTemplateRequest, PrintZplRequest, PrintersConfigResponse, PrinterStatusResponse } from "./types";
import type { PrinthubSdkDependencies } from "./core";
import { unwrap } from "./core";

export const createPrintersClient = ({ generated }: PrinthubSdkDependencies) => ({
  list: () => unwrap<PrintersConfigResponse>(generated.GET("/v1/printers")),
  get: (printerId: string) =>
    unwrap<Record<string, unknown>>(generated.GET("/v1/printers/{printer_id}", { params: { path: { printer_id: printerId } } })),
  upsert: (printerId: string, body: Record<string, unknown>) =>
    unwrap<PrintersConfigResponse>(
      generated.PUT("/v1/printers/{printer_id}", { params: { path: { printer_id: printerId } }, body })
    ),
  getStatus: (printerId: string) =>
    unwrap<PrinterStatusResponse>(
      generated.GET("/v1/printers/{printer_id}/status", { params: { path: { printer_id: printerId } } })
    ),
  printZpl: (printerId: string, body: PrintZplRequest) =>
    unwrap<PrintResponse>(
      generated.POST("/v1/printers/{printer_id}/prints/zpl", { params: { path: { printer_id: printerId } }, body })
    ),
  printTemplate: (printerId: string, body: PrintTemplateRequest) =>
    unwrap<PrintResponse>(
      generated.POST("/v1/printers/{printer_id}/prints/template", { params: { path: { printer_id: printerId } }, body })
    ),
});
