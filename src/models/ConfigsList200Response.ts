import BaseModel from './base';

export namespace ConfigsList200Response {
  export type Name = string;
  export type Root = boolean;
  export type Locked = boolean;
  export type InitialFetchAt = string;
  export type LastFetchAt = string;
  export type CreatedAt = string;
  export type Environment = string;
  export type Project = string;
  export type Configs = {
    name?: Name;
    root?: Root;
    locked?: Locked;
    initial_fetch_at?: InitialFetchAt;
    last_fetch_at?: LastFetchAt;
    created_at?: CreatedAt;
    environment?: Environment;
    project?: Project;
  }[];

  export interface Model extends BaseModel {
    page?: number;
    configs?: Configs;
  }
}
