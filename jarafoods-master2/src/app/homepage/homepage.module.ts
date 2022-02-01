import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent, CadastroUserComponent, UserLoginComponent],
})
export class HomepageModule {}
