import BaseService from './base';

import { ProjectsList200Response } from '../models/ProjectsList200Response';
import { ProjectsCreateRequest } from '../models/ProjectsCreateRequest';
import { ProjectsCreate200Response } from '../models/ProjectsCreate200Response';
import { ProjectsGet200Response } from '../models/ProjectsGet200Response';
import { ProjectsUpdateRequest } from '../models/ProjectsUpdateRequest';
import { ProjectsUpdate200Response } from '../models/ProjectsUpdate200Response';
import { ProjectsDeleteRequest } from '../models/ProjectsDeleteRequest';

export default class ProjectsService extends BaseService {
  /**
   * @summary List
   * @description Projects

   * @param optionalParams - Optional parameters
   * @param optionalParams.page - Page number
   * @param optionalParams.perPage - Items per page
   * @returns {Promise<ProjectsList200Response.Model>} - The promise with the result
   */
  async list(
    optionalParams: { page?: number; perPage?: number } = {},
  ): Promise<ProjectsList200Response.Model> {
    const { page, perPage } = optionalParams;

    const queryParams: string[] = [];
    if (page) {
      queryParams.push(`page=${page}`);
    }
    if (perPage) {
      queryParams.push(`per_page=${perPage}`);
    }
    const urlEndpoint = '/v3/projects';
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
    const responseModel = response.data as ProjectsList200Response.Model;
    return responseModel;
  }

  /**
   * @summary Create
   * @description Project

   * @returns {Promise<ProjectsCreate200Response.Model>} - The promise with the result
   */
  async create(input: ProjectsCreateRequest.Model): Promise<ProjectsCreate200Response.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/projects';
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
    const responseModel = response.data as ProjectsCreate200Response.Model;
    return responseModel;
  }

  /**
   * @summary Retrieve
   * @description Project

   * @param project Unique identifier for the project object.
   * @returns {Promise<ProjectsGet200Response.Model>} - The promise with the result
   */
  async get(project: string): Promise<ProjectsGet200Response.Model> {
    if (project === undefined) {
      throw new Error('The following parameter is required: project, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(`project=${project}`);
    }
    const urlEndpoint = '/v3/projects/project';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.http.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ProjectsGet200Response.Model;
    return responseModel;
  }

  /**
   * @summary Update
   * @description Project

   * @returns {Promise<ProjectsUpdate200Response.Model>} - The promise with the result
   */
  async update(input: ProjectsUpdateRequest.Model): Promise<ProjectsUpdate200Response.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/projects/project';
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
    const responseModel = response.data as ProjectsUpdate200Response.Model;
    return responseModel;
  }

  /**
   * @summary Delete
   * @description Project

   * @returns {Promise<any>} - The promise with the result
   */
  async delete(input: ProjectsDeleteRequest.Model): Promise<any> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/projects/project';
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
    const responseModel = response.data;
    return responseModel;
  }
}
