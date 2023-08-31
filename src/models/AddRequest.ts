import BaseModel from './base';

export namespace AddRequest {
  /**
   * Environment slugs to grant the member access to
   */
  export type Environments = string[];
  export type Type = 'workplace_user' | 'group' | 'invite' | 'service_account';

  export interface Model extends BaseModel {
    /**
     * Member's slug
     */
    slug: string;
    /**
     * Identifier of the project role
     */
    role?: string;
    environments?: Environments;
    type_: Type;
  }
}
