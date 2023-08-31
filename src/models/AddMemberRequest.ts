import BaseModel from './base';

export namespace AddMemberRequest {
  export type Type = 'workplace_user';

  export interface Model extends BaseModel {
    /**
     * The member's slug
     */
    slug: string;
    type_: Type;
  }
}
