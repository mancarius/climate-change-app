import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { API_STRATEGIES, GLOBAL_WARMING_API_URL } from '../config/global-warming-api.provider';
import { map } from 'rxjs';
import { ApiStrategy } from '../models';

/**
 * Interceptor to modify requests for the Global Warming API.
 */
export const globalWarmingApiInterceptor: HttpInterceptorFn = (req, next) => {
  const globalWarmingApiBaseUrl = inject(GLOBAL_WARMING_API_URL);
  const strategies = inject(API_STRATEGIES);
  let strategy: ApiStrategy | undefined;

  const pathSlices = req.url.split('/').filter(Boolean);
  if (pathSlices[0] === 'api' && pathSlices.length === 2) {
    const pathDomain = pathSlices[1];
    strategy = strategies.find((s) => s.matches(pathDomain));

    if (strategy) {
      const newUrl = strategy.getUrl(globalWarmingApiBaseUrl);
      req = req.clone({ url: newUrl });
    }
  }

  return next(req).pipe(
    map(response => response instanceof HttpResponse
      ? parseResponse(response, strategy)
      : response
    )
  );
}

/**
 * Parses the response based on the strategy's parseResponse method.
 * @param response - The HTTP response to parse.
 * @param strategy - The API strategy to use for parsing.
 * @returns The modified response with parsed body if applicable.
 */
function parseResponse(response: HttpResponse<unknown>, strategy?: ApiStrategy) {
  if (strategy && strategy.parseResponse) {
    return response.clone({
      body: strategy.parseResponse(response.body)
    });
  }
  return response;
}