import BaseModel from './base';

export namespace LockRequest {
  export interface Model extends BaseModel {
    /**
     * Unique identifier for the project object.
     */
    project: string;
    /**
     * Name of the config.
     */
    config: string;
  }
}
