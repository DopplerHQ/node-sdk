import BaseService from '../../BaseService';

import { ProjectRolesListResponse } from './models/ProjectRolesListResponse';
import { ProjectRolesCreateResponse } from './models/ProjectRolesCreateResponse';
import { ProjectRolesGetResponse } from './models/ProjectRolesGetResponse';
import { ProjectRolesUpdateResponse } from './models/ProjectRolesUpdateResponse';
import { ProjectRolesListPermissionsResponse } from './models/ProjectRolesListPermissionsResponse';

import { serializePath } from '../../http/QuerySerializer';

export class ProjectRolesService extends BaseService {
  /**
   * @summary List

   * @returns {Promise<ProjectRolesListResponse>} - The promise with the result
   */
  async list(): Promise<ProjectRolesListResponse> {
    const urlEndpoint = '/v3/projects/roles';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ProjectRolesListResponse;
    return responseModel;
  }

  /**
   * @summary Create

   * @returns {Promise<ProjectRolesCreateResponse>} - The promise with the result
   */
  async create(): Promise<ProjectRolesCreateResponse> {
    const urlEndpoint = '/v3/projects/roles';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.httpClient.post(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ProjectRolesCreateResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve

   * @param role The role's unique identifier
   * @returns {Promise<ProjectRolesGetResponse>} - The promise with the result
   */
  async get(role: string): Promise<ProjectRolesGetResponse> {
    if (role === undefined) {
      throw new Error('The following parameter is required: role, cannot be empty or blank');
    }
    let urlEndpoint = '/v3/projects/roles/role/{role}';
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
    const responseModel = response.data as ProjectRolesGetResponse;
    return responseModel;
  }

  /**
   * @summary Update

   * @param role The role's unique identifier
   * @returns {Promise<ProjectRolesUpdateResponse>} - The promise with the result
   */
  async update(role: string): Promise<ProjectRolesUpdateResponse> {
    if (role === undefined) {
      throw new Error('The following parameter is required: role, cannot be empty or blank');
    }
    let urlEndpoint = '/v3/projects/roles/role/{role}';
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
    const responseModel = response.data as ProjectRolesUpdateResponse;
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
    let urlEndpoint = '/v3/projects/roles/role/{role}';
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

  /**
   * @summary List Permissions

   * @returns {Promise<ProjectRolesListPermissionsResponse>} - The promise with the result
   */
  async listPermissions(): Promise<ProjectRolesListPermissionsResponse> {
    const urlEndpoint = '/v3/projects/permissions';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ProjectRolesListPermissionsResponse;
    return responseModel;
  }
}
