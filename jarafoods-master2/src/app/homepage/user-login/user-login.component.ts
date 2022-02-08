import { Component, ElementRef, OnInit } from "@angular/core";
import { AuthService, GoogleLoginProvider } from "angular-6-social-login-v2";
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"],
})
export class UserLoginComponent implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private socialAuthService: AuthService,
    private usuarioService: UsuarioService,
  ) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      "#e2e2e5";
  }

  public socialSignIn() {
    GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((userData) => {
        console.log(userData);
      });
  }

  ngOnInit() {
    this.usuarioService.buscarUsuarios().then(resultado => {
      console.log('RESULT', resultado);
    }).catch(erro => {
      console.log('ERRO AO BUSCAR USUARIO', erro)
    })

  }
}
