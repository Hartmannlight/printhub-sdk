import type {
  PrintJobCreateRequest,
  PrintJobResponse,
  RasterPrintJobCreateRequest,
  RasterPrintJobReleaseRequest,
} from "./types";
import type { PrinthubSdkDependencies } from "./core";
import { unwrap } from "./core";

export const createPrintJobsClient = ({ generated }: PrinthubSdkDependencies) => ({
  list: (limit = 50) =>
    unwrap<PrintJobResponse[]>(generated.GET("/v1/print-jobs", { params: { query: { limit } } })),
  get: (jobId: string) =>
    unwrap<PrintJobResponse>(generated.GET("/v1/print-jobs/{job_id}", { params: { path: { job_id: jobId } } })),
  create: (body: PrintJobCreateRequest) =>
    unwrap<PrintJobResponse>(generated.POST("/v1/print-jobs", { body })),
  createRaster: (body: RasterPrintJobCreateRequest) =>
    unwrap<PrintJobResponse>(generated.POST("/v1/print-jobs/raster", { body })),
  release: (jobId: string, body: RasterPrintJobReleaseRequest) =>
    unwrap<PrintJobResponse>(generated.POST("/v1/print-jobs/{job_id}/release", {
      params: { path: { job_id: jobId } },
      body,
    })),
  retry: (jobId: string) =>
    unwrap<PrintJobResponse>(generated.POST("/v1/print-jobs/{job_id}/retry", { params: { path: { job_id: jobId } } })),
});
