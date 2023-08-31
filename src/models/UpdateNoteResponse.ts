import BaseModel from './base';

export namespace UpdateNoteResponse {
  export interface Model extends BaseModel {
    secret?: string;
    note?: string;
  }
}
