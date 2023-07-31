import BaseService from './base';

import { ConfigsList200Response } from '../models/ConfigsList200Response';
import { ConfigsCreateRequest } from '../models/ConfigsCreateRequest';
import { ConfigsCreate200Response } from '../models/ConfigsCreate200Response';
import { ConfigsGet200Response } from '../models/ConfigsGet200Response';
import { ConfigsUpdateRequest } from '../models/ConfigsUpdateRequest';
import { ConfigsUpdate200Response } from '../models/ConfigsUpdate200Response';
import { ConfigsDeleteRequest } from '../models/ConfigsDeleteRequest';
import { ConfigsDelete200Response } from '../models/ConfigsDelete200Response';
import { ConfigsCloneRequest } from '../models/ConfigsCloneRequest';
import { ConfigsClone200Response } from '../models/ConfigsClone200Response';
import { ConfigsLockRequest } from '../models/ConfigsLockRequest';
import { ConfigsLock200Response } from '../models/ConfigsLock200Response';
import { ConfigsUnlockRequest } from '../models/ConfigsUnlockRequest';
import { ConfigsUnlock200Response } from '../models/ConfigsUnlock200Response';

export default class ConfigsService extends BaseService {
  /**
   * @summary List
   * @description Fetch all configs.

   * @param project The project's name
   * @param optionalParams - Optional parameters
   * @param optionalParams.environment - (optional) the environment from which to list configs
   * @param optionalParams.page - Page number
   * @param optionalParams.perPage - Items per page
   * @returns {Promise<ConfigsList200Response.Model>} - The promise with the result
   */
  async list(
    project: string,
    optionalParams: { environment?: string; page?: number; perPage?: number } = {},
  ): Promise<ConfigsList200Response.Model> {
    const { environment, page, perPage } = optionalParams;
    if (project === undefined) {
      throw new Error('The following parameter is required: project, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(`project=${project}`);
    }
    if (environment) {
      queryParams.push(`environment=${environment}`);
    }
    if (page) {
      queryParams.push(`page=${page}`);
    }
    if (perPage) {
      queryParams.push(`per_page=${perPage}`);
    }
    const urlEndpoint = '/v3/configs';
    const urlParams = queryParams.length > 0 ? `?${encodeURI(queryParams.join('&'))}` : '';
    const finalUrl = `${this.baseUrl + urlEndpoint}${urlParams}`;
    const response: any = await this.http.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ConfigsList200Response.Model;
    return responseModel;
  }

  /**
   * @summary Create
   * @description Create a new branch config.

   * @returns {Promise<ConfigsCreate200Response.Model>} - The promise with the result
   */
  async create(input: ConfigsCreateRequest.Model): Promise<ConfigsCreate200Response.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs';
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
    const responseModel = response.data as ConfigsCreate200Response.Model;
    return responseModel;
  }

  /**
   * @summary Retrieve
   * @description Fetch a config's details.

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @returns {Promise<ConfigsGet200Response.Model>} - The promise with the result
   */
  async get(project: string, config: string): Promise<ConfigsGet200Response.Model> {
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
    const urlEndpoint = '/v3/configs/config';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.http.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ConfigsGet200Response.Model;
    return responseModel;
  }

  /**
   * @summary Update
   * @description Modify an existing config.

   * @returns {Promise<ConfigsUpdate200Response.Model>} - The promise with the result
   */
  async update(input: ConfigsUpdateRequest.Model): Promise<ConfigsUpdate200Response.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config';
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
    const responseModel = response.data as ConfigsUpdate200Response.Model;
    return responseModel;
  }

  /**
   * @summary Delete
   * @description Permanently delete the config.

   * @returns {Promise<ConfigsDelete200Response.Model>} - The promise with the result
   */
  async delete(input: ConfigsDeleteRequest.Model): Promise<ConfigsDelete200Response.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config';
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
    const responseModel = response.data as ConfigsDelete200Response.Model;
    return responseModel;
  }

  /**
   * @summary Clone
   * @description Create a new branch config by cloning another. This duplicates a branch config and all its secrets.

   * @returns {Promise<ConfigsClone200Response.Model>} - The promise with the result
   */
  async clone(input: ConfigsCloneRequest.Model): Promise<ConfigsClone200Response.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/clone';
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
    const responseModel = response.data as ConfigsClone200Response.Model;
    return responseModel;
  }

  /**
   * @summary Lock
   * @description Prevent the config from being renamed or deleted.

   * @returns {Promise<ConfigsLock200Response.Model>} - The promise with the result
   */
  async lock(input: ConfigsLockRequest.Model): Promise<ConfigsLock200Response.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/lock';
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
    const responseModel = response.data as ConfigsLock200Response.Model;
    return responseModel;
  }

  /**
   * @summary Unlock
   * @description Allow the config to be renamed and/or deleted.

   * @returns {Promise<ConfigsUnlock200Response.Model>} - The promise with the result
   */
  async unlock(input: ConfigsUnlockRequest.Model): Promise<ConfigsUnlock200Response.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/unlock';
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
    const responseModel = response.data as ConfigsUnlock200Response.Model;
    return responseModel;
  }
}
