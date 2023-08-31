import BaseModel from './base';

export namespace UpdateNoteRequest {
  export interface Model extends BaseModel {
    /**
     * Unique identifier for the project object.
     */
    project: string;
    /**
     * Name of the config object.
     */
    config: string;
    secret: string;
    note: string;
  }
}
