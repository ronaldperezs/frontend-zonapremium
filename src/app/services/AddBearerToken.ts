import { HttpHeaders } from "@angular/common/http";
import { AuthResponse } from "app/dtos/authResponse";
import { IAuthResponse } from "app/dtos/iAuthResponse";

export function AddBearerToken(
  target: Object,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<any>
) {
  const originalMethod = descriptor.value; // save a reference to the original method
  descriptor.value = function (...args: any[]) {
    args.push(loadAuthHeaders());
    const result = originalMethod.apply(this, args);
    return result;
  };
  return descriptor;
}
function loadAuthHeaders(): HttpHeaders {
  let obj: any = JSON.parse(localStorage.getItem("authResponse") || "{}");
  let authResponse: IAuthResponse = new AuthResponse(
    obj.access_token,
    obj.token_type,
    obj.expires_in,
    obj.scope,
    new Date(obj.date_expiration)
  );
  return new HttpHeaders().set(
    "Authorization",
    authResponse.getTokenType() + " " + authResponse.getAccessToken()
  );
}
