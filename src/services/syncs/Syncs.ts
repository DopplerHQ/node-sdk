import BaseService from '../../BaseService';

import { SyncsCreateResponse } from './models/SyncsCreateResponse';
import { SyncsCreateRequest } from './models/SyncsCreateRequest';
import { SyncsGetResponse } from './models/SyncsGetResponse';
import { SyncsDeleteResponse } from './models/SyncsDeleteResponse';

import { serializeQuery } from '../../http/QuerySerializer';

export class SyncsService extends BaseService {
  /**
   * @summary Create
   * @description Create a new secrets sync.

   * @param project The project slug
   * @param config The config slug
   * @returns {Promise<SyncsCreateResponse>} - The promise with the result
   */
  async create(
    input: SyncsCreateRequest,
    project: string,
    config: string,
  ): Promise<SyncsCreateResponse> {
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
    const urlEndpoint = '/v3/configs/config/syncs';
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
    const responseModel = response.data as SyncsCreateResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve
   * @description Retrieve an existing secrets sync.

   * @param project The project slug
   * @param config The config slug
   * @param sync The sync slug
   * @returns {Promise<SyncsGetResponse>} - The promise with the result
   */
  async get(project: string, config: string, sync: string): Promise<SyncsGetResponse> {
    if (project === undefined || config === undefined || sync === undefined) {
      throw new Error(
        'The following are required parameters: project,config,sync, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    if (config) {
      queryParams.push(serializeQuery('form', true, 'config', config));
    }
    if (sync) {
      queryParams.push(serializeQuery('form', true, 'sync', sync));
    }
    const urlEndpoint = '/v3/configs/config/syncs/sync';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as SyncsGetResponse;
    return responseModel;
  }

  /**
   * @summary Delete
   * @description Delete an existing sync.

   * @param project The project slug
   * @param config The config slug
   * @param sync The sync slug
   * @param deleteFromTarget Whether or not to delete the synced data from the target integration
   * @returns {Promise<SyncsDeleteResponse>} - The promise with the result
   */
  async delete(
    project: string,
    config: string,
    sync: string,
    deleteFromTarget: boolean,
  ): Promise<SyncsDeleteResponse> {
    if (
      project === undefined ||
      config === undefined ||
      sync === undefined ||
      deleteFromTarget === undefined
    ) {
      throw new Error(
        'The following are required parameters: project,config,sync,deleteFromTarget, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    if (config) {
      queryParams.push(serializeQuery('form', true, 'config', config));
    }
    if (sync) {
      queryParams.push(serializeQuery('form', true, 'sync', sync));
    }
    if (deleteFromTarget) {
      queryParams.push(serializeQuery('form', true, 'delete_from_target', deleteFromTarget));
    }
    const urlEndpoint = '/v3/configs/config/syncs/sync';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.delete(
      finalUrl,
      { project, config, sync, delete_from_target: deleteFromTarget },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as SyncsDeleteResponse;
    return responseModel;
  }
}
