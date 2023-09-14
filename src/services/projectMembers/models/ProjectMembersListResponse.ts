export interface ProjectMembersListResponse {
  members?: {
    slug?: string;
    role?: Role;
    access_all_environments?: boolean;
    environments?: string[];
    type_?: string;
  }[];
}
interface Role {
  identifier?: string;
}
