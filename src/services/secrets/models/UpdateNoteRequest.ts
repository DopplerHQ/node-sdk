export interface UpdateNoteRequest {
  /**
   * Unique identifier for the project object.
   */
  project: string;
  /**
   * Name of the config object.
   */
  config: string;
  secret: string;
  note: string;
}
