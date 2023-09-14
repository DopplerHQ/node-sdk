export interface SecretsGetResponse {
  name?: string;
  value?: Value;
}
interface Value {
  raw?: string;
  computed?: string;
  note?: string;
}
