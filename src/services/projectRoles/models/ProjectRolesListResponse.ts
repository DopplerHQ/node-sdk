type Permissions = unknown[];

export interface ProjectRolesListResponse {
  roles?: {
    name?: string;
    permissions?: Permissions;
    identifier?: string;
    created_at?: string;
    is_custom_role?: boolean;
  }[];
}
