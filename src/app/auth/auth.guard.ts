import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateChild,
} from "@angular/router";
import { AuthResponse } from "app/dtos/authResponse";
import { IAuthResponse } from "app/dtos/iAuthResponse";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.validarToken();
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.validarToken();
  }
  validarToken(): boolean {
    let authStorage = localStorage.getItem("authResponse");
    if (authStorage == null) {
      this.router.navigate(["login"]);
      return false;
    }
    let obj = JSON.parse(authStorage || "");
    if (obj == null) {
      this.router.navigate(["login"]);
      return false;
    }
    let authResponse: IAuthResponse = new AuthResponse(
      obj.access_token,
      obj.token_type,
      obj.expires_in,
      obj.scope,
      new Date(obj.date_expiration)
    );
    let fechaActual: Date = new Date();
    if (
      authResponse == null ||
      authResponse.getDateExpiration().getTime() < fechaActual.getTime()
    ) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
