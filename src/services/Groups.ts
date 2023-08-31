import BaseService from './base';

import { ListResponse } from '../models/ListResponse';
import { CreateRequest } from '../models/CreateRequest';
import { CreateResponse } from '../models/CreateResponse';
import { GetResponse } from '../models/GetResponse';
import { UpdateRequest } from '../models/UpdateRequest';
import { UpdateResponse } from '../models/UpdateResponse';
import { AddMemberRequest } from '../models/AddMemberRequest';
import { Type } from '../models/Type';

import { serializeQuery, serializeHeader, serializePath } from '../http/QuerySerializer';

export default class GroupsService extends BaseService {
  /**
   * @summary List

   * @param optionalParams - Optional parameters
   * @param optionalParams.page - Needed input variable
   * @param optionalParams.perPage - Needed input variable
   * @returns {Promise<ListResponse.Model>} - The promise with the result
   */
  async list(
    optionalParams: { page?: number; perPage?: number } = {},
  ): Promise<ListResponse.Model> {
    const { page, perPage } = optionalParams;

    const queryParams: string[] = [];
    if (page) {
      queryParams.push(serializeQuery('form', true, 'page', page));
    }
    if (perPage) {
      queryParams.push(serializeQuery('form', true, 'per_page', perPage));
    }
    const urlEndpoint = '/v3/workplace/groups';
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
   * @summary Create

   * @returns {Promise<CreateResponse.Model>} - The promise with the result
   */
  async create(input: CreateRequest.Model): Promise<CreateResponse.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/workplace/groups';
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
    const responseModel = response.data as CreateResponse.Model;
    return responseModel;
  }

  /**
   * @summary Retrieve

   * @param slug The group's slug
   * @returns {Promise<GetResponse.Model>} - The promise with the result
   */
  async get(slug: string): Promise<GetResponse.Model> {
    if (slug === undefined) {
      throw new Error('The following parameter is required: slug, cannot be empty or blank');
    }
    let urlEndpoint = '/v3/workplace/groups/group/{slug}';
    urlEndpoint = urlEndpoint.replace(
      '{slug}',
      encodeURIComponent(serializePath('simple', false, slug, undefined)),
    );
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
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

   * @param slug The group's slug
   * @returns {Promise<UpdateResponse.Model>} - The promise with the result
   */
  async update(input: UpdateRequest.Model, slug: string): Promise<UpdateResponse.Model> {
    if (slug === undefined) {
      throw new Error('The following parameter is required: slug, cannot be empty or blank');
    }
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    let urlEndpoint = '/v3/workplace/groups/group/{slug}';
    urlEndpoint = urlEndpoint.replace(
      '{slug}',
      encodeURIComponent(serializePath('simple', false, slug, undefined)),
    );
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
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

   * @param slug The group's slug
   * @returns {Promise<any>} - The promise with the result
   */
  async delete(slug: string): Promise<any> {
    if (slug === undefined) {
      throw new Error('The following parameter is required: slug, cannot be empty or blank');
    }
    let urlEndpoint = '/v3/workplace/groups/group/{slug}';
    urlEndpoint = urlEndpoint.replace(
      '{slug}',
      encodeURIComponent(serializePath('simple', false, slug, undefined)),
    );
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.httpClient.delete(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }

  /**
   * @summary Add Member

   * @param slug The group's slug
   * @returns {Promise<any>} - The promise with the result
   */
  async addMember(input: AddMemberRequest.Model, slug: string): Promise<any> {
    if (slug === undefined) {
      throw new Error('The following parameter is required: slug, cannot be empty or blank');
    }
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    let urlEndpoint = '/v3/workplace/groups/group/{slug}/members';
    urlEndpoint = urlEndpoint.replace(
      '{slug}',
      encodeURIComponent(serializePath('simple', false, slug, undefined)),
    );
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
    const responseModel = response.data;
    return responseModel;
  }

  /**
   * @summary Delete Member

   * @param slug The group's slug
   * @param type_ Needed input variable
   * @param memberSlug The member's slug
   * @returns {Promise<any>} - The promise with the result
   */
  async deleteMember(slug: string, type: Type.Model, memberSlug: string): Promise<any> {
    if (slug === undefined || type === undefined || memberSlug === undefined) {
      throw new Error(
        'The following are required parameters: slug,type,memberSlug, cannot be empty or blank',
      );
    }
    let urlEndpoint = '/v3/workplace/groups/group/{slug}/members/{type}/{member_slug}';
    urlEndpoint = urlEndpoint.replace(
      '{slug}',
      encodeURIComponent(serializePath('simple', false, slug, undefined)),
    );
    urlEndpoint = urlEndpoint.replace(
      '{type_}',
      encodeURIComponent(serializePath('simple', false, type, undefined)),
    );
    urlEndpoint = urlEndpoint.replace(
      '{member_slug}',
      encodeURIComponent(serializePath('simple', false, memberSlug, undefined)),
    );
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.httpClient.delete(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }
}
