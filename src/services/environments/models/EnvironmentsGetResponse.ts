export interface EnvironmentsGetResponse {
  environment?: Environment;
}
interface Environment {
  id?: string;
  name?: string;
  initial_fetch_at?: string;
  created_at?: string;
  project?: string;
}
