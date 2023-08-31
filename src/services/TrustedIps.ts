import BaseService from './base';

import { ListResponse } from '../models/ListResponse';
import { AddRequest } from '../models/AddRequest';
import { AddResponse } from '../models/AddResponse';
import { DeleteRequest } from '../models/DeleteRequest';

import { serializeQuery, serializeHeader, serializePath } from '../http/QuerySerializer';

export default class TrustedIpsService extends BaseService {
  /**
   * @summary List

   * @param project Needed input variable
   * @param config Needed input variable
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
    const urlEndpoint = '/v3/configs/config/trusted_ips';
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
   * @summary Add

   * @param project Needed input variable
   * @param config Needed input variable
   * @returns {Promise<AddResponse.Model>} - The promise with the result
   */
  async add(input: AddRequest.Model, project: string, config: string): Promise<AddResponse.Model> {
    if (project === undefined || config === undefined) {
      throw new Error(
        'The following are required parameters: project,config, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    if (config) {
      queryParams.push(serializeQuery('form', true, 'config', config));
    }
    const urlEndpoint = '/v3/configs/config/trusted_ips';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.post(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as AddResponse.Model;
    return responseModel;
  }

  /**
   * @summary Delete

   * @param project Needed input variable
   * @param config Needed input variable
   * @returns {Promise<any>} - The promise with the result
   */
  async delete(input: DeleteRequest.Model, project: string, config: string): Promise<any> {
    if (project === undefined || config === undefined) {
      throw new Error(
        'The following are required parameters: project,config, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    if (config) {
      queryParams.push(serializeQuery('form', true, 'config', config));
    }
    const urlEndpoint = '/v3/configs/config/trusted_ips';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.delete(
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
