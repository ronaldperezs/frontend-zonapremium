import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Usuario } from "app/dtos/usuario";
import { UsuarioService } from "app/services/usuario.service";

@Component({
  selector: "app-editar-usuario",
  templateUrl: "./editar-usuario.component.html",
  styleUrls: ["./editar-usuario.component.css"],
})
export class EditarUsuarioComponent implements OnInit {
  loginInProgress = false;
  id: Number;
  usuario: Usuario = {
    nombres: "",
    apellidos: "",
    email: "",
    celular: 0,
    tipo_usuario: "",
    saldo: 0
  };
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    let idParam = this.route.snapshot.paramMap.get("id");
    if (idParam == null) {
      this.router.navigateByUrl("/usuarios");
      throw new Error("parametro id no puede ser null");
    }
    this.id = parseInt(idParam, 10);
  }

  ngOnInit(): void {
    this.usuarioService.buscarPorId(this.id).subscribe(
      (usuario) => {
        this.usuario = usuario;
      },
      (error) => {
        this.router.navigateByUrl("/usuarios");
        throw new Error("error consultando el id " + this.id);
      }
    );
  }

  editarUsuario(): void {
    this.loginInProgress = true;
    this.usuarioService.actualizar(this.id, this.usuario).subscribe(
      () => {
        alert("Usuario actualizado!!");
        this.router.navigateByUrl("/usuarios");
      },
      (error) => {
        alert("Error al actualizar usuario!!");
        this.loginInProgress = false;
      }
    );
  }
}
