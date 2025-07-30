import { ApiStrategy } from "../../models";

export class ArcticApiStrategy implements ApiStrategy {
  matches(path: string): boolean {
    return path === 'arctic';
  }

  getUrl(baseApiUrl: string): string {
    return `${baseApiUrl}/arctic-api`;
  }
}
