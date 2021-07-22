import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Plan } from "app/dtos/plan";
import { Plataforma } from "app/dtos/plataforma";
import { PlanService } from "app/services/plan.service";
import { PlataformaService } from "app/services/plataforma.service";

@Component({
  selector: "app-registrar-plan",
  templateUrl: "./registrar-plan.component.html",
  styleUrls: ["./registrar-plan.component.css"],
})
export class RegistrarPlanComponent implements OnInit {
  plataformas: Plataforma[] = [];
  constructor(
    private plataformaService: PlataformaService,
    private planformaService: PlanService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.plataformaService.todos().subscribe(
      (plataformas) => {
        this.plataformas = plataformas;
      },
      (error) => {
        alert("Error al cargar plataformas");
        console.error(error);
      }
    );
  }

  registrarPlan(form: NgForm): void {
    let plan: Plan = {
      nombre: form.value.nombre,
      calidad: form.value.calidad,
      tipo_cuenta: form.value.tipo_cuenta,
      descripcion: form.value.descripcion,
      duracion: form.value.duracion,
      precio: form.value.precio,
      precio_revendedor: form.value.precio_revendedor,
      precio_distribuidor: form.value.precio_distribuidor,
      plataforma_id: form.value.plataforma_id,
    };
    this.planformaService.registrar(plan).subscribe(
      () => {
        alert("Plan registrado!!");
        this.router.navigateByUrl("/planes");
      },
      (error) => {
        alert("Error al registrar plan!!");
        console.error(error);
      }
    );
  }
}
