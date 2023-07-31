import BaseModel from './base';

export namespace SecretsDownload200Response {
  export interface Model extends BaseModel {
    STRIPE?: string;
    ALGOLIA?: string;
    DATABASE?: string;
    USER?: string;
  }
}
