import BaseModel from './base';

export namespace SecretsGet200Response {
  export interface Model extends BaseModel {
    name?: string;
    value?: Value;
  }
  export interface Value {
    raw?: string;
    computed?: string;
    note?: string;
  }
}
