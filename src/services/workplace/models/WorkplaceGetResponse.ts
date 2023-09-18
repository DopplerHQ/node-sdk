export interface WorkplaceGetResponse {
  workplace?: Workplace;
}
interface Workplace {
  id?: string;
  name?: string;
  billing_email?: string;
  security_email?: string;
}
