import BaseModel from './base';

export namespace EnvironmentsCreateRequest {
  export interface Model extends BaseModel {
    name: string;
    slug: string;
  }
}
