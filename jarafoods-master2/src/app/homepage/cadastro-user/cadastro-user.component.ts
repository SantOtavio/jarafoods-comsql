import { Component, OnInit } from "@angular/core";
import { AuthService, GoogleLoginProvider } from "angular-6-social-login-v2";
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: "app-cadastro-user",
  templateUrl: "./cadastro-user.component.html",
  styleUrls: ["./cadastro-user.component.css"],
})
export class CadastroUserComponent implements OnInit {
  constructor(
    private socialAuthService: AuthService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {}

  nome = "";
  password = "";
  email = "";

  public socialSignIn() {
    GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((userData) => {
        console.log(userData);
      });
  }

  registerconfirm() {
    this.usuarioService.cadastrarUsuarios(this.nome , this.password , this.email);
  }
}
