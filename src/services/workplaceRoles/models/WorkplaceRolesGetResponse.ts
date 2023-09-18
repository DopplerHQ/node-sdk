type Permissions = unknown[];

export interface WorkplaceRolesGetResponse {
  role?: Role;
}
interface Role {
  name?: string;
  permissions?: Permissions;
  identifier?: string;
  created_at?: string;
  is_custom_role?: boolean;
  is_inline_role?: boolean;
}
