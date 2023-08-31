import BaseModel from './base';

export namespace MeResponse {
  export interface Model extends BaseModel {
    slug?: string;
    name?: string;
    created_at?: string;
    last_seen_at?: string;
    token_preview?: string;
    workplace?: Workplace;
    type_?: string;
  }
  export interface Workplace {
    slug?: string;
    name?: string;
  }
}
