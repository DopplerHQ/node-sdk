export interface ServiceTokensCreateResponse {
  name?: string;
  slug?: string;
  created_at?: string;
  key?: string;
  config?: string;
  environment?: string;
  project?: string;
  expires_at?: ExpiresAt;
  access?: string;
}
interface ExpiresAt {
  [k: string]: unknown;
}
