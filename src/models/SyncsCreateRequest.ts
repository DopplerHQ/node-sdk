import BaseModel from './base';

export namespace SyncsCreateRequest {
  /**
   * An option indicating if and how Doppler should attempt to import secrets from the sync destination
   */
  export type ImportOption = 'none' | 'prefer_doppler' | 'prefer_integration';

  export interface Model extends BaseModel {
    /**
     * The integration slug which the sync will use
     */
    integration: string;
    data: Data;
    import_option?: ImportOption;
  }
  /**
   * Configuration data for the sync
   */
  export interface Data {}
}
