import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "app/dtos/usuario";
import { environment } from "environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { AddBearerToken } from "./AddBearerToken";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  constructor(private http: HttpClient) { }

  @AddBearerToken
  todos(headers?: HttpHeaders): Observable<Array<Usuario>> {
    return this.http.get<Array<Usuario>>(environment.apiUrl + "/users", {
      headers: headers,
    });
  }

  @AddBearerToken
  buscarPorId(id: Number, headers?: HttpHeaders): Observable<Usuario> {
    return this.http.get<Usuario>(environment.apiUrl + `/users/${id}`, {
      headers: headers,
    });
  }

  @AddBearerToken
  consultarSaldo(headers?: HttpHeaders): Observable<Number> {
    return this.http.post<Number>(environment.apiUrl + `/users/misaldo`, null,{
      headers: headers,
    });
  }

  registrar(usuario: Usuario): Observable<void> {
    return this.http.post<void>(environment.apiUrl + "/users", usuario);
  }

  @AddBearerToken
  actualizar(id: Number, usuario: Usuario, headers?: HttpHeaders): Observable<void> {
    return this.http.put<void>(environment.apiUrl + `/users/${id}`, usuario, {
      headers: headers,
    });
  }

  @AddBearerToken
  eliminar(id: Number, headers?: HttpHeaders): Observable<Number> {
    return this.http.delete<Number>(environment.apiUrl + `/users/${id}`, {
      headers: headers,
    });
  }
}
