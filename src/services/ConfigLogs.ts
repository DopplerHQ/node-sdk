import BaseService from './base';

import { ListResponse } from '../models/ListResponse';
import { GetResponse } from '../models/GetResponse';
import { RollbackResponse } from '../models/RollbackResponse';

import { serializeQuery, serializeHeader, serializePath } from '../http/QuerySerializer';

export default class ConfigLogsService extends BaseService {
  /**
   * @summary List
   * @description Config Logs

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @param optionalParams - Optional parameters
   * @param optionalParams.page - Page number
   * @param optionalParams.perPage - Items per page
   * @returns {Promise<ListResponse.Model>} - The promise with the result
   */
  async list(
    project: string,
    config: string,
    optionalParams: { page?: number; perPage?: number } = {},
  ): Promise<ListResponse.Model> {
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
    const responseModel = response.data as ListResponse.Model;
    return responseModel;
  }

  /**
   * @summary Retrieve
   * @description Config Log

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @param log Unique identifier for the log object.
   * @returns {Promise<GetResponse.Model>} - The promise with the result
   */
  async get(project: string, config: string, log: string): Promise<GetResponse.Model> {
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
    const responseModel = response.data as GetResponse.Model;
    return responseModel;
  }

  /**
   * @summary Rollback
   * @description Config Log

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @param log Unique identifier for the log object.
   * @returns {Promise<RollbackResponse.Model>} - The promise with the result
   */
  async rollback(project: string, config: string, log: string): Promise<RollbackResponse.Model> {
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
    const responseModel = response.data as RollbackResponse.Model;
    return responseModel;
  }
}
