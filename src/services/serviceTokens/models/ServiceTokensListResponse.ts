export interface ServiceTokensListResponse {
  tokens?: {
    name?: string;
    slug?: string;
    created_at?: string;
    config?: string;
    environment?: string;
    project?: string;
    expires_at?: ExpiresAt;
  }[];
}
interface ExpiresAt {
  [k: string]: unknown;
}
