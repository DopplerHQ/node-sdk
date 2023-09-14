import BaseService from '../../BaseService';

import { ConfigsListResponse } from './models/ConfigsListResponse';
import { ConfigsCreateResponse } from './models/ConfigsCreateResponse';
import { ConfigsCreateRequest } from './models/ConfigsCreateRequest';
import { ConfigsGetResponse } from './models/ConfigsGetResponse';
import { ConfigsUpdateResponse } from './models/ConfigsUpdateResponse';
import { DeleteResponse } from '../common/DeleteResponse';
import { ConfigsUpdateRequest } from './models/ConfigsUpdateRequest';
import { ConfigsDeleteRequest } from './models/ConfigsDeleteRequest';
import { CloneResponse } from './models/CloneResponse';
import { CloneRequest } from './models/CloneRequest';
import { LockResponse } from './models/LockResponse';
import { LockRequest } from './models/LockRequest';
import { UnlockResponse } from './models/UnlockResponse';
import { UnlockRequest } from './models/UnlockRequest';
import { ListTrustedIpsResponse } from './models/ListTrustedIpsResponse';
import { AddTrustedIpResponse } from './models/AddTrustedIpResponse';
import { AddTrustedIpRequest } from './models/AddTrustedIpRequest';
import { DeleteTrustedIpRequest } from './models/DeleteTrustedIpRequest';

import { serializeQuery } from '../../http/QuerySerializer';

export class ConfigsService extends BaseService {
  /**
   * @summary List
   * @description Fetch all configs.

   * @param project The project's name
   * @param optionalParams - Optional parameters
   * @param optionalParams.environment - (optional) the environment from which to list configs
   * @param optionalParams.page - Page number
   * @param optionalParams.perPage - Items per page
   * @returns {Promise<ConfigsListResponse>} - The promise with the result
   */
  async list(
    project: string,
    optionalParams: { environment?: string; page?: number; perPage?: number } = {},
  ): Promise<ConfigsListResponse> {
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
    const responseModel = response.data as ConfigsListResponse;
    return responseModel;
  }

  /**
   * @summary Create
   * @description Create a new branch config.

   * @returns {Promise<ConfigsCreateResponse>} - The promise with the result
   */
  async create(input: ConfigsCreateRequest): Promise<ConfigsCreateResponse> {
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
    const responseModel = response.data as ConfigsCreateResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve
   * @description Fetch a config's details.

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @returns {Promise<ConfigsGetResponse>} - The promise with the result
   */
  async get(project: string, config: string): Promise<ConfigsGetResponse> {
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
    const responseModel = response.data as ConfigsGetResponse;
    return responseModel;
  }

  /**
   * @summary Update
   * @description Modify an existing config.

   * @returns {Promise<ConfigsUpdateResponse>} - The promise with the result
   */
  async update(input: ConfigsUpdateRequest): Promise<ConfigsUpdateResponse> {
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
    const responseModel = response.data as ConfigsUpdateResponse;
    return responseModel;
  }

  /**
   * @summary Delete
   * @description Permanently delete the config.

   * @returns {Promise<DeleteResponse>} - The promise with the result
   */
  async delete(input: ConfigsDeleteRequest): Promise<DeleteResponse> {
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
    const responseModel = response.data as DeleteResponse;
    return responseModel;
  }

  /**
   * @summary Clone
   * @description Create a new branch config by cloning another. This duplicates a branch config and all its secrets.

   * @returns {Promise<CloneResponse>} - The promise with the result
   */
  async clone(input: CloneRequest): Promise<CloneResponse> {
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
    const responseModel = response.data as CloneResponse;
    return responseModel;
  }

  /**
   * @summary Lock
   * @description Prevent the config from being renamed or deleted.

   * @returns {Promise<LockResponse>} - The promise with the result
   */
  async lock(input: LockRequest): Promise<LockResponse> {
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
    const responseModel = response.data as LockResponse;
    return responseModel;
  }

  /**
   * @summary Unlock
   * @description Allow the config to be renamed and/or deleted.

   * @returns {Promise<UnlockResponse>} - The promise with the result
   */
  async unlock(input: UnlockRequest): Promise<UnlockResponse> {
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
    const responseModel = response.data as UnlockResponse;
    return responseModel;
  }

  /**
   * @summary List

   * @param project Needed input variable
   * @param config Needed input variable
   * @returns {Promise<ListTrustedIpsResponse>} - The promise with the result
   */
  async listTrustedIps(project: string, config: string): Promise<ListTrustedIpsResponse> {
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
    const responseModel = response.data as ListTrustedIpsResponse;
    return responseModel;
  }

  /**
   * @summary Add

   * @param project Needed input variable
   * @param config Needed input variable
   * @returns {Promise<AddTrustedIpResponse>} - The promise with the result
   */
  async addTrustedIp(
    input: AddTrustedIpRequest,
    project: string,
    config: string,
  ): Promise<AddTrustedIpResponse> {
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
    const responseModel = response.data as AddTrustedIpResponse;
    return responseModel;
  }

  /**
   * @summary Delete

   * @param project Needed input variable
   * @param config Needed input variable
   * @returns {Promise<any>} - The promise with the result
   */
  async deleteTrustedIp(
    input: DeleteTrustedIpRequest,
    project: string,
    config: string,
  ): Promise<any> {
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
