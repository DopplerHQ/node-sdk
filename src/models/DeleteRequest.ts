import BaseModel from './base';

export namespace DeleteRequest {
  export interface Model extends BaseModel {
    /**
     * An IP address or CIDR range
     */
    ip: string;
  }
}
