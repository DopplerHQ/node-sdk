import BaseModel from './base';

export namespace ProjectsUpdate200Response {
  export interface Model extends BaseModel {
    project?: Project;
  }
  export interface Project {
    id?: string;
    name?: string;
    description?: string;
    created_at?: string;
  }
}
