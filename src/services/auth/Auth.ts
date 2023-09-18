import BaseService from '../../BaseService';

import { RevokeRequest } from './models/RevokeRequest';
import { MeResponse } from './models/MeResponse';

export class AuthService extends BaseService {
  /**
   * @summary Revoke
   * @description Revoke an auth token

   * @returns {Promise<any>} - The promise with the result
   */
  async revoke(input: RevokeRequest): Promise<any> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/auth/revoke';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.httpClient.post(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }

  /**
   * @summary Me
   * @description Get information about a token

   * @returns {Promise<MeResponse>} - The promise with the result
   */
  async me(): Promise<MeResponse> {
    const urlEndpoint = '/v3/me';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as MeResponse;
    return responseModel;
  }
}
