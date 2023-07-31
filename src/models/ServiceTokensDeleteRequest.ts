import BaseModel from './base';

export namespace ServiceTokensDeleteRequest {
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
     * The slug of the service token.
     */
    slug?: string;
    /**
     * The token value.
     */
    token?: string;
  }
}
