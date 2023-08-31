import BaseModel from './base';

export namespace DownloadResponse {
  export interface Model extends BaseModel {
    STRIPE?: string;
    ALGOLIA?: string;
    DATABASE?: string;
    USER?: string;
  }
}
