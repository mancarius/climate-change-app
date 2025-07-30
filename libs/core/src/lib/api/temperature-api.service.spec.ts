import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { TemperatureApiService, TemperatureDataResponse } from './temperature-api.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ApplicationRef, provideZonelessChangeDetection } from '@angular/core';

describe('TemperatureApiService', () => {
  let service: TemperatureApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TemperatureApiService,
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    });

    service = TestBed.inject(TemperatureApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with empty temperatures', () => {
    expect(service.temperatures()).toEqual([]);
  });

  it('should have isLoading, error, and status properties', () => {
    expect(service.isLoading).toBeDefined();
    expect(service.error).toBeDefined();
    expect(service.status).toBeDefined();
  });

  it('should load temperatures when load is called', async () => {
    const httpMock: HttpTestingController = TestBed.inject(
      HttpTestingController
    );
    const mockResponse: TemperatureDataResponse = {
      error: null,
      result: [{ time: '2020.01', station: 1, land: 1 }]
    };

    service.load();

    // This will trigger the http request
    TestBed.tick();

    // expectation + flushing mock response
    httpMock
      .expectOne(service['_resourceUrl'])
      .flush(mockResponse);

    // Waiting for the app to stabilise = resource to resolve
    await TestBed.inject(ApplicationRef).whenStable();

    expect(service.status()).toBe('resolved');

    expect(service.temperatures()).toBe(mockResponse.result);

    httpMock.verify();
  });
});
