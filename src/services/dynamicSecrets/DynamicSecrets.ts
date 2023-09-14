import BaseService from '../../BaseService';

import { IssueLeaseResponse } from './models/IssueLeaseResponse';
import { IssueLeaseRequest } from './models/IssueLeaseRequest';
import { RevokeLeaseResponse } from './models/RevokeLeaseResponse';
import { RevokeLeaseRequest } from './models/RevokeLeaseRequest';

export class DynamicSecretsService extends BaseService {
  /**
   * @summary Issue Lease
   * @description Issue a lease for a dynamic secret

   * @returns {Promise<IssueLeaseResponse>} - The promise with the result
   */
  async issueLease(input: IssueLeaseRequest): Promise<IssueLeaseResponse> {
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
    const responseModel = response.data as IssueLeaseResponse;
    return responseModel;
  }

  /**
   * @summary Revoke Lease

   * @returns {Promise<RevokeLeaseResponse>} - The promise with the result
   */
  async revokeLease(input: RevokeLeaseRequest): Promise<RevokeLeaseResponse> {
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
    const responseModel = response.data as RevokeLeaseResponse;
    return responseModel;
  }
}
