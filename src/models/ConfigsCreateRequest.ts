import BaseModel from './base';

export namespace ConfigsCreateRequest {
  export interface Model extends BaseModel {
    /**
     * Unique identifier for the project object.
     */
    project: string;
    /**
     * Identifier for the environment object.
     */
    environment: string;
    /**
     * Name of the new branch config.
     */
    name: string;
  }
}
