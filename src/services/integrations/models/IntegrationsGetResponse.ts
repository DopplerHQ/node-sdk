export interface IntegrationsGetResponse {
  integration?: Integration;
}
interface Integration {
  slug?: string;
  name?: string;
  type_?: string;
}
