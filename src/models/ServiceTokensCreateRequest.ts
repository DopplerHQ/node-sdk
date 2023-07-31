import BaseModel from './base';

export namespace ServiceTokensCreateRequest {
  /**
   * Token's capabilities.
   */
  export type Access = 'read' | 'read/write';

  export interface Model extends BaseModel {
    /**
     * Unique identifier for the project object.
     */
    project: string;
    /**
     * Name of the config object.
     */
    config: string;
    /**
     * Name of the service token.
     */
    name: string;
    /**
     * Unix timestamp of when token should expire.
     */
    expire_at?: string;
    access?: Access;
  }
}
