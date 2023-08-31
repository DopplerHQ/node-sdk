import BaseService from './base';

import { ListResponse } from '../models/ListResponse';
import { AddRequest } from '../models/AddRequest';
import { AddResponse } from '../models/AddResponse';
import { Type } from '../models/Type';
import { GetResponse } from '../models/GetResponse';
import { UpdateRequest } from '../models/UpdateRequest';
import { UpdateResponse } from '../models/UpdateResponse';

import { serializeQuery, serializeHeader, serializePath } from '../http/QuerySerializer';

export default class ProjectMembersService extends BaseService {
  /**
   * @summary List

   * @param project Project slug
   * @param optionalParams - Optional parameters
   * @param optionalParams.page - Needed input variable
   * @param optionalParams.perPage - Needed input variable
   * @returns {Promise<ListResponse.Model>} - The promise with the result
   */
  async list(
    project: string,
    optionalParams: { page?: number; perPage?: number } = {},
  ): Promise<ListResponse.Model> {
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
    const responseModel = response.data as ListResponse.Model;
    return responseModel;
  }

  /**
   * @summary Add

   * @param project Project slug
   * @returns {Promise<AddResponse.Model>} - The promise with the result
   */
  async add(input: AddRequest.Model, project: string): Promise<AddResponse.Model> {
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
    const responseModel = response.data as AddResponse.Model;
    return responseModel;
  }

  /**
   * @summary Retrieve

   * @param project Project slug
   * @param type_ Needed input variable
   * @param slug Member's slug
   * @returns {Promise<GetResponse.Model>} - The promise with the result
   */
  async get(project: string, type: Type.Model, slug: string): Promise<GetResponse.Model> {
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
    const responseModel = response.data as GetResponse.Model;
    return responseModel;
  }

  /**
   * @summary Update

   * @param type_ Needed input variable
   * @param slug Member's slug
   * @param project Project slug
   * @returns {Promise<UpdateResponse.Model>} - The promise with the result
   */
  async update(
    input: UpdateRequest.Model,
    type: Type.Model,
    slug: string,
    project: string,
  ): Promise<UpdateResponse.Model> {
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
    const responseModel = response.data as UpdateResponse.Model;
    return responseModel;
  }

  /**
   * @summary Delete

   * @param type_ Needed input variable
   * @param slug Member's slug
   * @param project Project slug
   * @returns {Promise<any>} - The promise with the result
   */
  async delete(type: Type.Model, slug: string, project: string): Promise<any> {
    if (type === undefined || slug === undefined || project === undefined) {
      throw new Error(
        'The following are required parameters: type,slug,project, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
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
