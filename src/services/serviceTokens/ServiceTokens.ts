import BaseService from '../../BaseService';

import { ServiceTokensListResponse } from './models/ServiceTokensListResponse';
import { ServiceTokensCreateResponse } from './models/ServiceTokensCreateResponse';
import { ServiceTokensCreateRequest } from './models/ServiceTokensCreateRequest';
import { DeleteResponse } from '../common/DeleteResponse';
import { ServiceTokensDeleteRequest } from './models/ServiceTokensDeleteRequest';

import { serializeQuery } from '../../http/QuerySerializer';

export class ServiceTokensService extends BaseService {
  /**
   * @summary List
   * @description Service Tokens

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @returns {Promise<ServiceTokensListResponse>} - The promise with the result
   */
  async list(project: string, config: string): Promise<ServiceTokensListResponse> {
    if (project === undefined || config === undefined) {
      throw new Error(
        'The following are required parameters: project,config, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    if (config) {
      queryParams.push(serializeQuery('form', true, 'config', config));
    }
    const urlEndpoint = '/v3/configs/config/tokens';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ServiceTokensListResponse;
    return responseModel;
  }

  /**
   * @summary Create
   * @description Service Token

   * @returns {Promise<ServiceTokensCreateResponse>} - The promise with the result
   */
  async create(input: ServiceTokensCreateRequest): Promise<ServiceTokensCreateResponse> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/tokens';
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
    const responseModel = response.data as ServiceTokensCreateResponse;
    return responseModel;
  }

  /**
   * @summary Delete
   * @description Service Token

   * @returns {Promise<DeleteResponse>} - The promise with the result
   */
  async delete(input: ServiceTokensDeleteRequest): Promise<DeleteResponse> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/tokens/token';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.httpClient.delete(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as DeleteResponse;
    return responseModel;
  }
}
