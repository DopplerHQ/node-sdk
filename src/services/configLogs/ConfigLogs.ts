import BaseService from '../../BaseService';

import { ConfigLogsListResponse } from './models/ConfigLogsListResponse';
import { ConfigLogsGetResponse } from './models/ConfigLogsGetResponse';
import { RollbackResponse } from './models/RollbackResponse';

import { serializeQuery } from '../../http/QuerySerializer';

export class ConfigLogsService extends BaseService {
  /**
   * @summary List
   * @description Config Logs

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @param optionalParams - Optional parameters
   * @param optionalParams.page - Page number
   * @param optionalParams.perPage - Items per page
   * @returns {Promise<ConfigLogsListResponse>} - The promise with the result
   */
  async list(
    project: string,
    config: string,
    optionalParams: { page?: number; perPage?: number } = {},
  ): Promise<ConfigLogsListResponse> {
    const { page, perPage } = optionalParams;
    if (project === undefined || config === undefined) {
      throw new Error(
        'The following are required parameters: project,config, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    if (config) {
      queryParams.push(serializeQuery('form', true, 'config', config));
    }
    if (page) {
      queryParams.push(serializeQuery('form', true, 'page', page));
    }
    if (perPage) {
      queryParams.push(serializeQuery('form', true, 'per_page', perPage));
    }
    const urlEndpoint = '/v3/configs/config/logs';
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
    const responseModel = response.data as ConfigLogsListResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve
   * @description Config Log

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @param log Unique identifier for the log object.
   * @returns {Promise<ConfigLogsGetResponse>} - The promise with the result
   */
  async get(project: string, config: string, log: string): Promise<ConfigLogsGetResponse> {
    if (project === undefined || config === undefined || log === undefined) {
      throw new Error(
        'The following are required parameters: project,config,log, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    if (config) {
      queryParams.push(serializeQuery('form', true, 'config', config));
    }
    if (log) {
      queryParams.push(serializeQuery('form', true, 'log', log));
    }
    const urlEndpoint = '/v3/configs/config/logs/log';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ConfigLogsGetResponse;
    return responseModel;
  }

  /**
   * @summary Rollback
   * @description Config Log

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @param log Unique identifier for the log object.
   * @returns {Promise<RollbackResponse>} - The promise with the result
   */
  async rollback(project: string, config: string, log: string): Promise<RollbackResponse> {
    if (project === undefined || config === undefined || log === undefined) {
      throw new Error(
        'The following are required parameters: project,config,log, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    if (config) {
      queryParams.push(serializeQuery('form', true, 'config', config));
    }
    if (log) {
      queryParams.push(serializeQuery('form', true, 'log', log));
    }
    const urlEndpoint = '/v3/configs/config/logs/log/rollback';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.post(
      finalUrl,
      { project, config, log },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as RollbackResponse;
    return responseModel;
  }
}
