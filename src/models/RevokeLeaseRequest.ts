import BaseModel from './base';

export namespace RevokeLeaseRequest {
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
     * The name of the dynamic secret from which this lease was issued
     */
    dynamic_secret: string;
    /**
     * The slug of the lease to revoke
     */
    slug: string;
  }
}
