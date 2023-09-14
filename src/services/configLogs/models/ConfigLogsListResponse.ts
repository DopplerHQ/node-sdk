export interface ConfigLogsListResponse {
  page?: number;
  logs?: {
    id?: string;
    text?: string;
    html?: string;
    rollback?: boolean;
    created_at?: string;
    config?: string;
    environment?: string;
    project?: string;
    user?: User;
  }[];
}
interface User {
  email?: string;
  name?: string;
  username?: string;
  profile_image_url?: string;
}
