import BaseService from './base';

import { MeResponse } from '../models/MeResponse';

import { serializeQuery, serializeHeader, serializePath } from '../http/QuerySerializer';

export default class V3Service extends BaseService {
  /**
   * @summary Me
   * @description Get information about a token

   * @returns {Promise<MeResponse.Model>} - The promise with the result
   */
  async me(): Promise<MeResponse.Model> {
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
    const responseModel = response.data as MeResponse.Model;
    return responseModel;
  }
}
