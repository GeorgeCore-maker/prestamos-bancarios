import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientComponent } from 'src/app/components/add-client/add-client.component';
import { LoanAmountModule } from '../loan-amount/loan-amount.module';

@NgModule({
  declarations: [AddClientComponent],
  imports: [
    CommonModule,
    LoanAmountModule,
  ]
})
export class AddClientModule { }
