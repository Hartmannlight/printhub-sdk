import type { PrintersConfigResponse } from "./types";
import type { PrinthubSdkDependencies } from "./core";
import { unwrap } from "./core";

export const createPrintersClient = ({ generated }: PrinthubSdkDependencies) => ({
  list: () => unwrap<PrintersConfigResponse>(generated.GET("/v1/printers")),
  get: (printerId: string) =>
    unwrap<Record<string, unknown>>(generated.GET("/v1/printers/{printer_id}", { params: { path: { printer_id: printerId } } })),
});
