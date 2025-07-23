import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { GLOBAL_WARMING_API_URL } from '../config/global-warming-api.provider';

const PATH_MAP: { [key: string]: string } = {
  temperature: 'temperature-api',
  co2: 'co2-api',
  methane: 'methane-api',
  no2: 'nitrous-oxide-api',
  arctic: 'arctic-api'
};

export const globalWarmingApiInterceptor: HttpInterceptorFn = (req, next) => {
  const globalWarmingApiBaseUrl = inject(GLOBAL_WARMING_API_URL)

  if (isGlobalWarmingApiCall(req)) {
    // Modify the request URL to point to the global warming API
    const newUrl = `https://${globalWarmingApiBaseUrl}/${getNewPath(req)}`;
    req = req.clone({ url: newUrl });
  }
  return next(req);
};


function isGlobalWarmingApiCall(req: HttpRequest<unknown>): boolean {
  const pathSlices = req.url.split('/');
  return pathSlices[0] === 'api' && pathSlices.length === 2 && Object.prototype.hasOwnProperty.call(PATH_MAP, pathSlices[1]);
}

function getNewPath(req: HttpRequest<unknown>): string {
  const pathSlices = req.url.split('/');
  const pathDomain = pathSlices[1];
  if (pathDomain in PATH_MAP) {
    return PATH_MAP[pathDomain];
  }
  return '';
}