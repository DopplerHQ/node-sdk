import BaseService from '../../BaseService';

import { GetUsersResponse } from './models/GetUsersResponse';
import { GetUserResponse } from './models/GetUserResponse';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class AuditService extends BaseService {
  /**
   * @summary Workplace Users
   * @description Get all users of a workplace

   * @param optionalParams - Optional parameters
   * @param optionalParams.settings - If true, the api will return more information if users have e.g. SAML enabled and/or Multi Factor Auth enabled
   * @param optionalParams.page - The page of users to fetch
   * @returns {Promise<GetUsersResponse>} - The promise with the result
   */
  async getUsers(
    optionalParams: { settings?: boolean; page?: number } = {},
  ): Promise<GetUsersResponse> {
    const { settings, page } = optionalParams;

    const queryParams: string[] = [];
    if (settings) {
      queryParams.push(serializeQuery('form', true, 'settings', settings));
    }
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
    const responseModel = response.data as GetUsersResponse;
    return responseModel;
  }

  /**
   * @summary Workplace User
   * @description Get a specific user in a workplace

   * @param workplaceUserId The ID of the workplace user
   * @param optionalParams - Optional parameters
   * @param optionalParams.settings - If true, the api will return more information if the user has e.g. SAML enabled and/or Multi Factor Auth enabled
   * @returns {Promise<GetUserResponse>} - The promise with the result
   */
  async getUser(
    workplaceUserId: string,
    optionalParams: { settings?: boolean } = {},
  ): Promise<GetUserResponse> {
    const { settings } = optionalParams;
    if (workplaceUserId === undefined) {
      throw new Error(
        'The following parameter is required: workplaceUserId, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/v3/workplace/users/{workplace_user_id}';
    urlEndpoint = urlEndpoint.replace(
      '{workplace_user_id}',
      encodeURIComponent(serializePath('simple', false, workplaceUserId, undefined)),
    );
    if (settings) {
      queryParams.push(serializeQuery('form', true, 'settings', settings));
    }
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
    const responseModel = response.data as GetUserResponse;
    return responseModel;
  }
}
