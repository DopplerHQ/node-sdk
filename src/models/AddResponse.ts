import BaseModel from './base';

export namespace AddResponse {
  export type Environments = string[];

  export interface Model extends BaseModel {
    member?: Member;
  }
  export interface Member {
    slug?: string;
    role?: Role;
    access_all_environments?: boolean;
    environments?: Environments;
    type_?: string;
  }
  export interface Role {
    identifier?: string;
  }
}
