import BaseService from './base';

import { ListResponse } from '../models/ListResponse';
import { CreateRequest } from '../models/CreateRequest';
import { CreateResponse } from '../models/CreateResponse';
import { GetResponse } from '../models/GetResponse';
import { UpdateRequest } from '../models/UpdateRequest';
import { UpdateResponse } from '../models/UpdateResponse';

import { serializeQuery, serializeHeader, serializePath } from '../http/QuerySerializer';

export default class ServiceAccountsService extends BaseService {
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
    const responseModel = response.data as ListResponse.Model;
    return responseModel;
  }

  /**
   * @summary Create

   * @returns {Promise<CreateResponse.Model>} - The promise with the result
   */
  async create(input: CreateRequest.Model): Promise<CreateResponse.Model> {
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
    const responseModel = response.data as CreateResponse.Model;
    return responseModel;
  }

  /**
   * @summary Retrieve

   * @param slug Slug of the service account
   * @returns {Promise<GetResponse.Model>} - The promise with the result
   */
  async get(slug: string): Promise<GetResponse.Model> {
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
    const responseModel = response.data as GetResponse.Model;
    return responseModel;
  }

  /**
   * @summary Update

   * @param slug Slug of the service account
   * @returns {Promise<UpdateResponse.Model>} - The promise with the result
   */
  async update(input: UpdateRequest.Model, slug: string): Promise<UpdateResponse.Model> {
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
    const responseModel = response.data as UpdateResponse.Model;
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
