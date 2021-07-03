import { IAuthResponse } from "app/dtos/iAuthResponse";
export class AuthResponse implements IAuthResponse {
  private access_token: string;
  private token_type: string;
  private expires_in: number;
  private scope: string;
  private date_expiration: Date;

  constructor(
    access_token: string,
    token_type: string,
    expires_in: number,
    scope: string,
    date_expiration: Date
  ) {
    this.access_token = access_token;
    this.token_type = token_type;
    this.expires_in = expires_in;
    this.scope = scope;
    this.date_expiration = date_expiration;
  }
  getAccessToken(): string {
    return this.access_token;
  }
  getTokenType(): string {
    return this.token_type;
  }
  getExpiresIn(): number {
    return this.expires_in;
  }
  getScope(): string {
    return this.scope;
  }
  getDateExpiration(): Date {
    return this.date_expiration;
  }
}
