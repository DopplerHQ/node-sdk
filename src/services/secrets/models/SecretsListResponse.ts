export interface SecretsListResponse {
  secrets?: Secrets;
}
interface Secrets {
  STRIPE?: Stripe;
  ALGOLIA?: Algolia;
  DATABASE?: Database;
  USER?: User;
}
interface Stripe {
  raw?: string;
  computed?: string;
  note?: string;
}
interface Algolia {
  raw?: string;
  computed?: string;
  note?: string;
}
interface Database {
  raw?: string;
  computed?: string;
  note?: string;
}
interface User {
  raw?: string;
  computed?: string;
  note?: string;
}
