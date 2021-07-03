import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Suscripcion } from "app/dtos/suscripcion";
import { environment } from "environments/environment";
import { AddBearerToken } from "app/services/AddBearerToken";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SuscriptionService {
  constructor(private http: HttpClient) { }

  @AddBearerToken
  todos(headers?: HttpHeaders): Observable<Array<Suscripcion>> {
    return this.http.get<Array<Suscripcion>>(
      environment.apiUrl + "/suscriptions", {
      headers: headers,
    });
  }
  @AddBearerToken
  buscarPorId(id: Number, headers?: HttpHeaders): Observable<Suscripcion> {
    return this.http.get<Suscripcion>(
      environment.apiUrl + `/suscriptions/${id}`, {
      headers: headers,
    });
  }
  @AddBearerToken
  registrar(suscripcion: Suscripcion, headers?: HttpHeaders): Observable<void> {
    return this.http.post<void>(
      environment.apiUrl + "/suscriptions",
      suscripcion, {
      headers: headers,
    });
  }
  @AddBearerToken
  actualizar(id: Number, suscripcion: Suscripcion, headers?: HttpHeaders): Observable<void> {
    return this.http.put<void>(
      environment.apiUrl + `/suscriptions/${id}`,
      suscripcion, {
      headers: headers,
    });
  }
  @AddBearerToken
  delete(id: Number, headers?: HttpHeaders): Observable<void> {
    return this.http.delete<void>(environment.apiUrl + `/suscriptions/${id}`, {
      headers: headers,
    });
  }
}
