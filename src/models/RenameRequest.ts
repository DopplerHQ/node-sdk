import BaseModel from './base';

export namespace RenameRequest {
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
