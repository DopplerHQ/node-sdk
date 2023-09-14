export interface GroupsGetResponse {
  group?: Group;
}
interface Group {
  name?: string;
  slug?: string;
  created_at?: string;
  default_project_role?: DefaultProjectRole;
  projects?: {
    name?: string;
    slug?: string;
    role?: Role;
  }[];
  members?: {
    slug?: string;
    type_?: string;
  }[];
}
interface DefaultProjectRole {
  identifier?: string;
}
interface Role {
  identifier?: string;
}
