import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientComponent } from 'src/app/components/add-client/add-client.component';
import { LoanAmountModule } from '../loan-amount/loan-amount.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddClientComponent],
  imports: [
    CommonModule,
    LoanAmountModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddClientModule { }
