import BaseModel from './base';

export namespace ProjectsCreateRequest {
  export interface Model extends BaseModel {
    /**
     * Name of project
     */
    name: string;
    /**
     * Description of project
     */
    description?: string;
  }
}
