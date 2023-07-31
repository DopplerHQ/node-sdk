import BaseService from './base';

import { SecretsUpdateRequest } from '../models/SecretsUpdateRequest';
import { SecretsUpdate200Response } from '../models/SecretsUpdate200Response';
import { SecretsGet200Response } from '../models/SecretsGet200Response';
import { SecretsDownload200Response } from '../models/SecretsDownload200Response';
import { SecretsListNames200Response } from '../models/SecretsListNames200Response';
import { SecretsUpdateNoteRequest } from '../models/SecretsUpdateNoteRequest';
import { SecretsUpdateNote200Response } from '../models/SecretsUpdateNote200Response';

export default class SecretsService extends BaseService {
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
   * @returns {Promise<any>} - The promise with the result
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
  ): Promise<any> {
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
      queryParams.push(`project=${project}`);
    }
    if (config) {
      queryParams.push(`config=${config}`);
    }
    if (accepts) {
      headers['accepts'] = accepts;
    }
    if (includeDynamicSecrets) {
      queryParams.push(`include_dynamic_secrets=${includeDynamicSecrets}`);
    }
    if (dynamicSecretsTtlSec) {
      queryParams.push(`dynamic_secrets_ttl_sec=${dynamicSecretsTtlSec}`);
    }
    if (secrets) {
      queryParams.push(`secrets=${secrets}`);
    }
    if (includeManagedSecrets) {
      queryParams.push(`include_managed_secrets=${includeManagedSecrets}`);
    }
    const urlEndpoint = '/v3/configs/config/secrets';
    const urlParams = queryParams.length > 0 ? `?${encodeURI(queryParams.join('&'))}` : '';
    const finalUrl = `${this.baseUrl + urlEndpoint}${urlParams}`;
    const response: any = await this.http.get(
      finalUrl,
      {},
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }

  /**
   * @summary Update
   * @description Secrets

   * @returns {Promise<SecretsUpdate200Response.Model>} - The promise with the result
   */
  async update(input: SecretsUpdateRequest.Model): Promise<SecretsUpdate200Response.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/secrets';
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
    const responseModel = response.data as SecretsUpdate200Response.Model;
    return responseModel;
  }

  /**
   * @summary Retrieve
   * @description Secret

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @param name Name of the secret.
   * @returns {Promise<SecretsGet200Response.Model>} - The promise with the result
   */
  async get(project: string, config: string, name: string): Promise<SecretsGet200Response.Model> {
    if (project === undefined || config === undefined || name === undefined) {
      throw new Error(
        'The following are required parameters: project,config,name, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(`project=${project}`);
    }
    if (config) {
      queryParams.push(`config=${config}`);
    }
    if (name) {
      queryParams.push(`name=${name}`);
    }
    const urlEndpoint = '/v3/configs/config/secret';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.http.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as SecretsGet200Response.Model;
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
   * @returns {Promise<SecretsDownload200Response.Model>} - The promise with the result
   */
  async download(
    project: string,
    config: string,
    optionalParams: {
      format?: string;
      nameTransformer?: string;
      includeDynamicSecrets?: boolean;
      dynamicSecretsTtlSec?: number;
    } = {},
  ): Promise<SecretsDownload200Response.Model> {
    const { format, nameTransformer, includeDynamicSecrets, dynamicSecretsTtlSec } = optionalParams;
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
    if (format) {
      queryParams.push(`format=${format}`);
    }
    if (nameTransformer) {
      queryParams.push(`name_transformer=${nameTransformer}`);
    }
    if (includeDynamicSecrets) {
      queryParams.push(`include_dynamic_secrets=${includeDynamicSecrets}`);
    }
    if (dynamicSecretsTtlSec) {
      queryParams.push(`dynamic_secrets_ttl_sec=${dynamicSecretsTtlSec}`);
    }
    const urlEndpoint = '/v3/configs/config/secrets/download';
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
    const responseModel = response.data as SecretsDownload200Response.Model;
    return responseModel;
  }

  /**
   * @summary List
   * @description Secret Names

   * @param project Unique identifier for the project object.
   * @param config Name of the config object.
   * @param optionalParams - Optional parameters
   * @param optionalParams.includeDynamicSecrets - Whether or not to issue leases and include dynamic secret values for the config
   * @param optionalParams.includeManagedSecrets - Whether to include Doppler's auto-generated (managed) secrets
   * @returns {Promise<SecretsListNames200Response.Model>} - The promise with the result
   */
  async listNames(
    project: string,
    config: string,
    optionalParams: { includeDynamicSecrets?: boolean; includeManagedSecrets?: boolean } = {},
  ): Promise<SecretsListNames200Response.Model> {
    const { includeDynamicSecrets, includeManagedSecrets } = optionalParams;
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
    if (includeDynamicSecrets) {
      queryParams.push(`include_dynamic_secrets=${includeDynamicSecrets}`);
    }
    if (includeManagedSecrets) {
      queryParams.push(`include_managed_secrets=${includeManagedSecrets}`);
    }
    const urlEndpoint = '/v3/configs/config/secrets/names';
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
    const responseModel = response.data as SecretsListNames200Response.Model;
    return responseModel;
  }

  /**
   * @summary Note
   * @description Set a note on a secret

   * @returns {Promise<SecretsUpdateNote200Response.Model>} - The promise with the result
   */
  async updateNote(
    input: SecretsUpdateNoteRequest.Model,
  ): Promise<SecretsUpdateNote200Response.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/secrets/note';
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
    const responseModel = response.data as SecretsUpdateNote200Response.Model;
    return responseModel;
  }
}
