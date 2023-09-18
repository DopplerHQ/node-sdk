import BaseService from '../../BaseService';

import { SecretsListResponse } from './models/SecretsListResponse';
import { UpdateResponse } from './models/UpdateResponse';
import { UpdateRequest } from './models/UpdateRequest';
import { SecretsGetResponse } from './models/SecretsGetResponse';
import { Format } from './models/Format';
import { NameTransformer } from './models/NameTransformer';
import { DownloadResponse } from './models/DownloadResponse';
import { NamesResponse } from './models/NamesResponse';
import { UpdateNoteResponse } from './models/UpdateNoteResponse';
import { UpdateNoteRequest } from './models/UpdateNoteRequest';

import { serializeQuery, serializeHeader } from '../../http/QuerySerializer';

export class SecretsService extends BaseService {
  /**
   * @summary List
   * @description Secrets

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @param optionalParams - Optional parameters
   * @param optionalParams.accepts - Available options are: **application/json**, **text/plain**
   * @param optionalParams.includeDynamicSecrets - Whether or not to issue leases and include dynamic secret values for the config
   * @param optionalParams.dynamicSecretsTtlSec - The number of seconds until dynamic leases expire. Must be used with `include_dynamic_secrets`. Defaults to 1800 (30 minutes).
   * @param optionalParams.secrets - A comma-separated list of secrets to include in the response
   * @param optionalParams.includeManagedSecrets - Whether to include Doppler's auto-generated (managed) secrets
   * @returns {Promise<SecretsListResponse>} - The promise with the result
   */
  async list(
    project: string,
    config: string,
    optionalParams: {
      accepts?: string;
      includeDynamicSecrets?: boolean;
      dynamicSecretsTtlSec?: number;
      secrets?: string;
      includeManagedSecrets?: boolean;
    } = {},
  ): Promise<SecretsListResponse> {
    const { accepts, includeDynamicSecrets, dynamicSecretsTtlSec, secrets, includeManagedSecrets } =
      optionalParams;
    if (project === undefined || config === undefined) {
      throw new Error(
        'The following are required parameters: project,config, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = {};
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    if (config) {
      queryParams.push(serializeQuery('form', true, 'config', config));
    }
    if (accepts) {
      headers['accepts'] = serializeHeader(false, accepts);
    }
    if (includeDynamicSecrets) {
      queryParams.push(
        serializeQuery('form', true, 'include_dynamic_secrets', includeDynamicSecrets),
      );
    }
    if (dynamicSecretsTtlSec) {
      queryParams.push(
        serializeQuery('form', true, 'dynamic_secrets_ttl_sec', dynamicSecretsTtlSec),
      );
    }
    if (secrets) {
      queryParams.push(serializeQuery('form', true, 'secrets', secrets));
    }
    if (includeManagedSecrets) {
      queryParams.push(
        serializeQuery('form', true, 'include_managed_secrets', includeManagedSecrets),
      );
    }
    const urlEndpoint = '/v3/configs/config/secrets';
    const urlParams = queryParams.length > 0 ? `?${encodeURI(queryParams.join('&'))}` : '';
    const finalUrl = `${this.baseUrl + urlEndpoint}${urlParams}`;
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as SecretsListResponse;
    return responseModel;
  }

  /**
   * @summary Update
   * @description Secrets

   * @returns {Promise<UpdateResponse>} - The promise with the result
   */
  async update(input: UpdateRequest): Promise<UpdateResponse> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/secrets';
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
    const responseModel = response.data as UpdateResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve
   * @description Secret

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @param name Name of the secret.
   * @returns {Promise<SecretsGetResponse>} - The promise with the result
   */
  async get(project: string, config: string, name: string): Promise<SecretsGetResponse> {
    if (project === undefined || config === undefined || name === undefined) {
      throw new Error(
        'The following are required parameters: project,config,name, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    if (config) {
      queryParams.push(serializeQuery('form', true, 'config', config));
    }
    if (name) {
      queryParams.push(serializeQuery('form', true, 'name', name));
    }
    const urlEndpoint = '/v3/configs/config/secret';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as SecretsGetResponse;
    return responseModel;
  }

  /**
   * @summary Delete
   * @description Secret

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @param name Name of the secret.
   * @returns {Promise<any>} - The promise with the result
   */
  async delete(project: string, config: string, name: string): Promise<any> {
    if (project === undefined || config === undefined || name === undefined) {
      throw new Error(
        'The following are required parameters: project,config,name, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    if (config) {
      queryParams.push(serializeQuery('form', true, 'config', config));
    }
    if (name) {
      queryParams.push(serializeQuery('form', true, 'name', name));
    }
    const urlEndpoint = '/v3/configs/config/secret';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.delete(
      finalUrl,
      { project, config, name },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }

  /**
   * @summary Download
   * @description Download Secrets

   * @param project Unique identifier for the project object. Not required if using a Service Token.
   * @param config Name of the config object. Not required if using a Service Token.
   * @param optionalParams - Optional parameters
   * @param optionalParams.format - Needed input variable
   * @param optionalParams.nameTransformer - Transform secret names to a different case
   * @param optionalParams.includeDynamicSecrets - Whether or not to issue leases and include dynamic secret values for the config
   * @param optionalParams.dynamicSecretsTtlSec - The number of seconds until dynamic leases expire. Must be used with `include_dynamic_secrets`. Defaults to 1800 (30 minutes).
   * @returns {Promise<DownloadResponse>} - The promise with the result
   */
  async download(
    project: string,
    config: string,
    optionalParams: {
      format?: Format;
      nameTransformer?: NameTransformer;
      includeDynamicSecrets?: boolean;
      dynamicSecretsTtlSec?: number;
    } = {},
  ): Promise<DownloadResponse> {
    const { format, nameTransformer, includeDynamicSecrets, dynamicSecretsTtlSec } = optionalParams;
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
    if (format) {
      queryParams.push(serializeQuery('form', true, 'format', format));
    }
    if (nameTransformer) {
      queryParams.push(serializeQuery('form', true, 'name_transformer', nameTransformer));
    }
    if (includeDynamicSecrets) {
      queryParams.push(
        serializeQuery('form', true, 'include_dynamic_secrets', includeDynamicSecrets),
      );
    }
    if (dynamicSecretsTtlSec) {
      queryParams.push(
        serializeQuery('form', true, 'dynamic_secrets_ttl_sec', dynamicSecretsTtlSec),
      );
    }
    const urlEndpoint = '/v3/configs/config/secrets/download';
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
    const responseModel = response.data as DownloadResponse;
    return responseModel;
  }

  /**
   * @summary List Names
   * @description Secret Names

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @param optionalParams - Optional parameters
   * @param optionalParams.includeDynamicSecrets - Whether or not to issue leases and include dynamic secret values for the config
   * @param optionalParams.includeManagedSecrets - Whether to include Doppler's auto-generated (managed) secrets
   * @returns {Promise<NamesResponse>} - The promise with the result
   */
  async names(
    project: string,
    config: string,
    optionalParams: { includeDynamicSecrets?: boolean; includeManagedSecrets?: boolean } = {},
  ): Promise<NamesResponse> {
    const { includeDynamicSecrets, includeManagedSecrets } = optionalParams;
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
    if (includeDynamicSecrets) {
      queryParams.push(
        serializeQuery('form', true, 'include_dynamic_secrets', includeDynamicSecrets),
      );
    }
    if (includeManagedSecrets) {
      queryParams.push(
        serializeQuery('form', true, 'include_managed_secrets', includeManagedSecrets),
      );
    }
    const urlEndpoint = '/v3/configs/config/secrets/names';
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
    const responseModel = response.data as NamesResponse;
    return responseModel;
  }

  /**
   * @summary Update Note
   * @description Set a note on a secret

   * @returns {Promise<UpdateNoteResponse>} - The promise with the result
   */
  async updateNote(input: UpdateNoteRequest): Promise<UpdateNoteResponse> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/secrets/note';
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
    const responseModel = response.data as UpdateNoteResponse;
    return responseModel;
  }
}
