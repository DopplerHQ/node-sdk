import BaseService from '../../BaseService';

import { RetrieveResponse } from './models/RetrieveResponse';
import { ActivityLogsListResponse } from './models/ActivityLogsListResponse';

import { serializeQuery } from '../../http/QuerySerializer';

export class ActivityLogsService extends BaseService {
  /**
   * @summary Retrieve
   * @description Activity Log

   * @param log Unique identifier for the log object.
   * @returns {Promise<RetrieveResponse>} - The promise with the result
   */
  async retrieve(log: string): Promise<RetrieveResponse> {
    if (log === undefined) {
      throw new Error('The following parameter is required: log, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (log) {
      queryParams.push(serializeQuery('form', true, 'log', log));
    }
    const urlEndpoint = '/v3/logs/log';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as RetrieveResponse;
    return responseModel;
  }

  /**
   * @summary List
   * @description Activity Logs

   * @param optionalParams - Optional parameters
   * @param optionalParams.page - Page number
   * @param optionalParams.perPage - Items per page
   * @returns {Promise<ActivityLogsListResponse>} - The promise with the result
   */
  async list(
    optionalParams: { page?: string; perPage?: number } = {},
  ): Promise<ActivityLogsListResponse> {
    const { page, perPage } = optionalParams;

    const queryParams: string[] = [];
    if (page) {
      queryParams.push(serializeQuery('form', true, 'page', page));
    }
    if (perPage) {
      queryParams.push(serializeQuery('form', true, 'per_page', perPage));
    }
    const urlEndpoint = '/v3/logs';
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
    const responseModel = response.data as ActivityLogsListResponse;
    return responseModel;
  }
}
