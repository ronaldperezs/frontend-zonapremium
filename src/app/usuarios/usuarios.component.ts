import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "app/services/usuario.service";
import { Usuario } from "../dtos/usuario";

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"],
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = [
    "email",
    "nombres",
    "apellidos",
    "celular",
    "acciones",
  ];
  usuarios?: Usuario[];
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.todos().subscribe(
      (usuarios) => {
        this.usuarios = usuarios;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  eliminar(id: Number) {
    var r = confirm("esta seguro que desea eliminar usuario id " + id);
    if (r == true)
      this.usuarioService.eliminar(id).subscribe(id => {
        this.usuarios = this.usuarios?.filter(function (usuario: Usuario) {
          return usuario.id != id;
        });
        alert(`id usuario ${id} eliminado exitosamente`);
      }, error => {
        alert(`error al eliminar id usuario ${id}`);
      })
  }
}
