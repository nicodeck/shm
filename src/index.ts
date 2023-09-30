import { serverInstance, createServerInstance } from "./server";

export type { HandlerConfig } from "./types";

export { createMockServer } from "./createMockServer";

export { expectHandlersMatchingRequests } from "./expectHandlersMatchingRequests";

/**
 * Prevent all outgoing network requests
 */
export const installInterceptor = createServerInstance;

export const uninstallInterceptor = () => {
  serverInstance?.dispose();
};

export const resetMockServers = () => {
  serverInstance?.reset();
};
