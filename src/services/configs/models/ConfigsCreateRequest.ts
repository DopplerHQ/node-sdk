export interface ConfigsCreateRequest {
  /**
   * Unique identifier for the project object.
   */
  project: string;
  /**
   * Identifier for the environment object.
   */
  environment: string;
  /**
   * Name of the new branch config.
   */
  name: string;
}
