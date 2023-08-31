import BaseService from './base';

import { ListResponse } from '../models/ListResponse';
import { CreateResponse } from '../models/CreateResponse';
import { ListPermissionsResponse } from '../models/ListPermissionsResponse';
import { GetResponse } from '../models/GetResponse';
import { UpdateResponse } from '../models/UpdateResponse';

import { serializeQuery, serializeHeader, serializePath } from '../http/QuerySerializer';

export default class WorkplaceRolesService extends BaseService {
  /**
   * @summary List

   * @returns {Promise<ListResponse.Model>} - The promise with the result
   */
  async list(): Promise<ListResponse.Model> {
    const urlEndpoint = '/v3/workplace/roles';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
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
   * @summary Create

   * @returns {Promise<CreateResponse.Model>} - The promise with the result
   */
  async create(): Promise<CreateResponse.Model> {
    const urlEndpoint = '/v3/workplace/roles';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.httpClient.post(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as CreateResponse.Model;
    return responseModel;
  }

  /**
   * @summary List Permissions

   * @returns {Promise<ListPermissionsResponse.Model>} - The promise with the result
   */
  async listPermissions(): Promise<ListPermissionsResponse.Model> {
    const urlEndpoint = '/v3/workplace/permissions';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ListPermissionsResponse.Model;
    return responseModel;
  }

  /**
   * @summary Retrieve

   * @param role The role's unique identifier
   * @returns {Promise<GetResponse.Model>} - The promise with the result
   */
  async get(role: string): Promise<GetResponse.Model> {
    if (role === undefined) {
      throw new Error('The following parameter is required: role, cannot be empty or blank');
    }
    let urlEndpoint = '/v3/workplace/roles/role/{role}';
    urlEndpoint = urlEndpoint.replace(
      '{role}',
      encodeURIComponent(serializePath('simple', false, role, undefined)),
    );
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
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
   * @summary Update

   * @param role The role's unique identifier
   * @returns {Promise<UpdateResponse.Model>} - The promise with the result
   */
  async update(role: string): Promise<UpdateResponse.Model> {
    if (role === undefined) {
      throw new Error('The following parameter is required: role, cannot be empty or blank');
    }
    let urlEndpoint = '/v3/workplace/roles/role/{role}';
    urlEndpoint = urlEndpoint.replace(
      '{role}',
      encodeURIComponent(serializePath('simple', false, role, undefined)),
    );
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.httpClient.patch(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as UpdateResponse.Model;
    return responseModel;
  }

  /**
   * @summary Delete

   * @param role The role's unique identifier
   * @returns {Promise<any>} - The promise with the result
   */
  async delete(role: string): Promise<any> {
    if (role === undefined) {
      throw new Error('The following parameter is required: role, cannot be empty or blank');
    }
    let urlEndpoint = '/v3/workplace/roles/role/{role}';
    urlEndpoint = urlEndpoint.replace(
      '{role}',
      encodeURIComponent(serializePath('simple', false, role, undefined)),
    );
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.httpClient.delete(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }
}
