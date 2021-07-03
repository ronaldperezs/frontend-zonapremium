import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "app/auth/auth.service";
import { AuthResponse } from "app/dtos/authResponse";
import { IAuthResponse } from "app/dtos/iAuthResponse";
import { Login } from "app/dtos/login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginInProgress = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: "",
      password: "",
    });
  }
  ngOnInit(): void {}

  onSubmit(login: Login) {
    this.loginInProgress = true;
    this.authService.authenticate(login).subscribe(
      (obj: any) => {
        let authResponse: IAuthResponse = new AuthResponse(
          obj.access_token,
          obj.token_type,
          obj.expires_in,
          obj.scope,
          new Date(new Date().getTime() + obj.expires_in * 1000)
        );
        // if (authResponse.getScope() != 'admin') {
        //   this.loginInProgress = false;
        //   alert("Tipo de usuario no autorizado para ingresar");
        //   throw Error("Tipo de usuario no autorizado para ingresar");
        // }
        // console.log(JSON.stringify(authResponse));
        localStorage.setItem("authResponse", JSON.stringify(authResponse));
        this.router.navigateByUrl("/dashboard");
      },
      (error) => {
        this.loginInProgress = false;
        alert(error.error.message);
      }
    );
  }
}
