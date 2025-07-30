import { InjectionToken, ValueProvider } from "@angular/core";
import { ApiStrategy } from "../models";

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
 * Injection token for API strategies.
 */
export const API_STRATEGIES = new InjectionToken<ApiStrategy[]>('API_STRATEGIES', {
  providedIn: 'root',
  factory: () => []
});

export enum GlobalWarmingApiFeatureKind {
  Api,
  Strategy
}

export type GlobalWarmingApiFeature<KindT extends GlobalWarmingApiFeatureKind = GlobalWarmingApiFeatureKind> = {
  kind: KindT;
  providers: ValueProvider[];
}

/**
 * Creates a provider object for the global warming API URL and strategies.
 *
 * @param url - The URL to be used for the global warming API.
 * @param strategies - An array of API strategies to be used.
 * @remarks
 * This function returns an array of provider objects that can be used in the Angular dependency injection system.
 * It allows you to configure the global warming API URL and the strategies that will be used for handling API requests.
 * @returns An array of provider objects containing the API URL and strategies.
 */
export function provideGlobalWarmingApi(...args: GlobalWarmingApiFeature[]) {
  const providers = args.filter(feature => [
    GlobalWarmingApiFeatureKind.Api,
    GlobalWarmingApiFeatureKind.Strategy
  ].includes(feature.kind));

  return providers.flatMap(feature => feature.providers);
}

/**
 * Creates a provider object for the global warming API URL.
 * @param url 
 * @returns 
 */
export function withApiUrl(url: string): GlobalWarmingApiFeature<GlobalWarmingApiFeatureKind.Api> {
  return {
    kind: GlobalWarmingApiFeatureKind.Api,
    providers: [
      {
        provide: GLOBAL_WARMING_API_URL,
        useValue: url
      }
    ]
  }
}

/**
 * Creates a provider object for the API strategies.
 * @param strategies 
 * @returns 
 */
export function withApiStrategies(strategies: ApiStrategy[]): GlobalWarmingApiFeature<GlobalWarmingApiFeatureKind.Strategy> {
  return {
    kind: GlobalWarmingApiFeatureKind.Strategy,
    providers: [
      {
        provide: API_STRATEGIES,
        useValue: strategies
      }
    ]
  }
}