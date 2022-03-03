import { EdtirestauranteMainComponent } from "./contentpage/edtirestaurante-main/edtirestaurante-main.component";
import { EditrestauranteComponent } from "./contentpage/editrestaurante/editrestaurante.component";
import { ThankspageComponent } from "./support/thankspage/thankspage.component";
import { UserLoginComponent } from "./homepage/user-login/user-login.component";
import { CadastroUserComponent } from "./homepage/cadastro-user/cadastro-user.component";
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

import { ContentpageModule } from "./contentpage/contentpage.module";
import { ListarestauranteComponent } from "./contentpage/listarestaurante/listarestaurante.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular-6-social-login-v2";
import CheckLogged from "./checkLogged.canActivate";


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "*", redirectTo: "" },
  { path: "restcadastro", component: CadastrorestauranteComponent },
  { path: "entregadorcadastro", component: EntregadorSignupComponent },
  { path: "suporte", component: SupportClientComponent },
  { path: "registrousuario", component: CadastroUserComponent },
  { path: "loginuser", component: UserLoginComponent },
  { path: "thankspage", component: ThankspageComponent },
  {
    path: "listrestaurante",
    canActivate: [CheckLogged],
    component: ListarestauranteComponent,
  },
  {
    path: "editrestaurante",
    canActivate: [CheckLogged],
    component: EditrestauranteComponent,
  },
  {
    path: "editrestaurantemain",
    canActivate: [CheckLogged],
    component: EdtirestauranteMainComponent,
  },
];

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
        "951388737757-mlmid6c88d1vf7s002q9itjsugeg65ra.apps.googleusercontent.com"
      ),
    },
  ]);
  return config;
}

@NgModule({
  declarations: [AppComponent, EdtirestauranteMainComponent],
  imports: [
    BrowserModule,
    HomepageModule,
    RestcadastroModule,
    EntregadorModule,
    SupportModule,
    SocialLoginModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    ContentpageModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs,
    },
    CheckLogged,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
