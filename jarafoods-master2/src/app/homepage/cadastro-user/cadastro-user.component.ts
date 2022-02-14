import { Component, OnInit } from "@angular/core";
import { AuthService, GoogleLoginProvider } from "angular-6-social-login-v2";

@Component({
  selector: "app-cadastro-user",
  templateUrl: "./cadastro-user.component.html",
  styleUrls: ["./cadastro-user.component.css"],
})
export class CadastroUserComponent implements OnInit {
  constructor(private socialAuthService: AuthService) {}

  ngOnInit() {}

  public socialSignIn() {
    GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((userData) => {
        console.log(userData);
      });
  }

  registerconfirm(){
    
  }
}
