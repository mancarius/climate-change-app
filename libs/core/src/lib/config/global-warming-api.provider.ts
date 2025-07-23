import { InjectionToken } from "@angular/core";

/**
 * Injection token for the Global Warming API base URL.
 *
 * This token provides the base URL for accessing the global warming API endpoints.
 * It is available at the root level of the application and defaults to `/api/global-warming`.
 *
 * @remarks
 * Use this token to inject the API URL wherever it is required in your services or components.
 *
 * @example
 * ```typescript
 * readonly apiUrl = inject(GLOBAL_WARMING_API_URL);
 * ```
 */
export const GLOBAL_WARMING_API_URL = new InjectionToken<string>(
  'GlobalWarmingApiUrl',
  {
    providedIn: 'root',
    factory: () => 'global-warming.org',
  }
);

/**
 * Creates a provider object for the global warming API URL.
 *
 * @param url - The URL to be used for the global warming API.
 * @returns An object containing the provider token and the specified URL as its value.
 */
export function provideGlobalWarmingApiUrl(url: string) {
  return {
    provide: GLOBAL_WARMING_API_URL,
    useValue: url,
  };
}