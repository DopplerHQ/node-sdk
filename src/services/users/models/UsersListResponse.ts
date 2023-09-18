export interface UsersListResponse {
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
}
