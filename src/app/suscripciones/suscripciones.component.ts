import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "app/services/usuario.service";
import { Suscripcion } from "../dtos/suscripcion";
import { SuscriptionService } from "../services/suscription.service";

@Component({
  selector: "app-suscripciones",
  templateUrl: "./suscripciones.component.html",
  styleUrls: ["./suscripciones.component.css"],
})
export class SuscripcionesComponent implements OnInit {
  displayedColumns: string[] = ["email", "estado", "fecha_compra", "correo_usuario", "acciones"];
  suscripciones?: Suscripcion[];
  constructor(private suscriptionService: SuscriptionService, private userService: UsuarioService) { }

  ngOnInit(): void {
    this.suscriptionService.todos().subscribe(
      (suscripciones) => {
        this.suscripciones = suscripciones;
        this.suscripciones.forEach(suscripcion => {
          if (suscripcion.usuario_id) {
            this.userService.buscarPorId(suscripcion.usuario_id).subscribe((usuario) => {
              suscripcion.emailUsuario = usuario.email;
            });
          }
        });
        this.suscripciones = this.suscripciones.filter((suscripcion) => {
          if (suscripcion.estado == null) {
            return suscripcion;
          }
          if (suscripcion.estado != "Eliminar") {
            return suscripcion;
          }
        });
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

  eliminar(id: Number): void {
    let r = confirm("esta seguro que desea eliminar suscripción id " + id);
    if (r == true) {
      this.suscriptionService.delete(id).subscribe(
        () => {
          this.suscripciones = this.suscripciones?.filter(function (
            suscripcion: Suscripcion
          ) {
            return suscripcion.id != id;
          });
          alert(`id suscripcion ${id} eliminada exitosamente`);
        },
        (error) => {
          alert(`error al eliminar id suscripcion ${id}`);
        }
      );
    }
  }
}
