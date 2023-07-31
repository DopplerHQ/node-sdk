import BaseModel from './base';

export namespace ConfigsDeleteRequest {
  export interface Model extends BaseModel {
    /**
     * Unique identifier for the project object.
     */
    project: string;
    /**
     * Name of the config object.
     */
    config: string;
  }
}
