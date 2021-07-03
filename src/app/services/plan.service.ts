import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Plan } from "app/dtos/plan";
import { environment } from "environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { AddBearerToken } from "./AddBearerToken";

@Injectable({
  providedIn: "root",
})
export class PlanService {
  constructor(private http: HttpClient) { }

  @AddBearerToken
  todos(headers?: HttpHeaders): Observable<Array<Plan>> {
    return this.http.get<Array<Plan>>(environment.apiUrl + "/planes", {
      headers: headers,
    });
  }

  @AddBearerToken
  buscarPorId(id: Number, headers?: HttpHeaders): Observable<Plan> {
    return this.http.get<Plan>(environment.apiUrl + `/planes/${id}`, {
      headers: headers,
    });
  }

  @AddBearerToken
  registrar(plan: Plan, headers?: HttpHeaders): Observable<void> {
    return this.http.post<void>(environment.apiUrl + "/planes", plan, {
      headers: headers,
    });
  }

  @AddBearerToken
  actualizar(id: Number, plan: Plan, headers?: HttpHeaders): Observable<void> {
    return this.http.put<void>(environment.apiUrl + `/planes/${id}`, plan, {
      headers: headers,
    });
  }

  @AddBearerToken
  delete(id: Number, headers?: HttpHeaders): Observable<void> {
    return this.http.delete<void>(environment.apiUrl + `/planes/${id}`, {
      headers: headers,
    });
  }
}
