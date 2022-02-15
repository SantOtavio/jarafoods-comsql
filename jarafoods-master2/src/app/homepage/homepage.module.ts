import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { CadastroUserComponent } from "./cadastro-user/cadastro-user.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule , FormsModule,],
  declarations: [LoginComponent, CadastroUserComponent, UserLoginComponent],
})
export class HomepageModule {}
