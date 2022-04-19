import { Component, OnInit } from "@angular/core";
import { AuthService, GoogleLoginProvider } from "angular-6-social-login-v2";
import { UsuarioService } from "../../services/usuario.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"],
})
export class UserLoginComponent implements OnInit {
  constructor(
    private socialAuthService: AuthService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  email = "";
  password = "";

  loginConfirm() {
    this.usuarioService.buscarUsuarios(this.email , this.password).then((resultado) => {
      console.log(resultado[0])
        if (
          this.email == resultado[0].EMAIL
        ) {
          this.router.navigate(["listrestaurante"]);
          localStorage.setItem('USER', this.email);
          localStorage.setItem('IDUSER', resultado[0].ID)
        }
        else{
          console.log("deu errado :9")
      }
    });
  }

  ngAfterViewInit() {}

  public socialSignIn() {
    GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((userData) => {
        console.log(userData);
      });
  }

  ngOnInit() {}
}

interface User {
  EMAIL: string;
}
