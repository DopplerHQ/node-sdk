import BaseModel from './base';

export namespace ActivityLogsList200Response {
  export type Id = string;
  export type Text = string;
  export type Html = string;
  export type CreatedAt = string;
  export type Environment = string;
  export type Project = string;
  export type Email = string;
  export type Name = string;
  export type ProfileImageUrl = string;
  export type Logs = {
    id?: Id;
    text?: Text;
    html?: Html;
    created_at?: CreatedAt;
    config?: Config;
    environment?: Environment;
    project?: Project;
    user?: User;
  }[];

  export interface Model extends BaseModel {
    page?: number;
    logs?: Logs;
  }
  export interface Config {
    [k: string]: unknown;
  }
  export interface User {
    email?: Email;
    name?: Name;
    profile_image_url?: ProfileImageUrl;
  }
}
