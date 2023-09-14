type Type = 'workplace_user' | 'group' | 'invite' | 'service_account';

export interface AddRequest {
  /**
   * Member's slug
   */
  slug: string;
  /**
   * Identifier of the project role
   */
  role?: string;
  /**
   * Environment slugs to grant the member access to
   */
  environments?: string[];
  type_: Type;
}
