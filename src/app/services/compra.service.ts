import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Compra } from 'app/dtos/compra';
import { FirmarCompraResponse } from 'app/dtos/firmarCompraResponse';
import { SolicitudPago } from 'app/dtos/solicitudPago';
import { AddBearerToken } from './AddBearerToken';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  constructor(private http: HttpClient) { }

  @AddBearerToken
  todos(headers?: HttpHeaders): Observable<Array<Compra>> {
    return this.http.get<Array<Compra>>(
      environment.apiUrl + "/compras", {
      headers: headers,
    }
    );
  }

  @AddBearerToken
  buscarPorId(id: Number, headers?: HttpHeaders): Observable<Compra> {
    return this.http.get<Compra>(
      environment.apiUrl + `/compras/${id}`, {
      headers: headers,
    }
    );
  }
  @AddBearerToken
  registrar(compra: Compra, headers?: HttpHeaders): Observable<SolicitudPago> {
    return this.http.post<SolicitudPago>(
      environment.apiUrl + "/compras",
      compra, {
      headers: headers,
    }
    );
  }

  @AddBearerToken
  comprarConSaldo(idPlan: Number, headers?: HttpHeaders): Observable<void> {
    return this.http.post<void>(
      environment.apiUrl + `/compras/saldo/${idPlan}`,null, {
      headers: headers,
    }
    );
  }

  @AddBearerToken
  actualizar(id: Number, compra: Compra, headers?: HttpHeaders): Observable<void> {
    return this.http.put<void>(
      environment.apiUrl + `/compras/${id}`,
      compra, {
      headers: headers,
    }
    );
  }

  @AddBearerToken
  delete(id: Number, headers?: HttpHeaders): Observable<void> {
    return this.http.delete<void>(environment.apiUrl + `/compras/${id}`, {
      headers: headers,
    });
  }
}
