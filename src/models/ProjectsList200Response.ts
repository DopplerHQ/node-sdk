import BaseModel from './base';

export namespace ProjectsList200Response {
  export type Id = string;
  export type Slug = string;
  export type Name = string;
  export type Description = string;
  export type CreatedAt = string;
  export type Projects = {
    id?: Id;
    slug?: Slug;
    name?: Name;
    description?: Description;
    created_at?: CreatedAt;
  }[];

  export interface Model extends BaseModel {
    page?: number;
    projects?: Projects;
  }
}
