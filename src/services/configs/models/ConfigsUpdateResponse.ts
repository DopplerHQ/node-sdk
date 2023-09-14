export interface ConfigsUpdateResponse {
  config?: Config;
}
interface Config {
  name?: string;
  root?: boolean;
  locked?: boolean;
  initial_fetch_at?: string;
  last_fetch_at?: string;
  created_at?: string;
  environment?: string;
  project?: string;
}
