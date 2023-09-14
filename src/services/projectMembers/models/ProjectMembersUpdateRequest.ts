export interface ProjectMembersUpdateRequest {
  /**
   * Identifier of the project role
   */
  role?: string;
  /**
   * Environment slugs to grant the member access to
   */
  environments?: string[];
}
