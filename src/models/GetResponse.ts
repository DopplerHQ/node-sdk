import BaseModel from './base';

export namespace GetResponse {
  export type Name = string;
  export type Slug = string;
  export type Identifier = string;
  export type Projects = {
    name?: Name;
    slug?: Slug;
    role?: Role;
  }[];
  export type Slug1 = string;
  export type Type = string;
  export type Members = {
    slug?: Slug1;
    type_?: Type;
  }[];

  export interface Model extends BaseModel {
    group?: Group;
  }
  export interface Group {
    name?: string;
    slug?: string;
    created_at?: string;
    default_project_role?: DefaultProjectRole;
    projects?: Projects;
    members?: Members;
  }
  export interface DefaultProjectRole {
    identifier?: string;
  }
  export interface Role {
    identifier?: Identifier;
  }
}
