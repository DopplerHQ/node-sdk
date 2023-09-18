export interface WorkplaceUpdateResponse {
  workplace?: Workplace;
}
interface Workplace {
  id?: string;
  name?: string;
  billing_email?: string;
  security_email?: string;
}
