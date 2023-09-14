export interface IntegrationsUpdateRequest {
  /**
   * The new name of the integration
   */
  name?: string;
  /**
   * The new authentication data for the integration
   */
  data?: string;
}
