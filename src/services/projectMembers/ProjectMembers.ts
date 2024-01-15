import BaseService from '../../BaseService';

import { ProjectMembersListResponse } from './models/ProjectMembersListResponse';
import { AddResponse } from './models/AddResponse';
import { AddRequest } from './models/AddRequest';
import { Type } from './models/Type';
import { ProjectMembersGetResponse } from './models/ProjectMembersGetResponse';
import { ProjectMembersUpdateResponse } from './models/ProjectMembersUpdateResponse';
import { ProjectMembersUpdateRequest } from './models/ProjectMembersUpdateRequest';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class ProjectMembersService extends BaseService {
  /**
   * @summary List

   * @param project Project slug
   * @param optionalParams - Optional parameters
   * @param optionalParams.page - Needed input variable
   * @param optionalParams.perPage - Needed input variable
   * @returns {Promise<ProjectMembersListResponse>} - The promise with the result
   */
  async list(
    project: string,
    optionalParams: { page?: number; perPage?: number } = {},
  ): Promise<ProjectMembersListResponse> {
    const { page, perPage } = optionalParams;
    if (project === undefined) {
      throw new Error('The following parameter is required: project, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    if (page) {
      queryParams.push(serializeQuery('form', true, 'page', page));
    }
    if (perPage) {
      queryParams.push(serializeQuery('form', true, 'per_page', perPage));
    }
    const urlEndpoint = '/v3/projects/project/members';
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
    const responseModel = response.data as ProjectMembersListResponse;
    return responseModel;
  }

  /**
   * @summary Add

   * @param project Project slug
   * @returns {Promise<AddResponse>} - The promise with the result
   */
  async add(input: AddRequest, project: string): Promise<AddResponse> {
    if (project === undefined) {
      throw new Error('The following parameter is required: project, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    const urlEndpoint = '/v3/projects/project/members';
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
    const responseModel = response.data as AddResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve

   * @param project Project slug
   * @param type_ Needed input variable
   * @param slug Member's slug
   * @returns {Promise<ProjectMembersGetResponse>} - The promise with the result
   */
  async get(project: string, type: Type, slug: string): Promise<ProjectMembersGetResponse> {
    if (project === undefined || type === undefined || slug === undefined) {
      throw new Error(
        'The following are required parameters: project,type,slug, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    let urlEndpoint = '/v3/projects/project/members/member/{type}/{slug}';
    urlEndpoint = urlEndpoint.replace(
      '{type_}',
      encodeURIComponent(serializePath('simple', false, type, undefined)),
    );
    urlEndpoint = urlEndpoint.replace(
      '{slug}',
      encodeURIComponent(serializePath('simple', false, slug, undefined)),
    );
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ProjectMembersGetResponse;
    return responseModel;
  }

  /**
   * @summary Update

   * @param type_ Needed input variable
   * @param slug Member's slug
   * @param project Project slug
   * @returns {Promise<ProjectMembersUpdateResponse>} - The promise with the result
   */
  async update(
    input: ProjectMembersUpdateRequest,
    type: Type,
    slug: string,
    project: string,
  ): Promise<ProjectMembersUpdateResponse> {
    if (type === undefined || slug === undefined || project === undefined) {
      throw new Error(
        'The following are required parameters: type,slug,project, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    let urlEndpoint = '/v3/projects/project/members/member/{type}/{slug}';
    urlEndpoint = urlEndpoint.replace(
      '{type_}',
      encodeURIComponent(serializePath('simple', false, type, undefined)),
    );
    urlEndpoint = urlEndpoint.replace(
      '{slug}',
      encodeURIComponent(serializePath('simple', false, slug, undefined)),
    );
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.patch(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ProjectMembersUpdateResponse;
    return responseModel;
  }

  /**
   * @summary Delete

   * @param type_ Needed input variable
   * @param slug Member's slug
   * @param project Project slug
   * @returns {Promise<any>} - The promise with the result
   */
  async delete(type: Type, slug: string, project: string): Promise<any> {
    if (type === undefined || slug === undefined || project === undefined) {
      throw new Error(
        'The following are required parameters: type,slug,project, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/v3/projects/project/members/member/{type}/{slug}';
    urlEndpoint = urlEndpoint.replace(
      '{type}',
      encodeURIComponent(serializePath('simple', false, type, undefined)),
    );

    urlEndpoint = urlEndpoint.replace(
      '{slug}',
      encodeURIComponent(serializePath('simple', false, slug, undefined)),
    );
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.delete(
      finalUrl,
      { project },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }
}
