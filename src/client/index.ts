import type { PrinthubSdkConfig } from "../generated/runtime";
import { createPrinthubDependencies, PrinthubApiError } from "./core";
import { createDraftsClient } from "./drafts";
import { createPrintersClient } from "./printers";
import { createPrintJobsClient } from "./printJobs";
import { createRendersClient } from "./renders";
import { createTemplatesClient } from "./templates";

export * from "./core";
export * from "./types";

export const createPrinthubSdk = (config: PrinthubSdkConfig) => {
  const dependencies = createPrinthubDependencies(config);
  return {
    drafts: createDraftsClient(dependencies),
    printers: createPrintersClient(dependencies),
    printJobs: createPrintJobsClient(dependencies),
    renders: createRendersClient(dependencies),
    templates: createTemplatesClient(dependencies),
  };
};

export type PrinthubSdk = ReturnType<typeof createPrinthubSdk>;
export { PrinthubApiError };
