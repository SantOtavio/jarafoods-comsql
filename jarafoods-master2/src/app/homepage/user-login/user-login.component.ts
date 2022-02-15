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
    this.usuarioService.buscarUsuarios().then((resultado: User[]) => {
      console.log(resultado)
      for (let i = 0; i < resultado.length; i++) {
        if (
          this.email == resultado[i].EMAIL &&
          this.password == resultado[i].PASSWORD
        ) {
          this.router.navigate(["listrestaurante"]);
          localStorage.setItem('USER', this.email)
          console.log("deu certo porran")
        }
        else{
          console.log("deu errado :9")
        }
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
  PASSWORD: string;
}
