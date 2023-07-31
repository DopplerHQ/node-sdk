import BaseService from './base';

import { IntegrationsCreateRequest } from '../models/IntegrationsCreateRequest';
import { IntegrationsCreate200Response } from '../models/IntegrationsCreate200Response';
import { IntegrationsGet200Response } from '../models/IntegrationsGet200Response';
import { IntegrationsUpdateRequest } from '../models/IntegrationsUpdateRequest';
import { IntegrationsUpdate200Response } from '../models/IntegrationsUpdate200Response';
import { IntegrationsDelete200Response } from '../models/IntegrationsDelete200Response';

export default class IntegrationsService extends BaseService {
  /**
   * @summary List
   * @description List all existing integrations

   * @returns {Promise<any>} - The promise with the result
   */
  async list(): Promise<any> {
    const urlEndpoint = '/v3/integrations';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.http.get(
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
   * @summary Create
   * @description Create a new external integration.

   * @returns {Promise<IntegrationsCreate200Response.Model>} - The promise with the result
   */
  async create(
    input: IntegrationsCreateRequest.Model,
  ): Promise<IntegrationsCreate200Response.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/integrations';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.http.post(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as IntegrationsCreate200Response.Model;
    return responseModel;
  }

  /**
   * @summary Retrieve
   * @description Retrieve an existing integration

   * @param integration The integration slug
   * @returns {Promise<IntegrationsGet200Response.Model>} - The promise with the result
   */
  async get(integration: string): Promise<IntegrationsGet200Response.Model> {
    if (integration === undefined) {
      throw new Error('The following parameter is required: integration, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (integration) {
      queryParams.push(`integration=${integration}`);
    }
    const urlEndpoint = '/v3/integrations/integration';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.http.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as IntegrationsGet200Response.Model;
    return responseModel;
  }

  /**
   * @summary Update
   * @description Update an existing integration.

   * @param integration The slug of the integration to update
   * @returns {Promise<IntegrationsUpdate200Response.Model>} - The promise with the result
   */
  async update(
    input: IntegrationsUpdateRequest.Model,
    integration: string,
  ): Promise<IntegrationsUpdate200Response.Model> {
    if (integration === undefined) {
      throw new Error('The following parameter is required: integration, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    if (integration) {
      queryParams.push(`integration=${integration}`);
    }
    const urlEndpoint = '/v3/integrations/integration';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.http.put(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as IntegrationsUpdate200Response.Model;
    return responseModel;
  }

  /**
   * @summary Delete
   * @description Delete an existing integration.

   * @param integration The slug of the integration to delete
   * @returns {Promise<IntegrationsDelete200Response.Model>} - The promise with the result
   */
  async delete(integration: string): Promise<IntegrationsDelete200Response.Model> {
    if (integration === undefined) {
      throw new Error('The following parameter is required: integration, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (integration) {
      queryParams.push(`integration=${integration}`);
    }
    const urlEndpoint = '/v3/integrations/integration';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.http.delete(
      finalUrl,
      { integration },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as IntegrationsDelete200Response.Model;
    return responseModel;
  }
}
