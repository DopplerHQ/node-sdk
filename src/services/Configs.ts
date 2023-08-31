import BaseService from './base';

import { ListResponse } from '../models/ListResponse';
import { CreateRequest } from '../models/CreateRequest';
import { CreateResponse } from '../models/CreateResponse';
import { GetResponse } from '../models/GetResponse';
import { UpdateRequest } from '../models/UpdateRequest';
import { UpdateResponse } from '../models/UpdateResponse';
import { DeleteRequest } from '../models/DeleteRequest';
import { DeleteResponse } from '../models/DeleteResponse';
import { CloneRequest } from '../models/CloneRequest';
import { CloneResponse } from '../models/CloneResponse';
import { LockRequest } from '../models/LockRequest';
import { LockResponse } from '../models/LockResponse';
import { UnlockRequest } from '../models/UnlockRequest';
import { UnlockResponse } from '../models/UnlockResponse';

import { serializeQuery, serializeHeader, serializePath } from '../http/QuerySerializer';

export default class ConfigsService extends BaseService {
  /**
   * @summary List
   * @description Fetch all configs.

   * @param project The project's name
   * @param optionalParams - Optional parameters
   * @param optionalParams.environment - (optional) the environment from which to list configs
   * @param optionalParams.page - Page number
   * @param optionalParams.perPage - Items per page
   * @returns {Promise<ListResponse.Model>} - The promise with the result
   */
  async list(
    project: string,
    optionalParams: { environment?: string; page?: number; perPage?: number } = {},
  ): Promise<ListResponse.Model> {
    const { environment, page, perPage } = optionalParams;
    if (project === undefined) {
      throw new Error('The following parameter is required: project, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    if (environment) {
      queryParams.push(serializeQuery('form', true, 'environment', environment));
    }
    if (page) {
      queryParams.push(serializeQuery('form', true, 'page', page));
    }
    if (perPage) {
      queryParams.push(serializeQuery('form', true, 'per_page', perPage));
    }
    const urlEndpoint = '/v3/configs';
    const urlParams = queryParams.length > 0 ? `?${encodeURI(queryParams.join('&'))}` : '';
    const finalUrl = `${this.baseUrl + urlEndpoint}${urlParams}`;
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
   * @description Create a new branch config.

   * @returns {Promise<CreateResponse.Model>} - The promise with the result
   */
  async create(input: CreateRequest.Model): Promise<CreateResponse.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs';
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
   * @summary Retrieve
   * @description Fetch a config's details.

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @returns {Promise<GetResponse.Model>} - The promise with the result
   */
  async get(project: string, config: string): Promise<GetResponse.Model> {
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
    const urlEndpoint = '/v3/configs/config';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as GetResponse.Model;
    return responseModel;
  }

  /**
   * @summary Update
   * @description Modify an existing config.

   * @returns {Promise<UpdateResponse.Model>} - The promise with the result
   */
  async update(input: UpdateRequest.Model): Promise<UpdateResponse.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config';
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
    const responseModel = response.data as UpdateResponse.Model;
    return responseModel;
  }

  /**
   * @summary Delete
   * @description Permanently delete the config.

   * @returns {Promise<DeleteResponse.Model>} - The promise with the result
   */
  async delete(input: DeleteRequest.Model): Promise<DeleteResponse.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config';
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

  /**
   * @summary Clone
   * @description Create a new branch config by cloning another. This duplicates a branch config and all its secrets.

   * @returns {Promise<CloneResponse.Model>} - The promise with the result
   */
  async clone(input: CloneRequest.Model): Promise<CloneResponse.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/clone';
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
    const responseModel = response.data as CloneResponse.Model;
    return responseModel;
  }

  /**
   * @summary Lock
   * @description Prevent the config from being renamed or deleted.

   * @returns {Promise<LockResponse.Model>} - The promise with the result
   */
  async lock(input: LockRequest.Model): Promise<LockResponse.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/lock';
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
    const responseModel = response.data as LockResponse.Model;
    return responseModel;
  }

  /**
   * @summary Unlock
   * @description Allow the config to be renamed and/or deleted.

   * @returns {Promise<UnlockResponse.Model>} - The promise with the result
   */
  async unlock(input: UnlockRequest.Model): Promise<UnlockResponse.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/unlock';
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
    const responseModel = response.data as UnlockResponse.Model;
    return responseModel;
  }
}
