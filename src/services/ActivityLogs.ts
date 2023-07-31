import BaseService from './base';

import { ActivityLogsRetrieve200Response } from '../models/ActivityLogsRetrieve200Response';
import { ActivityLogsList200Response } from '../models/ActivityLogsList200Response';

export default class ActivityLogsService extends BaseService {
  /**
   * @summary Retrieve
   * @description Activity Log

   * @param log Unique identifier for the log object.
   * @returns {Promise<ActivityLogsRetrieve200Response.Model>} - The promise with the result
   */
  async retrieve(log: string): Promise<ActivityLogsRetrieve200Response.Model> {
    if (log === undefined) {
      throw new Error('The following parameter is required: log, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (log) {
      queryParams.push(`log=${log}`);
    }
    const urlEndpoint = '/v3/logs/log';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.http.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ActivityLogsRetrieve200Response.Model;
    return responseModel;
  }

  /**
   * @summary List
   * @description Activity Logs

   * @param optionalParams - Optional parameters
   * @param optionalParams.page - Page number
   * @param optionalParams.perPage - Items per page
   * @returns {Promise<ActivityLogsList200Response.Model>} - The promise with the result
   */
  async list(
    optionalParams: { page?: string; perPage?: number } = {},
  ): Promise<ActivityLogsList200Response.Model> {
    const { page, perPage } = optionalParams;

    const queryParams: string[] = [];
    if (page) {
      queryParams.push(`page=${page}`);
    }
    if (perPage) {
      queryParams.push(`per_page=${perPage}`);
    }
    const urlEndpoint = '/v3/logs';
    const urlParams = queryParams.length > 0 ? `?${encodeURI(queryParams.join('&'))}` : '';
    const finalUrl = `${this.baseUrl + urlEndpoint}${urlParams}`;
    const response: any = await this.http.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ActivityLogsList200Response.Model;
    return responseModel;
  }
}
