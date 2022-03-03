import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarestauranteComponent } from './listarestaurante/listarestaurante.component';
import { Router } from '@angular/router';
import { EditrestauranteComponent } from './editrestaurante/editrestaurante.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ListarestauranteComponent, EditrestauranteComponent]
})
export class ContentpageModule { }
