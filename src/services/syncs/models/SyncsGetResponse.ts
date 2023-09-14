export interface SyncsGetResponse {
  sync?: Sync;
}
interface Sync {
  slug?: string;
  integration?: string;
  project?: string;
  config?: string;
  enabled?: boolean;
  lastSyncedAt?: string;
}
