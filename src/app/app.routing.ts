import { Routes } from "@angular/router";

import { FullComponent } from "./layouts/full/full.component";
import { AuthGuard } from "./auth/auth.guard";
import { LoginComponent } from "./login/login.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { SuscripcionesComponent } from "./suscripciones/suscripciones.component";
import { RegistrarSuscripcionComponent } from "./registrar-suscripcion/registrar-suscripcion.component";
import { RecargarComponent } from "./recargar/recargar.component";
import { RegistrarUsuarioComponent } from "./registrar-usuario/registrar-usuario.component";
import { PlataformasComponent } from "./plataformas/plataformas.component";
import { PlanesComponent } from "./planes/planes.component";
import { RegistrarPlataformaComponent } from "./registrar-plataforma/registrar-plataforma.component";
import { RegistrarPlanComponent } from "./registrar-plan/registrar-plan.component";
import { EditarUsuarioComponent } from "./editar-usuario/editar-usuario.component";
import { EditarPlataformaComponent } from "./editar-plataforma/editar-plataforma.component";
import { EditarPlanComponent } from "./editar-plan/editar-plan.component";
import { EditarSuscripcionComponent } from "./editar-suscripcion/editar-suscripcion.component";
import { ComprasComponent } from "./compras/compras.component";
import { RegistrarComprasComponent } from "./registrar-compras/registrar-compras.component";
import { VerComprasComponent } from "./ver-compras/ver-compras.component";

export const AppRoutes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "registrarse",
    component: RegistrarUsuarioComponent,
    loadChildren: () =>
      import("./material-component/material.module").then(
        (m) => m.MaterialComponentsModule
      ),
  },
  {
    path: "",
    component: FullComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full",
      },
      {
        path: "usuarios",
        component: UsuariosComponent,
      },
      {
        path: "usuarios/:id",
        component: EditarUsuarioComponent,
      },
      {
        path: "plataformas",
        component: PlataformasComponent,
      },
      {
        path: "plataformas/registrar",
        component: RegistrarPlataformaComponent,
      },
      {
        path: "plataformas/:id",
        component: EditarPlataformaComponent,
      },
      {
        path: "planes",
        component: PlanesComponent,
      },
      {
        path: "planes/registrar",
        component: RegistrarPlanComponent,
      },
      {
        path: "planes/:id",
        component: EditarPlanComponent,
      },
      {
        path: "suscripciones",
        component: SuscripcionesComponent,
      },
      {
        path: "suscripciones/registrar",
        component: RegistrarSuscripcionComponent,
      },
      {
        path: "suscripciones/:id",
        component: EditarSuscripcionComponent,
      },
      {
        path: "compras",
        component: ComprasComponent,
      },
      {
        path: "compras/registrar",
        component: RegistrarComprasComponent,
      },
      {
        path: "compras/:id",
        component: VerComprasComponent,
      },
      {
        path: "recargar",
        component: RecargarComponent,
      },
      {
        path: "",
        loadChildren: () =>
          import("./material-component/material.module").then(
            (m) => m.MaterialComponentsModule
          ),
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
    ],
  },
];
