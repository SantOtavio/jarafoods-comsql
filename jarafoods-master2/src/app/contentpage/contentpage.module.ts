import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarestauranteComponent } from './listarestaurante/listarestaurante.component';
import { EditrestauranteComponent } from './editrestaurante/editrestaurante.component';
import { RestpageComponent } from './restpage/restpage.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ListarestauranteComponent, EditrestauranteComponent, RestpageComponent]
})
export class ContentpageModule {}
