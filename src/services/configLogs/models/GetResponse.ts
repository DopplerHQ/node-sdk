export interface GetResponse {
  log?: Log;
}
interface Log {
  id?: string;
  text?: string;
  html?: string;
  diff?: {
    name?: string;
    added?: string;
  }[];
  rollback?: boolean;
  created_at?: string;
  config?: string;
  environment?: string;
  project?: string;
  user?: User;
}
interface User {
  email?: string;
  name?: string;
  username?: string;
  profile_image_url?: string;
}
