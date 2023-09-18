import BaseService from '../../BaseService';

import { EnvironmentsGetResponse } from './models/EnvironmentsGetResponse';
import { RenameResponse } from './models/RenameResponse';
import { RenameRequest } from './models/RenameRequest';
import { EnvironmentsListResponse } from './models/EnvironmentsListResponse';
import { EnvironmentsCreateResponse } from './models/EnvironmentsCreateResponse';
import { EnvironmentsCreateRequest } from './models/EnvironmentsCreateRequest';

import { serializeQuery } from '../../http/QuerySerializer';

export class EnvironmentsService extends BaseService {
  /**
   * @summary Retrieve
   * @description Environment

   * @param project The project's name
   * @param environment The environment's slug
   * @returns {Promise<EnvironmentsGetResponse>} - The promise with the result
   */
  async get(project: string, environment: string): Promise<EnvironmentsGetResponse> {
    if (project === undefined || environment === undefined) {
      throw new Error(
        'The following are required parameters: project,environment, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    if (environment) {
      queryParams.push(serializeQuery('form', true, 'environment', environment));
    }
    const urlEndpoint = '/v3/environments/environment';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as EnvironmentsGetResponse;
    return responseModel;
  }

  /**
   * @summary Rename
   * @description Environment

   * @param project The project's name
   * @param environment The environment's slug
   * @returns {Promise<RenameResponse>} - The promise with the result
   */
  async rename(
    input: RenameRequest,
    project: string,
    environment: string,
  ): Promise<RenameResponse> {
    if (project === undefined || environment === undefined) {
      throw new Error(
        'The following are required parameters: project,environment, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    if (environment) {
      queryParams.push(serializeQuery('form', true, 'environment', environment));
    }
    const urlEndpoint = '/v3/environments/environment';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.put(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as RenameResponse;
    return responseModel;
  }

  /**
   * @summary Delete
   * @description Environment

   * @param project The project's name
   * @param environment The environment's slug
   * @returns {Promise<any>} - The promise with the result
   */
  async delete(project: string, environment: string): Promise<any> {
    if (project === undefined || environment === undefined) {
      throw new Error(
        'The following are required parameters: project,environment, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    if (environment) {
      queryParams.push(serializeQuery('form', true, 'environment', environment));
    }
    const urlEndpoint = '/v3/environments/environment';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.delete(
      finalUrl,
      { project, environment },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }

  /**
   * @summary List
   * @description Environments

   * @param project The project's name
   * @returns {Promise<EnvironmentsListResponse>} - The promise with the result
   */
  async list(project: string): Promise<EnvironmentsListResponse> {
    if (project === undefined) {
      throw new Error('The following parameter is required: project, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    const urlEndpoint = '/v3/environments';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as EnvironmentsListResponse;
    return responseModel;
  }

  /**
   * @summary Create
   * @description Environment

   * @param project The project's name
   * @returns {Promise<EnvironmentsCreateResponse>} - The promise with the result
   */
  async create(
    input: EnvironmentsCreateRequest,
    project: string,
  ): Promise<EnvironmentsCreateResponse> {
    if (project === undefined) {
      throw new Error('The following parameter is required: project, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    const urlEndpoint = '/v3/environments';
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
    const responseModel = response.data as EnvironmentsCreateResponse;
    return responseModel;
  }
}
