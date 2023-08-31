import BaseService from './base';

import { ListResponse } from '../models/ListResponse';
import { CreateRequest } from '../models/CreateRequest';
import { CreateResponse } from '../models/CreateResponse';
import { GetResponse } from '../models/GetResponse';
import { UpdateRequest } from '../models/UpdateRequest';
import { UpdateResponse } from '../models/UpdateResponse';
import { DeleteResponse } from '../models/DeleteResponse';

import { serializeQuery, serializeHeader, serializePath } from '../http/QuerySerializer';

export default class IntegrationsService extends BaseService {
  /**
   * @summary List
   * @description List all existing integrations

   * @returns {Promise<ListResponse.Model>} - The promise with the result
   */
  async list(): Promise<ListResponse.Model> {
    const urlEndpoint = '/v3/integrations';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
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
   * @description Create a new external integration.

   * @returns {Promise<CreateResponse.Model>} - The promise with the result
   */
  async create(input: CreateRequest.Model): Promise<CreateResponse.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/integrations';
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
   * @description Retrieve an existing integration

   * @param integration The integration slug
   * @returns {Promise<GetResponse.Model>} - The promise with the result
   */
  async get(integration: string): Promise<GetResponse.Model> {
    if (integration === undefined) {
      throw new Error('The following parameter is required: integration, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (integration) {
      queryParams.push(serializeQuery('form', true, 'integration', integration));
    }
    const urlEndpoint = '/v3/integrations/integration';
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
   * @description Update an existing integration.

   * @param integration The slug of the integration to update
   * @returns {Promise<UpdateResponse.Model>} - The promise with the result
   */
  async update(input: UpdateRequest.Model, integration: string): Promise<UpdateResponse.Model> {
    if (integration === undefined) {
      throw new Error('The following parameter is required: integration, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    if (integration) {
      queryParams.push(serializeQuery('form', true, 'integration', integration));
    }
    const urlEndpoint = '/v3/integrations/integration';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.put(
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
   * @description Delete an existing integration.

   * @param integration The slug of the integration to delete
   * @returns {Promise<DeleteResponse.Model>} - The promise with the result
   */
  async delete(integration: string): Promise<DeleteResponse.Model> {
    if (integration === undefined) {
      throw new Error('The following parameter is required: integration, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (integration) {
      queryParams.push(serializeQuery('form', true, 'integration', integration));
    }
    const urlEndpoint = '/v3/integrations/integration';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.delete(
      finalUrl,
      { integration },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as DeleteResponse.Model;
    return responseModel;
  }
}
