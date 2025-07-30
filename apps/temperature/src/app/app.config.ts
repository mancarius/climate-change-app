import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import {
  provideHttpClient,
  withFetch,
  withInterceptors
} from '@angular/common/http';
import { globalWarmingApiInterceptor } from '@core/interceptors';
import { provideGlobalWarmingApi, withApiStrategies, withApiUrl } from '@core/config/global-warming-api.provider';
import { TemperatureApiStrategy } from '@core/config/api-strategies';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        globalWarmingApiInterceptor
      ])
    ),
    provideGlobalWarmingApi(
      withApiUrl('https://global-warming.org/api'),
      withApiStrategies([
        new TemperatureApiStrategy()
      ])
    )
  ],
};
