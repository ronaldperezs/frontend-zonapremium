
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SuscripcionesComponent } from './suscripciones/suscripciones.component';
import { PlataformasComponent } from "./plataformas/plataformas.component";
import { PlanesComponent } from "./planes/planes.component";
import { RegistrarSuscripcionComponent } from './registrar-suscripcion/registrar-suscripcion.component';
import { RecargarComponent } from './recargar/recargar.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { RegistrarPlataformaComponent } from './registrar-plataforma/registrar-plataforma.component';
import { RegistrarPlanComponent } from "./registrar-plan/registrar-plan.component";
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { EditarPlataformaComponent } from './editar-plataforma/editar-plataforma.component';
import { EditarPlanComponent } from './editar-plan/editar-plan.component';
import { EditarSuscripcionComponent } from './editar-suscripcion/editar-suscripcion.component';
import { ComprasComponent } from './compras/compras.component';
import { RegistrarComprasComponent } from './registrar-compras/registrar-compras.component';
import { VerComprasComponent } from './ver-compras/ver-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    UsuariosComponent,
    SuscripcionesComponent,
    PlataformasComponent,
    PlanesComponent,
    RegistrarSuscripcionComponent,
    RecargarComponent,
    RegistrarUsuarioComponent,
    RegistrarPlataformaComponent,
    RegistrarPlanComponent,
    EditarUsuarioComponent,
    EditarPlataformaComponent,
    EditarPlanComponent,
    EditarSuscripcionComponent,
    ComprasComponent,
    RegistrarComprasComponent,
    VerComprasComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
