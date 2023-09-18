export interface GetUsersResponse {
  workplace_users?: {
    id?: string;
    access?: string;
    created_at?: string;
    user?: User;
  }[];
  page?: number;
  success?: boolean;
}
interface User {
  email?: string;
  name?: string;
  username?: string;
  profile_image_url?: string;
  mfa_enabled?: boolean;
  thirdparty_sso_enabled?: boolean;
  saml_sso_enabled?: boolean;
}
