import BaseModel from './base';

export namespace ProjectsDeleteRequest {
  export interface Model extends BaseModel {
    /**
     * Unique identifier for the project object.
     */
    project: string;
  }
}
