import BaseService from './base';

import { IssueLeaseRequest } from '../models/IssueLeaseRequest';
import { IssueLeaseResponse } from '../models/IssueLeaseResponse';
import { RevokeLeaseRequest } from '../models/RevokeLeaseRequest';
import { RevokeLeaseResponse } from '../models/RevokeLeaseResponse';

import { serializeQuery, serializeHeader, serializePath } from '../http/QuerySerializer';

export default class DynamicSecretsService extends BaseService {
  /**
   * @summary Issue Lease
   * @description Issue a lease for a dynamic secret

   * @returns {Promise<IssueLeaseResponse.Model>} - The promise with the result
   */
  async issueLease(input: IssueLeaseRequest.Model): Promise<IssueLeaseResponse.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/dynamic_secrets/dynamic_secret/leases';
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
    const responseModel = response.data as IssueLeaseResponse.Model;
    return responseModel;
  }

  /**
   * @summary Revoke Lease

   * @returns {Promise<RevokeLeaseResponse.Model>} - The promise with the result
   */
  async revokeLease(input: RevokeLeaseRequest.Model): Promise<RevokeLeaseResponse.Model> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/dynamic_secrets/dynamic_secret/leases/lease';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.httpClient.delete(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as RevokeLeaseResponse.Model;
    return responseModel;
  }
}
