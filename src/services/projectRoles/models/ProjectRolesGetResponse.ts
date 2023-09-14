type Permissions = unknown[];

export interface ProjectRolesGetResponse {
  role?: Role;
}
interface Role {
  name?: string;
  permissions?: Permissions;
  identifier?: string;
  created_at?: string;
  is_custom_role?: boolean;
}
