import BaseModel from './base';

export namespace SecretsListNames200Response {
  export type Names = string[];

  export interface Model extends BaseModel {
    names?: Names;
  }
}
