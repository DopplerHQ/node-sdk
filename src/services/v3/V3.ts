import BaseService from '../../BaseService';

import { MeResponse } from './models/MeResponse';

export class V3Service extends BaseService {
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
