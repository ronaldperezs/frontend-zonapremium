import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from 'app/dtos/plan';
import { Suscripcion } from 'app/dtos/suscripcion';
import { PlanService } from 'app/services/plan.service';
import { SuscriptionService } from 'app/services/suscription.service';

@Component({
  selector: "app-ver-compras",
  templateUrl: "./ver-compras.component.html",
  styleUrls: ["./ver-compras.component.css"],
})
export class VerComprasComponent implements OnInit {
  suscripcion: Suscripcion = {
    plan_id: 0,
  };
  plan: Plan = { calidad: "", descripcion: "", duracion: 0, nombre: "", precio: 0, tipo_cuenta: "", plataforma_id: 0 };
  idSuscripcion: number;
  hide: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private suscriptionService: SuscriptionService,
    private planService: PlanService
  ) {
    let idParam = this.route.snapshot.paramMap.get("id");
    if (idParam == null) {
      alert("parametro id no puede ser nulo");
      this.router.navigateByUrl("/compras");
      throw new Error("parametro id no puede ser nulo");
    }
    this.idSuscripcion = parseInt(idParam);
  }

  ngOnInit(): void {
    this.suscriptionService.buscarPorId(this.idSuscripcion).subscribe(
      (suscripcion) => {
        this.suscripcion = suscripcion;
        this.planService.buscarPorId(this.suscripcion.plan_id).subscribe((plan) => {
          this.plan = plan;
        },
          (error) => {
            alert("error al consutar plan de suscripción");
            this.router.navigateByUrl("/suscripciones");
          });
      },
      (error) => {
        alert("error al consutar suscripción");
        this.router.navigateByUrl("/suscripciones");
      }
    );
  }
}
