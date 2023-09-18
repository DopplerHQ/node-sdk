export interface UpdateRequest {
  /**
   * Unique identifier for the project object.
   */
  project: string;
  /**
   * Name of the config object.
   */
  config: string;
  secrets: Secrets;
}
/**
 * Object of secrets you would like to save to the config. Try it with the sample secrets below:
 */
interface Secrets {
  STRIPE: string;
  ALGOLIA?: string;
  DATABASE?: string;
}
