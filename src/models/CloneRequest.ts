import BaseModel from './base';

export namespace CloneRequest {
  export interface Model extends BaseModel {
    /**
     * Unique identifier for the project object.
     */
    project: string;
    /**
     * Name of the branch config being cloned.
     */
    config: string;
    /**
     * Name of the new branch config.
     */
    name: string;
  }
}
