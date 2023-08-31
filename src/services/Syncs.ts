import BaseService from './base';

import { CreateRequest } from '../models/CreateRequest';
import { CreateResponse } from '../models/CreateResponse';
import { GetResponse } from '../models/GetResponse';
import { DeleteResponse } from '../models/DeleteResponse';

import { serializeQuery, serializeHeader, serializePath } from '../http/QuerySerializer';

export default class SyncsService extends BaseService {
  /**
   * @summary Create
   * @description Create a new secrets sync.

   * @param project The project slug
   * @param config The config slug
   * @returns {Promise<CreateResponse.Model>} - The promise with the result
   */
  async create(
    input: CreateRequest.Model,
    project: string,
    config: string,
  ): Promise<CreateResponse.Model> {
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
    const responseModel = response.data as CreateResponse.Model;
    return responseModel;
  }

  /**
   * @summary Retrieve
   * @description Retrieve an existing secrets sync.

   * @param project The project slug
   * @param config The config slug
   * @param sync The sync slug
   * @returns {Promise<GetResponse.Model>} - The promise with the result
   */
  async get(project: string, config: string, sync: string): Promise<GetResponse.Model> {
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
    const responseModel = response.data as GetResponse.Model;
    return responseModel;
  }

  /**
   * @summary Delete
   * @description Delete an existing sync.

   * @param project The project slug
   * @param config The config slug
   * @param sync The sync slug
   * @param deleteFromTarget Whether or not to delete the synced data from the target integration
   * @returns {Promise<DeleteResponse.Model>} - The promise with the result
   */
  async delete(
    project: string,
    config: string,
    sync: string,
    deleteFromTarget: boolean,
  ): Promise<DeleteResponse.Model> {
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
    const responseModel = response.data as DeleteResponse.Model;
    return responseModel;
  }
}
