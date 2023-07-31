import BaseService from './base';

import { DynamicSecretsIssueLeaseRequest } from '../models/DynamicSecretsIssueLeaseRequest';
import { DynamicSecretsRevokeLeaseRequest } from '../models/DynamicSecretsRevokeLeaseRequest';
import { DynamicSecretsRevokeLease200Response } from '../models/DynamicSecretsRevokeLease200Response';

export default class DynamicSecretsService extends BaseService {
  /**
   * @summary Issue Lease
   * @description Issue a lease for a dynamic secret

   * @returns {Promise<any>} - The promise with the result
   */
  async issueLease(input: DynamicSecretsIssueLeaseRequest.Model): Promise<any> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/dynamic_secrets/dynamic_secret/leases';
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
    const responseModel = response.data;
    return responseModel;
  }

  /**
   * @summary Revoke Lease

   * @returns {Promise<DynamicSecretsRevokeLease200Response.Model>} - The promise with the result
   */
  async revokeLease(
    input: DynamicSecretsRevokeLeaseRequest.Model,
  ): Promise<DynamicSecretsRevokeLease200Response.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/dynamic_secrets/dynamic_secret/leases/lease';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.http.delete(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as DynamicSecretsRevokeLease200Response.Model;
    return responseModel;
  }
}
