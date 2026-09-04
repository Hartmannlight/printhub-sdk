import { unwrap } from "./core";
export const createPrintJobsClient = ({ generated }) => ({
    list: (limit = 50) => unwrap(generated.GET("/v1/print-jobs", { params: { query: { limit } } })),
    get: (jobId) => unwrap(generated.GET("/v1/print-jobs/{job_id}", { params: { path: { job_id: jobId } } })),
    create: (body) => unwrap(generated.POST("/v1/print-jobs", { body })),
    createRaster: (body) => unwrap(generated.POST("/v1/print-jobs/raster", { body })),
    release: (jobId, body) => unwrap(generated.POST("/v1/print-jobs/{job_id}/release", {
        params: { path: { job_id: jobId } },
        body,
    })),
    retry: (jobId) => unwrap(generated.POST("/v1/print-jobs/{job_id}/retry", { params: { path: { job_id: jobId } } })),
});
//# sourceMappingURL=printJobs.js.map