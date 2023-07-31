import BaseModel from './base';

export namespace EnvironmentsList200Response {
  export type Id = string;
  export type Name = string;
  export type InitialFetchAt = string;
  export type CreatedAt = string;
  export type Project = string;
  export type Environments = {
    id?: Id;
    name?: Name;
    initial_fetch_at?: InitialFetchAt;
    created_at?: CreatedAt;
    project?: Project;
  }[];

  export interface Model extends BaseModel {
    environments?: Environments;
    page?: number;
  }
}
