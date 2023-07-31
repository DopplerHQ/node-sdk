import BaseModel from './base';

export namespace IntegrationsCreateRequest {
  export interface Model extends BaseModel {
    /**
     * The name of the integration
     */
    name: string;
    data?: Data;
    /**
     * The integration type
     */
    type_: string;
  }
  /**
   * The authentication data for the integration
   */
  export interface Data {}
}
