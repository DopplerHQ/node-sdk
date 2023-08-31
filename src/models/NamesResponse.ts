import BaseModel from './base';

export namespace NamesResponse {
  export type Names = string[];

  export interface Model extends BaseModel {
    names?: Names;
  }
}
