import { ApiResponse, ApiStrategy } from "../../models";

export class Co2ApiStrategy extends ApiStrategy {
  matches(path: string): boolean {
    return path === 'co2';
  }

  getUrl(baseApiUrl: string): string {
    return `${baseApiUrl}/co2-api`;
  }

  parseResponse(response: any): ApiResponse<unknown> {
    // Implement the response parsing logic here
    // This is a placeholder implementation
    return {
      error: null,
      result: [],
    };
  }
}
