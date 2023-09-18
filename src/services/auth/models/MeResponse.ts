export interface MeResponse {
  slug?: string;
  name?: string;
  created_at?: string;
  last_seen_at?: string;
  token_preview?: string;
  workplace?: Workplace;
  type_?: string;
}
interface Workplace {
  slug?: string;
  name?: string;
}
