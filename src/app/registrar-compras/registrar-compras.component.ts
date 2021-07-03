import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material';
import { Compra } from 'app/dtos/compra';
import { Plan } from 'app/dtos/plan';
import { SolicitudPago } from 'app/dtos/solicitudPago';
import { Plataforma } from 'app/dtos/plataforma';
import { CompraService } from 'app/services/compra.service';
import { PlanService } from 'app/services/plan.service';
import { PlataformaService } from 'app/services/plataforma.service';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: "app-registrar-compras",
  templateUrl: "./registrar-compras.component.html",
  styleUrls: ["./registrar-compras.component.css"],
})
export class RegistrarComprasComponent implements OnInit {

  solicitudPago: SolicitudPago;
  form: FormGroup;
  plataformas: Plataforma[] = [];
  planes: Plan[] = [];
  plan?: Plan;
  planId?: number;
  precio_revendedor: Number = 0;
  url = environment.urlPagos;
  noDisponible = true;
  constructor(
    private plataformaService: PlataformaService,
    private planService: PlanService,
    private compraService: CompraService,
    private router: Router
  ) {
    this.form = this.crearFormulario();
    this.solicitudPago = this.crearSolicitudPago();
  }

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

  crearFormulario(): FormGroup {
    return new FormGroup({
      plan_id: new FormControl(this.planId, [Validators.required, Validators.pattern('[0-9]+')], this.estaPlanDisponible())
    });
  }

  crearSolicitudPago(): SolicitudPago {
    return {
      merchantId: 0,
      accountId: 0,
      description: "Test PAYU",
      referenceCode: "",
      amount: 0,
      tax: 0,
      taxReturnBase: 0,
      currency: "COP",
      signature: "",
      test: 1,
      buyerEmail: "test@test.com",
      responseUrl: "",
      confirmationUrl: ""
    };
  }
  onChangePlataforma(plataformaChange: MatSelectChange) {
    this.plataformaService.planes(plataformaChange.value).subscribe(
      (planes) => {
        this.planes = planes;
      },
      (error) => {
        alert("Error al cargar planes");
        console.error(error);
      }
    );
  }
  onChangePlan(planChange: MatSelectChange) {
    this.plan = undefined;
    this.plan = this.planes.find(x => x.id == planChange.value);
  }

  estaPlanDisponible(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      let compra: Compra = { plan_id: control.value };
      return this.compraService.registrar(compra).pipe(map((response) => {
        console.log(response.referenceCode + " " + response.signature);
        this.solicitudPago = response;
        this.noDisponible = false;
        this.precio_revendedor = response.amount;
        return null;
      }));
    };
  }
  comprarConSaldo(): void {
    if (this.plan == undefined || this.plan?.id == undefined) {
      alert("error al seleccionar plan");
      throw 'plan undefined';
    }
    this.compraService.comprarConSaldo(this.plan?.id).subscribe(() => {
      alert("Compra realizada con exito!");
      this.router.navigateByUrl('/compras');
    }, (error) => {
      alert(error.error);
    })
  }
}
