export interface InvitesListResponse {
  invites?: {
    slug?: string;
    email?: string;
    created_at?: string;
    workplace_role?: WorkplaceRole;
  }[];
}
interface WorkplaceRole {
  name?: string;
  permissions?: string[];
  identifier?: string;
  created_at?: string;
  is_custom_role?: boolean;
  is_inline_role?: boolean;
}
