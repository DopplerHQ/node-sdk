export interface ProjectRolesListResponse {
  roles?: {
    name?: string;
    permissions?: string[];
    identifier?: string;
    created_at?: string;
    is_custom_role?: boolean;
  }[];
}
