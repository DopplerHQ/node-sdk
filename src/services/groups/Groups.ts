import BaseService from '../../BaseService';

import { GroupsListResponse } from './models/GroupsListResponse';
import { GroupsCreateResponse } from './models/GroupsCreateResponse';
import { GroupsCreateRequest } from './models/GroupsCreateRequest';
import { GroupsGetResponse } from './models/GroupsGetResponse';
import { GroupsUpdateResponse } from './models/GroupsUpdateResponse';
import { GroupsUpdateRequest } from './models/GroupsUpdateRequest';
import { AddMemberRequest } from './models/AddMemberRequest';
import { GroupsType } from './models/GroupsType';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class GroupsService extends BaseService {
  /**
   * @summary List

   * @param optionalParams - Optional parameters
   * @param optionalParams.page - Needed input variable
   * @param optionalParams.perPage - Needed input variable
   * @returns {Promise<GroupsListResponse>} - The promise with the result
   */
  async list(
    optionalParams: { page?: number; perPage?: number } = {},
  ): Promise<GroupsListResponse> {
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
    const responseModel = response.data as GroupsListResponse;
    return responseModel;
  }

  /**
   * @summary Create

   * @returns {Promise<GroupsCreateResponse>} - The promise with the result
   */
  async create(input: GroupsCreateRequest): Promise<GroupsCreateResponse> {
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
    const responseModel = response.data as GroupsCreateResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve

   * @param slug The group's slug
   * @returns {Promise<GroupsGetResponse>} - The promise with the result
   */
  async get(slug: string): Promise<GroupsGetResponse> {
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
    const responseModel = response.data as GroupsGetResponse;
    return responseModel;
  }

  /**
   * @summary Update

   * @param slug The group's slug
   * @returns {Promise<GroupsUpdateResponse>} - The promise with the result
   */
  async update(input: GroupsUpdateRequest, slug: string): Promise<GroupsUpdateResponse> {
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
    const responseModel = response.data as GroupsUpdateResponse;
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
  async addMember(input: AddMemberRequest, slug: string): Promise<any> {
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
  async deleteMember(slug: string, type: GroupsType, memberSlug: string): Promise<any> {
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
