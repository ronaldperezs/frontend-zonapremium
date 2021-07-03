import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Usuario } from "app/dtos/usuario";
import { UsuarioService } from "app/services/usuario.service";

@Component({
  selector: "app-registrar-usuario",
  templateUrl: "./registrar-usuario.component.html",
  styleUrls: ["./registrar-usuario.component.css"],
})
export class RegistrarUsuarioComponent implements OnInit {
  loginInProgress = false;
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  registrarUsuario(form: NgForm): void {
    this.loginInProgress = true;
    let usuario: Usuario = {
      email: form.value.email,
      nombres: form.value.nombres,
      apellidos: form.value.apellidos,
      celular: form.value.celular,
      tipo_usuario: form.value.tipo_usuario,
      password: form.value.password,
      saldo: 0
    };
    this.usuarioService.registrar(usuario).subscribe(
      () => {
        alert("Usuario registrado!!");
        this.router.navigateByUrl("/login");
      },
      (error) => {
        console.error(error);
        alert("Error al registrar usuario!!");
        this.loginInProgress = false;
      }
    );
  }
}
