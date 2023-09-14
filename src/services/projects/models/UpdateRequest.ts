export interface UpdateRequest {
  /**
   * Unique identifier for the project object.
   */
  project: string;
  /**
   * Name of the project.
   */
  name: string;
  /**
   * Description of the project.
   */
  description?: string;
}
