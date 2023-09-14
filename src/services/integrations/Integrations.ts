import BaseService from '../../BaseService';

import { IntegrationsListResponse } from './models/IntegrationsListResponse';
import { IntegrationsCreateResponse } from './models/IntegrationsCreateResponse';
import { IntegrationsCreateRequest } from './models/IntegrationsCreateRequest';
import { IntegrationsGetResponse } from './models/IntegrationsGetResponse';
import { IntegrationsUpdateResponse } from './models/IntegrationsUpdateResponse';
import { IntegrationsDeleteResponse } from './models/IntegrationsDeleteResponse';
import { IntegrationsUpdateRequest } from './models/IntegrationsUpdateRequest';

import { serializeQuery } from '../../http/QuerySerializer';

export class IntegrationsService extends BaseService {
  /**
   * @summary List
   * @description List all existing integrations

   * @returns {Promise<IntegrationsListResponse>} - The promise with the result
   */
  async list(): Promise<IntegrationsListResponse> {
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
    const responseModel = response.data as IntegrationsListResponse;
    return responseModel;
  }

  /**
   * @summary Create
   * @description Create a new external integration.

   * @returns {Promise<IntegrationsCreateResponse>} - The promise with the result
   */
  async create(input: IntegrationsCreateRequest): Promise<IntegrationsCreateResponse> {
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
    const responseModel = response.data as IntegrationsCreateResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve
   * @description Retrieve an existing integration

   * @param integration The integration slug
   * @returns {Promise<IntegrationsGetResponse>} - The promise with the result
   */
  async get(integration: string): Promise<IntegrationsGetResponse> {
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
    const responseModel = response.data as IntegrationsGetResponse;
    return responseModel;
  }

  /**
   * @summary Update
   * @description Update an existing integration.

   * @param integration The slug of the integration to update
   * @returns {Promise<IntegrationsUpdateResponse>} - The promise with the result
   */
  async update(
    input: IntegrationsUpdateRequest,
    integration: string,
  ): Promise<IntegrationsUpdateResponse> {
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
    const responseModel = response.data as IntegrationsUpdateResponse;
    return responseModel;
  }

  /**
   * @summary Delete
   * @description Delete an existing integration.

   * @param integration The slug of the integration to delete
   * @returns {Promise<IntegrationsDeleteResponse>} - The promise with the result
   */
  async delete(integration: string): Promise<IntegrationsDeleteResponse> {
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
    const responseModel = response.data as IntegrationsDeleteResponse;
    return responseModel;
  }
}
