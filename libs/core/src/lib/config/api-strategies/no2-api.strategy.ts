import { ApiResponse, ApiStrategy } from '../../models';

export class No2ApiStrategy extends ApiStrategy {
  matches(path: string): boolean {
    return path === 'no2';
  }

  getUrl(baseApiUrl: string): string {
    return `${baseApiUrl}/nitrous-oxide-api`;
  }

  parseResponse?(response: unknown): ApiResponse<unknown> {
    throw new Error('Method not implemented.');
  }
}
