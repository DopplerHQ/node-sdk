import BaseService from './base';

import { SyncsCreateRequest } from '../models/SyncsCreateRequest';
import { SyncsCreate200Response } from '../models/SyncsCreate200Response';
import { SyncsGet200Response } from '../models/SyncsGet200Response';
import { SyncsDelete200Response } from '../models/SyncsDelete200Response';

export default class SyncsService extends BaseService {
  /**
   * @summary Create
   * @description Create a new secrets sync.

   * @param project The project slug
   * @param config The config slug
   * @returns {Promise<SyncsCreate200Response.Model>} - The promise with the result
   */
  async create(
    input: SyncsCreateRequest.Model,
    project: string,
    config: string,
  ): Promise<SyncsCreate200Response.Model> {
    if (project === undefined || config === undefined) {
      throw new Error(
        'The following are required parameters: project,config, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    if (project) {
      queryParams.push(`project=${project}`);
    }
    if (config) {
      queryParams.push(`config=${config}`);
    }
    const urlEndpoint = '/v3/configs/config/syncs';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.http.post(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as SyncsCreate200Response.Model;
    return responseModel;
  }

  /**
   * @summary Retrieve
   * @description Retrieve an existing secrets sync.

   * @param project The project slug
   * @param config The config slug
   * @param sync The sync slug
   * @returns {Promise<SyncsGet200Response.Model>} - The promise with the result
   */
  async get(project: string, config: string, sync: string): Promise<SyncsGet200Response.Model> {
    if (project === undefined || config === undefined || sync === undefined) {
      throw new Error(
        'The following are required parameters: project,config,sync, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(`project=${project}`);
    }
    if (config) {
      queryParams.push(`config=${config}`);
    }
    if (sync) {
      queryParams.push(`sync=${sync}`);
    }
    const urlEndpoint = '/v3/configs/config/syncs/sync';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.http.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as SyncsGet200Response.Model;
    return responseModel;
  }

  /**
   * @summary Delete
   * @description Delete an existing sync.

   * @param project The project slug
   * @param config The config slug
   * @param sync The sync slug
   * @param deleteFromTarget Whether or not to delete the synced data from the target integration
   * @returns {Promise<SyncsDelete200Response.Model>} - The promise with the result
   */
  async delete(
    project: string,
    config: string,
    sync: string,
    deleteFromTarget: boolean,
  ): Promise<SyncsDelete200Response.Model> {
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
      queryParams.push(`project=${project}`);
    }
    if (config) {
      queryParams.push(`config=${config}`);
    }
    if (sync) {
      queryParams.push(`sync=${sync}`);
    }
    if (deleteFromTarget) {
      queryParams.push(`delete_from_target=${deleteFromTarget}`);
    }
    const urlEndpoint = '/v3/configs/config/syncs/sync';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.http.delete(
      finalUrl,
      { project, config, sync, delete_from_target: deleteFromTarget },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as SyncsDelete200Response.Model;
    return responseModel;
  }
}
