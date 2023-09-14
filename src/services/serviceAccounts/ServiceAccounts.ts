import BaseService from '../../BaseService';

import { ServiceAccountsListResponse } from './models/ServiceAccountsListResponse';
import { ServiceAccountsCreateResponse } from './models/ServiceAccountsCreateResponse';
import { ServiceAccountsCreateRequest } from './models/ServiceAccountsCreateRequest';
import { ServiceAccountsGetResponse } from './models/ServiceAccountsGetResponse';
import { ServiceAccountsUpdateResponse } from './models/ServiceAccountsUpdateResponse';
import { ServiceAccountsUpdateRequest } from './models/ServiceAccountsUpdateRequest';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class ServiceAccountsService extends BaseService {
  /**
   * @summary List

   * @param optionalParams - Optional parameters
   * @param optionalParams.page - Needed input variable
   * @param optionalParams.perPage - Needed input variable
   * @returns {Promise<ServiceAccountsListResponse>} - The promise with the result
   */
  async list(
    optionalParams: { page?: number; perPage?: number } = {},
  ): Promise<ServiceAccountsListResponse> {
    const { page, perPage } = optionalParams;

    const queryParams: string[] = [];
    if (page) {
      queryParams.push(serializeQuery('form', true, 'page', page));
    }
    if (perPage) {
      queryParams.push(serializeQuery('form', true, 'per_page', perPage));
    }
    const urlEndpoint = '/v3/workplace/service_accounts';
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
    const responseModel = response.data as ServiceAccountsListResponse;
    return responseModel;
  }

  /**
   * @summary Create

   * @returns {Promise<ServiceAccountsCreateResponse>} - The promise with the result
   */
  async create(input: ServiceAccountsCreateRequest): Promise<ServiceAccountsCreateResponse> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/workplace/service_accounts';
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
    const responseModel = response.data as ServiceAccountsCreateResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve

   * @param slug Slug of the service account
   * @returns {Promise<ServiceAccountsGetResponse>} - The promise with the result
   */
  async get(slug: string): Promise<ServiceAccountsGetResponse> {
    if (slug === undefined) {
      throw new Error('The following parameter is required: slug, cannot be empty or blank');
    }
    let urlEndpoint = '/v3/workplace/service_accounts/service_account/{slug}';
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
    const responseModel = response.data as ServiceAccountsGetResponse;
    return responseModel;
  }

  /**
   * @summary Update

   * @param slug Slug of the service account
   * @returns {Promise<ServiceAccountsUpdateResponse>} - The promise with the result
   */
  async update(
    input: ServiceAccountsUpdateRequest,
    slug: string,
  ): Promise<ServiceAccountsUpdateResponse> {
    if (slug === undefined) {
      throw new Error('The following parameter is required: slug, cannot be empty or blank');
    }
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    let urlEndpoint = '/v3/workplace/service_accounts/service_account/{slug}';
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
    const responseModel = response.data as ServiceAccountsUpdateResponse;
    return responseModel;
  }

  /**
   * @summary Delete

   * @param slug Slug of the service account
   * @returns {Promise<any>} - The promise with the result
   */
  async delete(slug: string): Promise<any> {
    if (slug === undefined) {
      throw new Error('The following parameter is required: slug, cannot be empty or blank');
    }
    let urlEndpoint = '/v3/workplace/service_accounts/service_account/{slug}';
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
}
