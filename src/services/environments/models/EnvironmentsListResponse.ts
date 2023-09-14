export interface EnvironmentsListResponse {
  environments?: {
    id?: string;
    name?: string;
    initial_fetch_at?: string;
    created_at?: string;
    project?: string;
  }[];
  page?: number;
}
