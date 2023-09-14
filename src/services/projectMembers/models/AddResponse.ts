export interface AddResponse {
  member?: Member;
}
interface Member {
  slug?: string;
  role?: Role;
  access_all_environments?: boolean;
  environments?: string[];
  type_?: string;
}
interface Role {
  identifier?: string;
}
