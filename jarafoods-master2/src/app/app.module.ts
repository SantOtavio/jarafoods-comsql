import { UserLoginComponent } from './homepage/user-login/user-login.component';
import { CadastroUserComponent } from './homepage/cadastro-user/cadastro-user.component';
import { LoginComponent } from "./homepage/login/login.component";
import { HomepageModule } from "./homepage/homepage.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { Routes, RouterModule } from "@angular/router";
import { RestcadastroModule } from "./restcadastro/restcadastro.module";
import { CadastrorestauranteComponent } from "./restcadastro/cadastrorestaurante/cadastrorestaurante.component";

import { EntregadorModule } from "./entregador/entregador.module";
import { EntregadorSignupComponent } from "./entregador/entregador-signup/entregador-signup.component";

import { SupportClientComponent } from "./support/support-client/support-client.component";
import { SupportModule } from "./support/support.module";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "*", redirectTo: "" },
  { path: "restcadastro", component: CadastrorestauranteComponent },
  { path: "entregadorcadastro", component: EntregadorSignupComponent },
  { path: "suporte", component: SupportClientComponent },
  {path: "registrousuario", component: CadastroUserComponent},
  {path: "loginuser", component: UserLoginComponent},

];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomepageModule,
    RestcadastroModule,
    EntregadorModule,
    SupportModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
