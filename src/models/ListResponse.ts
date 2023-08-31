import BaseModel from './base';

export namespace ListResponse {
  export type Name = string;
  export type Slug = string;
  export type CreatedAt = string;
  export type Identifier = string;
  export type Groups = {
    name?: Name;
    slug?: Slug;
    created_at?: CreatedAt;
    default_project_role?: DefaultProjectRole;
  }[];

  export interface Model extends BaseModel {
    groups?: Groups;
  }
  export interface DefaultProjectRole {
    identifier?: Identifier;
  }
}
