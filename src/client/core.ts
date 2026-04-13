import type { PrinthubGeneratedClient, PrinthubSdkConfig } from "../generated/runtime";
import { createPrinthubGeneratedClient } from "../generated/runtime";

export class PrinthubApiError extends Error {
  status: number;
  detail?: unknown;

  constructor(status: number, message: string, detail?: unknown) {
    super(message);
    this.status = status;
    this.detail = detail;
  }
}

export const unwrap = async <T>(
  operation: Promise<{ data?: T; error?: unknown; response: Response }>
): Promise<T> => {
  const { data, error, response } = await operation;
  if (response.ok) {
    return data as T;
  }
  throw new PrinthubApiError(response.status, response.statusText || "Request failed", error);
};

export const sanitizeQuery = <T extends Record<string, unknown> | undefined>(query: T) => {
  if (!query) return undefined;
  return Object.fromEntries(
    Object.entries(query).filter(([, value]) => value !== undefined && value !== null && value !== "")
  ) as T;
};

export type PrinthubSdkDependencies = {
  generated: PrinthubGeneratedClient;
  config: PrinthubSdkConfig;
};

export const createPrinthubDependencies = (config: PrinthubSdkConfig): PrinthubSdkDependencies => ({
  generated: createPrinthubGeneratedClient(config),
  config,
});
