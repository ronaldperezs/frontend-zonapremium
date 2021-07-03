import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Plan } from "app/dtos/plan";
import { Suscripcion } from "app/dtos/suscripcion";
import { PlanService } from "app/services/plan.service";
import { SuscriptionService } from "app/services/suscription.service";

@Component({
  selector: "app-registrar-suscripcion",
  templateUrl: "./registrar-suscripcion.component.html",
  styleUrls: ["./registrar-suscripcion.component.css"],
})
export class RegistrarSuscripcionComponent implements OnInit {
  planes: Plan[] = [];
  hide = true;
  constructor(
    private suscriptionService: SuscriptionService,
    private planService: PlanService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.planService.todos().subscribe(
      (planes) => {
        this.planes = planes;
      },
      (error) => {
        alert("Error al consultar planes");
      }
    );
  }

  registrarSuscripcion(form: NgForm): void {
    let suscripcion: Suscripcion = {
      plan_id: form.value.plan_id,
      email: form.value.email,
      password: form.value.password,
    };
    this.suscriptionService.registrar(suscripcion).subscribe(
      () => {
        alert("Suscripcion registrada!!");
        this.router.navigateByUrl('/suscripciones');
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
