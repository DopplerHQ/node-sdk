import BaseModel from './base';

export namespace ListPermissionsResponse {
  export type Permissions = string[];

  export interface Model extends BaseModel {
    permissions?: Permissions;
  }
}
