import BaseModel from './base';

export namespace SecretsUpdateNote200Response {
  export interface Model extends BaseModel {
    secret?: string;
    note?: string;
  }
}
