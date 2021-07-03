export interface IAuthResponse {
  getAccessToken(): string;
  getTokenType(): string;
  getExpiresIn(): number;
  getScope(): string;
  getDateExpiration(): Date;
}
