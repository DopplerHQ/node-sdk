export interface IntegrationsListResponse {
  integrations?: {
    slug?: string;
    name?: string;
    kind?: string;
    enabled?: boolean;
    type_?: string;
  }[];
  success?: boolean;
}
