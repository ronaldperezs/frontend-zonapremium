import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Login } from "app/dtos/login";
import { Observable } from "rxjs";
import { IAuthResponse } from "app/dtos/iAuthResponse";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authenticate(login: Login): Observable<IAuthResponse> {
    return this.http.get<IAuthResponse>(
      environment.apiUrl + "/authorizate",
      {
        headers: { Authorization: "Basic " + btoa(login.email+":"+login.password) },
      }
    );
  }
}
