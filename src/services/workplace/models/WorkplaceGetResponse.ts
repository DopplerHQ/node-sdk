export interface WorkplaceGetResponse {
  workplace?: Workplace;
  success?: boolean;
}
interface Workplace {
  id?: string;
  name?: string;
  billing_email?: string;
  saml_enabled?: boolean;
  scim_enabled?: boolean;
}
