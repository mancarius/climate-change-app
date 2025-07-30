import { ApiStrategy } from '../../models';

export class MethaneApiStrategy implements ApiStrategy {
  matches(path: string): boolean {
    return path === 'methane';
  }

  getUrl(baseApiUrl: string): string {
    return `${baseApiUrl}/methane-api`;
  }
}
