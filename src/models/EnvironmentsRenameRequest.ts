import BaseModel from './base';

export namespace EnvironmentsRenameRequest {
  export interface Model extends BaseModel {
    /**
     * Desired name
     */
    name?: string;
    /**
     * Desired slug
     */
    slug?: string;
  }
}
