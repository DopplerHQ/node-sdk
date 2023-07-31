import HTTPClient from '../http/HTTPClient';
import { Environment } from '../http/Environment';
import HTTPLibrary from '../http/HTTPLibrary';

export default class BaseService {
  private userAgent: string = 'liblab/0.1.11 DopplerSDK/1.0.1 typescript/5.1.6';

  public baseUrl: string = Environment.DEFAULT;

  public http = new HTTPLibrary(this.userAgent) as HTTPClient;

  private bearer: string = '';

  setToken(bearer: string): void {
    this.bearer = bearer;
  }

  getAuthorizationHeader(): object {
    const auth = { Authorization: `Bearer ${this.bearer}` };

    return { ...auth };
  }

  setBaseUrl(url: string): void {
    this.baseUrl = url;
  }

  constructor(bearerToken: string = '') {
    this.setToken(bearerToken);
  }

  static patternMatching(value: string, pattern: string, variableName: string): string {
    if (!value) {
      throw new Error(`${variableName} cannot be null or undefined`);
    }
    if (!value.match(new RegExp(pattern))) {
      throw new Error(`Invalid value for ${variableName}: must match ${pattern}`);
    }
    return value;
  }

  static urlEncode = (input: { [key: string]: any }): string =>
    Object.keys(input)
      .map((key) => `${key}=${encodeURIComponent(input[key])}`)
      .join('&');
}
