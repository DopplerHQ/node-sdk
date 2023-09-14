export interface ConfigsUpdateRequest {
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
