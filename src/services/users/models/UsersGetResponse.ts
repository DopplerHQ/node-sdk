export interface UsersGetResponse {
  workplace_user?: WorkplaceUser;
  success?: boolean;
}
interface WorkplaceUser {
  id?: string;
  access?: string;
  created_at?: string;
  user?: User;
}
interface User {
  email?: string;
  name?: string;
  username?: string;
  profile_image_url?: string;
}
