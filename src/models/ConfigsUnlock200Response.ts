import BaseModel from './base';

export namespace ConfigsUnlock200Response {
  export interface Model extends BaseModel {
    config?: Config;
  }
  export interface Config {
    name?: string;
    root?: boolean;
    locked?: boolean;
    initial_fetch_at?: string;
    last_fetch_at?: string;
    created_at?: string;
    environment?: string;
    project?: string;
  }
}
