import BaseModel from './base';

export namespace ProjectsUpdateRequest {
  export interface Model extends BaseModel {
    /**
     * Unique identifier for the project object.
     */
    project: string;
    /**
     * Name of the project.
     */
    name: string;
    /**
     * Description of the project.
     */
    description?: string;
  }
}
