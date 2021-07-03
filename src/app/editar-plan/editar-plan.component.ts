import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Plan } from "app/dtos/plan";
import { Plataforma } from "app/dtos/plataforma";
import { PlanService } from "app/services/plan.service";
import { PlataformaService } from "app/services/plataforma.service";

@Component({
  selector: "app-editar-plan",
  templateUrl: "./editar-plan.component.html",
  styleUrls: ["./editar-plan.component.css"],
})
export class EditarPlanComponent implements OnInit {
  idPlan: Number;
  plan: Plan = {
    calidad: "",
    tipo_cuenta: "",
    descripcion: "",
    duracion: 0,
    nombre: "",
    plataforma_id: 0,
    precio: 0,
  };
  plataformas: Plataforma[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private planService: PlanService,
    private plataformaService: PlataformaService
  ) {
    let idParam = this.route.snapshot.paramMap.get("id");
    if (idParam == null) {
      alert("parametro id no puede ser nulo");
      this.router.navigateByUrl("/planes");
      throw new Error("parametro id no puede ser nulo");
    }
    this.idPlan = parseInt(idParam, 10);
  }

  ngOnInit(): void {
    this.plataformaService.todos().subscribe(
      (plataformas) => {
        this.plataformas = plataformas;
      },
      (error) => {
        alert("error al consultar plataformas");
        this.router.navigateByUrl("/planes");
        throw new Error("error al consultar plataformas " + this.idPlan);
      }
    );
    this.planService.buscarPorId(this.idPlan).subscribe(
      (plan) => {
        this.plan = plan;
      },
      (error) => {
        alert("error al consultar plan");
        this.router.navigateByUrl("/planes");
        throw new Error("error al consultar plan " + this.idPlan);
      }
    );
  }
  editarPlan(): void {
    this.planService.actualizar(this.idPlan, this.plan).subscribe(
      () => {
        alert("plan actualizado!!");
        this.router.navigateByUrl("/planes");
      },
      (error) => {
        alert("error al actualizar plan");
        this.router.navigateByUrl("/planes");
        throw new Error("error al actualizar plan " + this.idPlan);
      }
    );
  }
}
