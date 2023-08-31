import BaseModel from './base';

export namespace IssueLeaseRequest {
  export interface Model extends BaseModel {
    /**
     * The project where the dynamic secret is located
     */
    project: string;
    /**
     * The config where the dynamic secret is located
     */
    config: string;
    /**
     * The name of the dynamic secret for which to issue this lease
     */
    dynamic_secret: string;
    /**
     * The number of seconds until this lease is automatically revoked
     */
    ttl_sec: number;
  }
}
