import BaseService from './base';

import { EnvironmentsGet200Response } from '../models/EnvironmentsGet200Response';
import { EnvironmentsRenameRequest } from '../models/EnvironmentsRenameRequest';
import { EnvironmentsRename200Response } from '../models/EnvironmentsRename200Response';
import { EnvironmentsList200Response } from '../models/EnvironmentsList200Response';
import { EnvironmentsCreateRequest } from '../models/EnvironmentsCreateRequest';
import { EnvironmentsCreate200Response } from '../models/EnvironmentsCreate200Response';

export default class EnvironmentsService extends BaseService {
  /**
   * @summary Retrieve
   * @description Environment

   * @param project The project's name
   * @param environment The environment's slug
   * @returns {Promise<EnvironmentsGet200Response.Model>} - The promise with the result
   */
  async get(project: string, environment: string): Promise<EnvironmentsGet200Response.Model> {
    if (project === undefined || environment === undefined) {
      throw new Error(
        'The following are required parameters: project,environment, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(`project=${project}`);
    }
    if (environment) {
      queryParams.push(`environment=${environment}`);
    }
    const urlEndpoint = '/v3/environments/environment';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.http.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as EnvironmentsGet200Response.Model;
    return responseModel;
  }

  /**
   * @summary Rename
   * @description Environment

   * @param project The project's name
   * @param environment The environment's slug
   * @returns {Promise<EnvironmentsRename200Response.Model>} - The promise with the result
   */
  async rename(
    input: EnvironmentsRenameRequest.Model,
    project: string,
    environment: string,
  ): Promise<EnvironmentsRename200Response.Model> {
    if (project === undefined || environment === undefined) {
      throw new Error(
        'The following are required parameters: project,environment, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    if (project) {
      queryParams.push(`project=${project}`);
    }
    if (environment) {
      queryParams.push(`environment=${environment}`);
    }
    const urlEndpoint = '/v3/environments/environment';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.http.put(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as EnvironmentsRename200Response.Model;
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
      queryParams.push(`project=${project}`);
    }
    if (environment) {
      queryParams.push(`environment=${environment}`);
    }
    const urlEndpoint = '/v3/environments/environment';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.http.delete(
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
   * @returns {Promise<EnvironmentsList200Response.Model>} - The promise with the result
   */
  async list(project: string): Promise<EnvironmentsList200Response.Model> {
    if (project === undefined) {
      throw new Error('The following parameter is required: project, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(`project=${project}`);
    }
    const urlEndpoint = '/v3/environments';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.http.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as EnvironmentsList200Response.Model;
    return responseModel;
  }

  /**
   * @summary Create
   * @description Environment

   * @param project The project's name
   * @returns {Promise<EnvironmentsCreate200Response.Model>} - The promise with the result
   */
  async create(
    input: EnvironmentsCreateRequest.Model,
    project: string,
  ): Promise<EnvironmentsCreate200Response.Model> {
    if (project === undefined) {
      throw new Error('The following parameter is required: project, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    if (project) {
      queryParams.push(`project=${project}`);
    }
    const urlEndpoint = '/v3/environments';
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
    const responseModel = response.data as EnvironmentsCreate200Response.Model;
    return responseModel;
  }
}
