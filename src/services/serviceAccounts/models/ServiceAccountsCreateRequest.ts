export interface ServiceAccountsCreateRequest {
  name?: string;
  workplace_role?: WorkplaceRole;
}
/**
 * You may provide an identifier OR permissions, but not both
 */
interface WorkplaceRole {
  /**
   * Identifier of an existing workplace role
   */
  identifier?: string;
  /**
   * Workplace permissions to grant
   */
  permissions?: string[];
}
