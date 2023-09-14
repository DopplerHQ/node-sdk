/**
 * Token's capabilities.
 */
type Access = 'read' | 'read/write';

export interface ServiceTokensCreateRequest {
  /**
   * Unique identifier for the project object.
   */
  project: string;
  /**
   * Name of the config object.
   */
  config: string;
  /**
   * Name of the service token.
   */
  name: string;
  /**
   * Unix timestamp of when token should expire.
   */
  expire_at?: string;
  access?: Access;
}
