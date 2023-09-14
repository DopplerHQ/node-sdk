import BaseService from '../../BaseService';

import { WorkplaceGetResponse } from './models/WorkplaceGetResponse';
import { WorkplaceUpdateResponse } from './models/WorkplaceUpdateResponse';
import { WorkplaceUpdateRequest } from './models/WorkplaceUpdateRequest';

import { serializeQuery } from '../../http/QuerySerializer';

export class WorkplaceService extends BaseService {
  /**
   * @summary Retrieve
   * @description Get information about the specific workplace

   * @param optionalParams - Optional parameters
   * @param optionalParams.settings - If true, the api will return more information if the workplace has e.g. SAML enabled and SCIM enabled
   * @returns {Promise<WorkplaceGetResponse>} - The promise with the result
   */
  async get(optionalParams: { settings?: boolean } = {}): Promise<WorkplaceGetResponse> {
    const { settings } = optionalParams;

    const queryParams: string[] = [];
    if (settings) {
      queryParams.push(serializeQuery('form', true, 'settings', settings));
    }
    const urlEndpoint = '/v3/workplace';
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
    const responseModel = response.data as WorkplaceGetResponse;
    return responseModel;
  }

  /**
   * @summary Update
   * @description Workplace

   * @returns {Promise<WorkplaceUpdateResponse>} - The promise with the result
   */
  async update(input: WorkplaceUpdateRequest): Promise<WorkplaceUpdateResponse> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/workplace';
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
    const responseModel = response.data as WorkplaceUpdateResponse;
    return responseModel;
  }
}
