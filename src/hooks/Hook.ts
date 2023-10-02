export interface Request {
  method: string;
  url: string;
  input?: object;
  headers: object;
}

export interface Response {
  data: object;
  headers: object;
}

export interface Hook {
  beforeRequest(request: Request): Promise<void>;

  afterResponse(request: Request, response: Response): Promise<void>;

  onError(error: object): Promise<void>;
}
