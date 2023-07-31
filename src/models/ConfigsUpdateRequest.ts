import BaseModel from './base';

export namespace ConfigsUpdateRequest {
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
     * The new name of config.
     */
    name: string;
  }
}
