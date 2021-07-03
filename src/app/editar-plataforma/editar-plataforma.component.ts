import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Plataforma } from "app/dtos/plataforma";
import { PlataformaService } from "app/services/plataforma.service";

@Component({
  selector: "app-editar-plataforma",
  templateUrl: "./editar-plataforma.component.html",
  styleUrls: ["./editar-plataforma.component.css"],
})
export class EditarPlataformaComponent implements OnInit {
  idPlataforma: Number;
  plataforma: Plataforma = {
    nombre: "",
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private plataformaService: PlataformaService
  ) {
    let paramId = this.route.snapshot.paramMap.get("id");
    if (paramId == null) {
      this.router.navigateByUrl("/plataformas");
      throw new Error("Parametro id no puede ser nulo");
    }
    this.idPlataforma = parseInt(paramId, 10);
  }

  ngOnInit(): void {
    this.plataformaService.buscarPorId(this.idPlataforma).subscribe(
      (plataforma) => {
        this.plataforma = plataforma;
      },
      (error) => {
        alert("error al cargar plataforma");
        this.router.navigateByUrl("/plataformas");
      }
    );
  }

  editar(): void {
    this.plataformaService
      .actualizar(this.idPlataforma, this.plataforma)
      .subscribe(
        () => {
          alert("Plataforma actualizada!!");
          this.router.navigateByUrl("/plataformas");
        },
        (error) => {
          alert("Error al actualizar plataforma!!");
        }
      );
  }
}
