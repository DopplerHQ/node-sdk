import BaseService from '../../BaseService';

import { ListResponse } from './models/ListResponse';
import { CreateResponse } from './models/CreateResponse';
import { CreateRequest } from './models/CreateRequest';
import { ProjectsGetResponse } from './models/ProjectsGetResponse';
import { ProjectsUpdateResponse } from './models/ProjectsUpdateResponse';
import { ProjectsUpdateRequest } from './models/ProjectsUpdateRequest';
import { DeleteRequest } from './models/DeleteRequest';

import { serializeQuery } from '../../http/QuerySerializer';

export class ProjectsService extends BaseService {
  /**
   * @summary List
   * @description Projects

   * @param optionalParams - Optional parameters
   * @param optionalParams.page - Page number
   * @param optionalParams.perPage - Items per page
   * @returns {Promise<ListResponse>} - The promise with the result
   */
  async list(optionalParams: { page?: number; perPage?: number } = {}): Promise<ListResponse> {
    const { page, perPage } = optionalParams;

    const queryParams: string[] = [];
    if (page) {
      queryParams.push(serializeQuery('form', true, 'page', page));
    }
    if (perPage) {
      queryParams.push(serializeQuery('form', true, 'per_page', perPage));
    }
    const urlEndpoint = '/v3/projects';
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
    const responseModel = response.data as ListResponse;
    return responseModel;
  }

  /**
   * @summary Create
   * @description Project

   * @returns {Promise<CreateResponse>} - The promise with the result
   */
  async create(input: CreateRequest): Promise<CreateResponse> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/projects';
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
    const responseModel = response.data as CreateResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve
   * @description Project

   * @param project Unique identifier for the project object.
   * @returns {Promise<ProjectsGetResponse>} - The promise with the result
   */
  async get(project: string): Promise<ProjectsGetResponse> {
    if (project === undefined) {
      throw new Error('The following parameter is required: project, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    const urlEndpoint = '/v3/projects/project';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ProjectsGetResponse;
    return responseModel;
  }

  /**
   * @summary Update
   * @description Project

   * @returns {Promise<ProjectsUpdateResponse>} - The promise with the result
   */
  async update(input: ProjectsUpdateRequest): Promise<ProjectsUpdateResponse> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/projects/project';
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
    const responseModel = response.data as ProjectsUpdateResponse;
    return responseModel;
  }

  /**
   * @summary Delete
   * @description Project

   * @returns {Promise<any>} - The promise with the result
   */
  async delete(input: DeleteRequest): Promise<any> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/projects/project';
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
    const responseModel = response.data;
    return responseModel;
  }
}
