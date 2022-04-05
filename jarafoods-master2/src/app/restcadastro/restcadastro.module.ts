import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CadastrorestauranteComponent } from "./cadastrorestaurante/cadastrorestaurante.component";
import { FormsModule } from "@angular/forms";

import { Routes, RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule , FormsModule , RouterModule],
  declarations: [CadastrorestauranteComponent],
})
export class RestcadastroModule {}
