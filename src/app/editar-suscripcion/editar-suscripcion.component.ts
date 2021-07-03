import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Plan } from "app/dtos/plan";
import { Suscripcion } from "app/dtos/suscripcion";
import { PlanService } from "app/services/plan.service";
import { SuscriptionService } from "app/services/suscription.service";

@Component({
  selector: "app-editar-suscripcion",
  templateUrl: "./editar-suscripcion.component.html",
  styleUrls: ["./editar-suscripcion.component.css"],
})
export class EditarSuscripcionComponent implements OnInit {
  idSuscripcion: Number;
  suscripcion: Suscripcion = {
    plan_id: 0,
  };
  planes: Plan[] = [];
  hide = true;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private planService: PlanService,
    private suscriptionService: SuscriptionService
  ) {
    let idParam = this.route.snapshot.paramMap.get("id");
    if (idParam == null) {
      alert("parametro id no puede ser nulo");
      this.router.navigateByUrl("/suscripciones");
      throw new Error("parametro id no puede ser nulo");
    }
    this.idSuscripcion = parseInt(idParam);
  }
  ngOnInit(): void {
    this.planService.todos().subscribe(
      (planes) => {
        this.planes = planes;
      },
      (error) => {
        alert("error al consutar planes");
        this.router.navigateByUrl("/suscripciones");
      }
    );
    this.suscriptionService.buscarPorId(this.idSuscripcion).subscribe(
      (suscripcion) => {
        this.suscripcion = suscripcion;
      },
      (error) => {
        alert("error al consutar suscripción");
        this.router.navigateByUrl("/suscripciones");
      }
    );
  }
  editarSuscripcion(): void {
    this.suscriptionService
      .actualizar(this.idSuscripcion, this.suscripcion)
      .subscribe(
        () => {
          alert("Suscrición actualizada");
          this.router.navigateByUrl("/suscripciones");
        },
        (error) => {
          alert("Error al actualizar suscripción");
        }
      );
  }
}
