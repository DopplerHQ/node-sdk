import BaseModel from './base';

export namespace IssueLeaseResponse {
  export interface Model extends BaseModel {
    success?: boolean;
    id?: string;
    expires_at?: string;
    value?: Value;
  }
  export interface Value {}
}
