import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  redirectRestSignup() {
    this.router.navigate(["/restcadastro"]);
  }

  redirectEntregadorSignup(){
    this.router.navigate(["/entregadorcadastro"])
  }

  redirectSuport(){
    this.router.navigate(["/suporte"])
  }

  redirectSignup(){
    this.router.navigate(["/registrousuario"])
  }

  redirectSignin(){
    this.router.navigate(["/loginuser"])
  }
}
