import BaseService from './base';

import { ListResponse } from '../models/ListResponse';
import { CreateRequest } from '../models/CreateRequest';
import { CreateResponse } from '../models/CreateResponse';
import { DeleteRequest } from '../models/DeleteRequest';
import { DeleteResponse } from '../models/DeleteResponse';

import { serializeQuery, serializeHeader, serializePath } from '../http/QuerySerializer';

export default class ServiceTokensService extends BaseService {
  /**
   * @summary List
   * @description Service Tokens

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @returns {Promise<ListResponse.Model>} - The promise with the result
   */
  async list(project: string, config: string): Promise<ListResponse.Model> {
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
    const responseModel = response.data as ListResponse.Model;
    return responseModel;
  }

  /**
   * @summary Create
   * @description Service Token

   * @returns {Promise<CreateResponse.Model>} - The promise with the result
   */
  async create(input: CreateRequest.Model): Promise<CreateResponse.Model> {
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
    const responseModel = response.data as CreateResponse.Model;
    return responseModel;
  }

  /**
   * @summary Delete
   * @description Service Token

   * @returns {Promise<DeleteResponse.Model>} - The promise with the result
   */
  async delete(input: DeleteRequest.Model): Promise<DeleteResponse.Model> {
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
    const responseModel = response.data as DeleteResponse.Model;
    return responseModel;
  }
}
