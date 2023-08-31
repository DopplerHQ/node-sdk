import { RequestOptions } from 'https';

import HTTPClient, { Headers } from './HTTPClient';
import throwHttpError from './httpExceptions';

interface Response {
  status: number;
  headers: any;
  data: string;
}

export default class HTTPLibrary implements HTTPClient {
  readonly userAgentHeader: Headers = {
    'User-Agent': 'liblab/0.1.16 DopplerSDK/1.1.0 typescript/5.1.6',
  };

  readonly retryAttempts: number = 3;

  readonly retryDelayMs: number = 150;

  private static readonly responseMapper: Map<string, string> = new Map<string, string>([
    ['type', 'type_'],
  ]);

  private readonly requestMapper: Map<string, string> = new Map<string, string>([
    ['type_', 'type'],
  ]);

  async get(url: string, input: any, headers: Headers, retry: boolean = false): Promise<any> {
    const request = () =>
      HTTPLibrary.httpRequest(
        'GET',
        url,
        {
          ...headers,
          ...this.getUserAgentHeader(),
          'content-type': 'application/json',
        },
        Object.keys(input).length > 0
          ? JSON.stringify(HTTPLibrary.convertKeysWithMapper(input, this.requestMapper))
          : undefined,
      );

    const response = retry
      ? await this.retry(this.retryAttempts, request, this.retryDelayMs)
      : await request();

    return HTTPLibrary.handleResponse(response);
  }

  async post(url: string, input: any, headers: Headers, retry: boolean = false): Promise<any> {
    const request = () =>
      HTTPLibrary.httpRequest(
        'POST',
        url,
        {
          ...headers,
          ...this.getUserAgentHeader(),
          'content-type': 'application/json',
        },
        JSON.stringify(HTTPLibrary.convertKeysWithMapper(input, this.requestMapper)),
      );

    const response = retry
      ? await this.retry(this.retryAttempts, request, this.retryDelayMs)
      : await request();

    return HTTPLibrary.handleResponse(response);
  }

  async delete(url: string, input: any, headers: Headers, retry: boolean = false): Promise<any> {
    const request = () =>
      HTTPLibrary.httpRequest(
        'DELETE',
        url,
        {
          ...headers,
          ...this.getUserAgentHeader(),
          'content-type': 'application/json',
        },
        JSON.stringify(HTTPLibrary.convertKeysWithMapper(input, this.requestMapper)),
      );

    const response = retry
      ? await this.retry(this.retryAttempts, request, this.retryDelayMs)
      : await request();

    return HTTPLibrary.handleResponse(response);
  }

  async put(url: string, input: any, headers: Headers, retry: boolean = false): Promise<any> {
    const request = () =>
      HTTPLibrary.httpRequest(
        'PUT',
        url,
        {
          ...headers,
          ...this.getUserAgentHeader(),
          'content-type': 'application/json',
        },
        JSON.stringify(HTTPLibrary.convertKeysWithMapper(input, this.requestMapper)),
      );

    const response = retry
      ? await this.retry(this.retryAttempts, request, this.retryDelayMs)
      : await request();

    return HTTPLibrary.handleResponse(response);
  }

  async patch(url: string, input: any, headers: Headers, retry: boolean = false): Promise<any> {
    const request = () =>
      HTTPLibrary.httpRequest(
        'PATCH',
        url,
        {
          ...headers,
          ...this.getUserAgentHeader(),
          'content-type': 'application/json',
        },
        JSON.stringify(HTTPLibrary.convertKeysWithMapper(input, this.requestMapper)),
      );

    const response = retry
      ? await this.retry(this.retryAttempts, request, this.retryDelayMs)
      : await request();

    return HTTPLibrary.handleResponse(response);
  }

  async retry(retries: number, callbackFn: () => any, delay: number = 500): Promise<any> {
    let result: any;

    try {
      result = await callbackFn();

      if (![500, 503, 504].includes(result.status)) {
        return result;
      }
      if (retries > 1) {
        await new Promise((resolve) => setTimeout(resolve, delay)); // eslint-disable-line no-promise-executor-return
        result = await this.retry(retries - 1, callbackFn, delay * 2);
      }
    } catch (e) {
      if (retries > 1) {
        await new Promise((resolve) => setTimeout(resolve, delay)); // eslint-disable-line no-promise-executor-return
        result = await this.retry(retries - 1, callbackFn, delay * 2);
      } else {
        throw e;
      }
    }

    return result;
  }

  private static handleResponse(response: Response) {
    if (response.status >= 400) {
      throwHttpError(response);
    }

    response.data = HTTPLibrary.convertKeysWithMapper(response.data, this.responseMapper);

    return { data: response.data, status: response.status };
  }

  private static async httpRequest(
    method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH',
    url: string,
    headers: {
      [key: string]: string | number;
    },
    body: string = '',
  ): Promise<any> {
    const parsedUrl = new URL(url);
    const isHttps = parsedUrl.protocol === 'https:';
    const options: RequestOptions = {
      method,
      headers,
    };

    const httpModule = isHttps ? await import('https') : await import('http');
    if (isHttps) {
      options.minVersion = 'TLSv1.2';
    }
    return new Promise((resolve, reject) => {
      const req = httpModule.request(url, options, (res: any) => {
        let responseBody = '';
        res.on('data', (chunk: string) => {
          responseBody += chunk;
        });
        res.on('end', () => {
          if (responseBody === '') {
            responseBody = '{}';
          }
          resolve({
            status: res.statusCode,
            headers: res.headers,
            data: JSON.parse(responseBody),
          });
        });
      });
      req.on('error', (error: any) => {
        console.log(error);
        reject(error);
      });
      req.write(body);
      req.end();
    });
  }

  private getUserAgentHeader(): Headers {
    if (typeof window !== 'undefined') {
      return {};
    }
    return this.userAgentHeader;
  }

  /**
   *Converts keys in an object using a provided JSON mapper.
   * @param {any} obj - The object to convert keys for.
   * @param {Object} jsonMapper - The JSON mapper containing key mappings.
   * @returns {any} - The object with converted keys.
   */
  private static convertKeysWithMapper<T>(obj: T, jsonMapper: Map<string, string>): any {
    if (!obj || typeof obj !== 'object') {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map((item) => HTTPLibrary.convertKeysWithMapper(item, jsonMapper));
    }

    const convertedObj: Record<string, any> = {};
    Object.entries(obj).forEach(([key, value]) => {
      if (value) {
        const convertedKey = jsonMapper.get(key) || key;
        convertedObj[convertedKey] = HTTPLibrary.convertKeysWithMapper(value, jsonMapper);
      }
    });

    return convertedObj;
  }
}
