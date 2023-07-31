import BaseModel from './base';

export namespace SecretsUpdate200Response {
  export interface Model extends BaseModel {
    secrets?: Secrets;
  }
  export interface Secrets {
    STRIPE?: Stripe;
    ALGOLIA?: Algolia;
    DATABASE?: Database;
  }
  export interface Stripe {
    raw?: string;
    computed?: string;
    note?: string;
  }
  export interface Algolia {
    raw?: string;
    computed?: string;
    note?: string;
  }
  export interface Database {
    raw?: string;
    computed?: string;
    note?: string;
  }
}
