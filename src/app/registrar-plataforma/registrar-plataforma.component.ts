import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Plataforma } from "app/dtos/plataforma";
import { PlataformaService } from "app/services/plataforma.service";

@Component({
  selector: "app-registrar-plataforma",
  templateUrl: "./registrar-plataforma.component.html",
  styleUrls: ["./registrar-plataforma.component.css"],
})
export class RegistrarPlataformaComponent implements OnInit {
  constructor(
    private plataformaService: PlataformaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  registrarPlataforma(form: NgForm): void {
    let plataforma: Plataforma = {
      nombre: form.value.nombre,
    };
    this.plataformaService.registrar(plataforma).subscribe(
      () => {
        alert("Plataforma registrada!!");
        this.router.navigateByUrl("/plataformas");
      },
      (error) => {
        alert("Error al registrar plataforma!!");
        console.error(error);
      }
    );
  }
}
