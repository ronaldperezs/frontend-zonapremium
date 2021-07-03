import { Component, OnInit } from '@angular/core';
import { Suscripcion } from 'app/dtos/suscripcion';
import { SuscriptionService } from 'app/services/suscription.service';
import { UsuarioService } from 'app/services/usuario.service';

@Component({
  selector: "app-compras",
  templateUrl: "./compras.component.html",
  styleUrls: ["./compras.component.css"],
})
export class ComprasComponent implements OnInit {
  displayedColumns: string[] = ["email", "fecha_compra", "acciones"];
  suscripciones?: Suscripcion[];
  saldo: Number = 0;
  constructor(private suscriptionService: SuscriptionService, private userService: UsuarioService) { }

  ngOnInit(): void {
    this.userService.consultarSaldo().subscribe((saldo) => {
      this.saldo = saldo;
    },(error) => {
      alert("error consultar saldo");
    });
    this.suscriptionService.todos().subscribe(
      (suscripciones) => {
        this.suscripciones = suscripciones;
        this.suscripciones.sort((a, b) => {
          if (a.fecha_compra == undefined && b.fecha_compra == undefined) {
            return 0;
          }
          if (a.fecha_compra == undefined) {
            return -1;
          }
          if (b.fecha_compra == undefined) {
            return -1;
          }
          if (a.fecha_compra > b.fecha_compra) {
            return -1;
          }
          return 1;
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
