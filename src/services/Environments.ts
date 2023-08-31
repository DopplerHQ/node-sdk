import BaseService from './base';

import { ListResponse } from '../models/ListResponse';
import { CreateRequest } from '../models/CreateRequest';
import { CreateResponse } from '../models/CreateResponse';
import { GetResponse } from '../models/GetResponse';
import { RenameRequest } from '../models/RenameRequest';
import { RenameResponse } from '../models/RenameResponse';

import { serializeQuery, serializeHeader, serializePath } from '../http/QuerySerializer';

export default class EnvironmentsService extends BaseService {
  /**
   * @summary List
   * @description Environments

   * @param project The project's name
   * @returns {Promise<ListResponse.Model>} - The promise with the result
   */
  async list(project: string): Promise<ListResponse.Model> {
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
    const responseModel = response.data as ListResponse.Model;
    return responseModel;
  }

  /**
   * @summary Create
   * @description Environment

   * @param project The project's name
   * @returns {Promise<CreateResponse.Model>} - The promise with the result
   */
  async create(input: CreateRequest.Model, project: string): Promise<CreateResponse.Model> {
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
    const responseModel = response.data as CreateResponse.Model;
    return responseModel;
  }

  /**
   * @summary Retrieve
   * @description Environment

   * @param project The project's name
   * @param environment The environment's slug
   * @returns {Promise<GetResponse.Model>} - The promise with the result
   */
  async get(project: string, environment: string): Promise<GetResponse.Model> {
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
    const responseModel = response.data as GetResponse.Model;
    return responseModel;
  }

  /**
   * @summary Rename
   * @description Environment

   * @param project The project's name
   * @param environment The environment's slug
   * @returns {Promise<RenameResponse.Model>} - The promise with the result
   */
  async rename(
    input: RenameRequest.Model,
    project: string,
    environment: string,
  ): Promise<RenameResponse.Model> {
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
    const responseModel = response.data as RenameResponse.Model;
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
}
