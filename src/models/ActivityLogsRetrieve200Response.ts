import BaseModel from './base';

export namespace ActivityLogsRetrieve200Response {
  export interface Model extends BaseModel {
    log?: Log;
  }
  export interface Log {
    id?: string;
    text?: string;
    html?: string;
    created_at?: string;
    config?: Config;
    environment?: string;
    project?: string;
    user?: User;
  }
  export interface Config {
    [k: string]: unknown;
  }
  export interface User {
    email?: string;
    name?: string;
    profile_image_url?: string;
  }
}
