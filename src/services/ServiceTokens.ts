import BaseService from './base';

import { ServiceTokensCreateRequest } from '../models/ServiceTokensCreateRequest';
import { ServiceTokensDeleteRequest } from '../models/ServiceTokensDeleteRequest';
import { ServiceTokensDelete200Response } from '../models/ServiceTokensDelete200Response';

export default class ServiceTokensService extends BaseService {
  /**
   * @summary List
   * @description Service Tokens

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @returns {Promise<any>} - The promise with the result
   */
  async list(project: string, config: string): Promise<any> {
    if (project === undefined || config === undefined) {
      throw new Error(
        'The following are required parameters: project,config, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(`project=${project}`);
    }
    if (config) {
      queryParams.push(`config=${config}`);
    }
    const urlEndpoint = '/v3/configs/config/tokens';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.http.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }

  /**
   * @summary Create
   * @description Service Token

   * @returns {Promise<any>} - The promise with the result
   */
  async create(input: ServiceTokensCreateRequest.Model): Promise<any> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/tokens';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.http.post(
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
   * @summary Delete
   * @description Service Token

   * @returns {Promise<ServiceTokensDelete200Response.Model>} - The promise with the result
   */
  async delete(
    input: ServiceTokensDeleteRequest.Model,
  ): Promise<ServiceTokensDelete200Response.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/tokens/token';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.http.delete(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ServiceTokensDelete200Response.Model;
    return responseModel;
  }
}
