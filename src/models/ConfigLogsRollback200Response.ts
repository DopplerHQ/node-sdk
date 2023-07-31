import BaseModel from './base';

export namespace ConfigLogsRollback200Response {
  export type Name = string;
  export type Removed = string;
  export type Diff = {
    name?: Name;
    removed?: Removed;
  }[];

  export interface Model extends BaseModel {
    log?: Log;
  }
  export interface Log {
    id?: string;
    text?: string;
    html?: string;
    diff?: Diff;
    rollback?: boolean;
    created_at?: string;
    config?: string;
    environment?: string;
    project?: string;
    user?: User;
  }
  export interface User {
    email?: string;
    name?: string;
    username?: string;
    profile_image_url?: string;
  }
}
