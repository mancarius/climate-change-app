import { HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { GLOBAL_WARMING_API_URL } from '../config/global-warming-api.provider';
import { globalWarmingApiInterceptor } from './global-warming-api.interceptor';

const mockGlobalWarmingApiUrl = 'mock-global-warming-api.com';

describe('globalWarmingApiInterceptor', () => {
  const interceptor = (req: HttpRequest<unknown>, next: any) =>
    TestBed.runInInjectionContext(() => globalWarmingApiInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: GLOBAL_WARMING_API_URL, useValue: mockGlobalWarmingApiUrl }
      ]
    });
  });

  it('should modify the URL for a valid global warming API call', () => {
    const req = new HttpRequest('GET', 'api/temperature');
    const next = vi.fn();

    interceptor(req, next);

    expect(next).toHaveBeenCalledWith(expect.objectContaining({
      url: `https://${mockGlobalWarmingApiUrl}/temperature-api`
    }));
  });

  it('should not modify the URL for a non-global warming API call', () => {
    const req = new HttpRequest('GET', 'other-api/temperature');
    const next = vi.fn();

    interceptor(req, next);

    expect(next).toHaveBeenCalledWith(req);
  });

  it('should not modify the URL for an invalid path', () => {
    const req = new HttpRequest('GET', 'api/unknown-path');
    const next = vi.fn();

    interceptor(req, next);

    expect(next).toHaveBeenCalledWith(req);
  });
});
