import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Plan } from "app/dtos/plan";
import { Plataforma } from "app/dtos/plataforma";
import { environment } from "environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { AddBearerToken } from "./AddBearerToken";

@Injectable({
  providedIn: "root",
})
export class PlataformaService {
  constructor(private http: HttpClient) { }

  @AddBearerToken
  todos(headers?: HttpHeaders): Observable<Array<Plataforma>> {
    return this.http.get<Array<Plataforma>>(
      environment.apiUrl + "/plataformas", {
      headers: headers,
    }
    );
  }

  @AddBearerToken
  buscarPorId(id: Number, headers?: HttpHeaders): Observable<Plataforma> {
    return this.http.get<Plataforma>(environment.apiUrl + `/plataformas/${id}`, {
      headers: headers,
    });
  }

  @AddBearerToken
  planes(id: Number, headers?: HttpHeaders): Observable<Array<Plan>> {
    return this.http.get<Array<Plan>>(environment.apiUrl + `/plataformas/${id}/planes`, {
      headers: headers,
    });
  }

  @AddBearerToken
  registrar(plataforma: Plataforma, headers?: HttpHeaders): Observable<void> {
    return this.http.post<void>(
      environment.apiUrl + "/plataformas",
      plataforma, {
      headers: headers,
    }
    );
  }

  @AddBearerToken
  actualizar(id: Number, plataforma: Plataforma, headers?: HttpHeaders): Observable<void> {
    return this.http.put<void>(
      environment.apiUrl + `/plataformas/${id}`,
      plataforma, {
      headers: headers,
    }
    );
  }

  @AddBearerToken
  delete(id: Number, headers?: HttpHeaders): Observable<void> {
    return this.http.delete<void>(environment.apiUrl + `/plataformas/${id}`, {
      headers: headers,
    });
  }
}
