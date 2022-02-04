import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportClientComponent } from './support-client/support-client.component';
import { ThankspageComponent } from './thankspage/thankspage.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SupportClientComponent, ThankspageComponent]
})
export class SupportModule { }
