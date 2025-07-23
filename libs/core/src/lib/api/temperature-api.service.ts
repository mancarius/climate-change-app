import { computed, Injectable, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { z } from 'zod';
import { TemperatureData, temperatureDataSchema } from '../models/temperature-data.model';

const temperatureDataResponseSchema = z.object({
  error: z.unknown().nullable(),
  result: z.array(temperatureDataSchema),
});

/**
 * Service to fetch temperature data from the API.
 * This service uses the new signal resource API for data fetching.
 */
@Injectable({ providedIn: 'root' })
export class TemperatureApiService {
  private readonly _resourceUrl = '/api/temperature';
  private readonly _resourceUrlSignal = signal(undefined as string | undefined);

  private readonly _temperatureResource = httpResource(
    () => this._resourceUrlSignal(),
    { parse: temperatureDataResponseSchema.parse }
  );

  readonly temperatures = computed<TemperatureData[]>(() => {
    const hasValue = this._temperatureResource.hasValue();
    const value = this._temperatureResource.value();
    return hasValue ? value?.result ?? [] : [];
  });
  readonly isLoading = this._temperatureResource.isLoading;
  readonly error = this._temperatureResource.error;
  readonly status = this._temperatureResource.status;

  load() {
    this._resourceUrlSignal.set(this._resourceUrl);
  }

  reload() {
    this._temperatureResource.reload();
  }
}