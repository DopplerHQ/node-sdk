export interface UpdateResponse {
  secrets?: Secrets;
}
interface Secrets {
  STRIPE?: Stripe;
  ALGOLIA?: Algolia;
  DATABASE?: Database;
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
