export interface ListResponse {
  page?: number;
  projects?: {
    id?: string;
    slug?: string;
    name?: string;
    description?: string;
    created_at?: string;
  }[];
}
