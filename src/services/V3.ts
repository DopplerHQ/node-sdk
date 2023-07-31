import BaseService from './base';

import { V3Me200Response } from '../models/V3Me200Response';

export default class V3Service extends BaseService {
  /**
   * @summary Me
   * @description Get information about a token

   * @returns {Promise<V3Me200Response.Model>} - The promise with the result
   */
  async me(): Promise<V3Me200Response.Model> {
    const urlEndpoint = '/v3/me';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.http.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as V3Me200Response.Model;
    return responseModel;
  }
}
