export interface IntegrationsCreateRequest {
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
interface Data {}
