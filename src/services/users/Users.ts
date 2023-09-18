import BaseService from '../../BaseService';

import { UsersListResponse } from './models/UsersListResponse';
import { UsersGetResponse } from './models/UsersGetResponse';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class UsersService extends BaseService {
  /**
   * @summary List
   * @description Get all users within a workplace

   * @param optionalParams - Optional parameters
   * @param optionalParams.page - The page of users to fetch
   * @returns {Promise<UsersListResponse>} - The promise with the result
   */
  async list(optionalParams: { page?: number } = {}): Promise<UsersListResponse> {
    const { page } = optionalParams;

    const queryParams: string[] = [];
    if (page) {
      queryParams.push(serializeQuery('form', true, 'page', page));
    }
    const urlEndpoint = '/v3/workplace/users';
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
    const responseModel = response.data as UsersListResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve
   * @description Get a specific user in a workplace

   * @param slug The slug of the workplace user
   * @returns {Promise<UsersGetResponse>} - The promise with the result
   */
  async get(slug: string): Promise<UsersGetResponse> {
    if (slug === undefined) {
      throw new Error('The following parameter is required: slug, cannot be empty or blank');
    }
    let urlEndpoint = '/v3/workplace/users/{slug}';
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
    const responseModel = response.data as UsersGetResponse;
    return responseModel;
  }
}
