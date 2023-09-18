import BaseService from '../../BaseService';

import { WorkplaceGetResponse } from './models/WorkplaceGetResponse';
import { WorkplaceUpdateResponse } from './models/WorkplaceUpdateResponse';
import { WorkplaceUpdateRequest } from './models/WorkplaceUpdateRequest';

export class WorkplaceService extends BaseService {
  /**
   * @summary Retrieve

   * @returns {Promise<WorkplaceGetResponse>} - The promise with the result
   */
  async get(): Promise<WorkplaceGetResponse> {
    const urlEndpoint = '/v3/workplace';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
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
