import BaseService from './base';

import { ConfigLogsList200Response } from '../models/ConfigLogsList200Response';
import { ConfigLogsGet200Response } from '../models/ConfigLogsGet200Response';
import { ConfigLogsRollback200Response } from '../models/ConfigLogsRollback200Response';

export default class ConfigLogsService extends BaseService {
  /**
   * @summary List
   * @description Config Logs

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @param optionalParams - Optional parameters
   * @param optionalParams.page - Page number
   * @param optionalParams.perPage - Items per page
   * @returns {Promise<ConfigLogsList200Response.Model>} - The promise with the result
   */
  async list(
    project: string,
    config: string,
    optionalParams: { page?: number; perPage?: number } = {},
  ): Promise<ConfigLogsList200Response.Model> {
    const { page, perPage } = optionalParams;
    if (project === undefined || config === undefined) {
      throw new Error(
        'The following are required parameters: project,config, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(`project=${project}`);
    }
    if (config) {
      queryParams.push(`config=${config}`);
    }
    if (page) {
      queryParams.push(`page=${page}`);
    }
    if (perPage) {
      queryParams.push(`per_page=${perPage}`);
    }
    const urlEndpoint = '/v3/configs/config/logs';
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
    const responseModel = response.data as ConfigLogsList200Response.Model;
    return responseModel;
  }

  /**
   * @summary Retrieve
   * @description Config Log

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @param log Unique identifier for the log object.
   * @returns {Promise<ConfigLogsGet200Response.Model>} - The promise with the result
   */
  async get(project: string, config: string, log: string): Promise<ConfigLogsGet200Response.Model> {
    if (project === undefined || config === undefined || log === undefined) {
      throw new Error(
        'The following are required parameters: project,config,log, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(`project=${project}`);
    }
    if (config) {
      queryParams.push(`config=${config}`);
    }
    if (log) {
      queryParams.push(`log=${log}`);
    }
    const urlEndpoint = '/v3/configs/config/logs/log';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.http.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ConfigLogsGet200Response.Model;
    return responseModel;
  }

  /**
   * @summary Rollback
   * @description Config Log

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @param log Unique identifier for the log object.
   * @returns {Promise<ConfigLogsRollback200Response.Model>} - The promise with the result
   */
  async rollback(
    project: string,
    config: string,
    log: string,
  ): Promise<ConfigLogsRollback200Response.Model> {
    if (project === undefined || config === undefined || log === undefined) {
      throw new Error(
        'The following are required parameters: project,config,log, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(`project=${project}`);
    }
    if (config) {
      queryParams.push(`config=${config}`);
    }
    if (log) {
      queryParams.push(`log=${log}`);
    }
    const urlEndpoint = '/v3/configs/config/logs/log/rollback';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.http.post(
      finalUrl,
      { project, config, log },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ConfigLogsRollback200Response.Model;
    return responseModel;
  }
}
