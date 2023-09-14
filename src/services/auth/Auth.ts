import BaseService from '../../BaseService';

import { RevokeRequest } from './models/RevokeRequest';

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
}
