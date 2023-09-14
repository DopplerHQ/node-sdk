export interface RetrieveResponse {
  log?: Log;
}
interface Log {
  id?: string;
  text?: string;
  html?: string;
  created_at?: string;
  config?: Config;
  environment?: string;
  project?: string;
  user?: User;
}
interface Config {
  [k: string]: unknown;
}
interface User {
  email?: string;
  name?: string;
  profile_image_url?: string;
}
