export interface GroupsListResponse {
  groups?: {
    name?: string;
    slug?: string;
    created_at?: string;
    default_project_role?: DefaultProjectRole;
  }[];
}
interface DefaultProjectRole {
  identifier?: string;
}
