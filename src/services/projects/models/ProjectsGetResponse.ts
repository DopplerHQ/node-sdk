export interface ProjectsGetResponse {
  project?: Project;
}
interface Project {
  id?: string;
  name?: string;
  description?: string;
  created_at?: string;
}
