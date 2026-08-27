import type { PrintResponse, PrintTemplateRequest, PrintZplRequest, PrintersConfigResponse, PrinterStatusResponse, PrinterRegistrationRequest, PrinterSettingsRequest } from "./types";
import type { PrinthubSdkDependencies } from "./core";
import { unwrap } from "./core";

export const createPrintersClient = ({ generated }: PrinthubSdkDependencies) => ({
  list: () => unwrap<PrintersConfigResponse>(generated.GET("/v1/printers")),
  register: (body: PrinterRegistrationRequest) =>
    unwrap<Record<string, unknown>>(generated.POST("/v1/printers/register", { body })),
  getConfiguration: (printerId: string) =>
    unwrap<Record<string, unknown>>(generated.GET("/v1/printers/{printer_id}/configuration", { params: { path: { printer_id: printerId } } })),
  updateSettings: (printerId: string, body: PrinterSettingsRequest) =>
    unwrap<Record<string, unknown>>(generated.PATCH("/v1/printers/{printer_id}", { params: { path: { printer_id: printerId } }, body })),
  importConfiguration: (body: Record<string, unknown>) =>
    unwrap<PrintersConfigResponse>(generated.POST("/v1/printer-registry/import", { body })),
  discover: (baseUrl?: string) => baseUrl
    ? unwrap<Record<string, unknown>>(generated.POST("/v1/zebra-tamer/discover", { body: { base_url: baseUrl } }))
    : unwrap<Record<string, unknown>>(generated.GET("/v1/zebra-tamer/agents")),
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
