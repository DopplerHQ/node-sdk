import BaseModel from './base';

export namespace EnvironmentsCreate200Response {
  export interface Model extends BaseModel {
    environment?: Environment;
  }
  export interface Environment {
    id?: string;
    name?: string;
    initial_fetch_at?: string;
    created_at?: string;
    project?: string;
  }
}
