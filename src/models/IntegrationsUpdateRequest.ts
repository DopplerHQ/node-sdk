import BaseModel from './base';

export namespace IntegrationsUpdateRequest {
  export interface Model extends BaseModel {
    /**
     * The new name of the integration
     */
    name?: string;
    /**
     * The new authentication data for the integration
     */
    data?: string;
  }
}
