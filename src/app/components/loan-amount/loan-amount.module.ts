import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanAmountComponent } from './loan-amount.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoanAmountComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [LoanAmountComponent]
})
export class LoanAmountModule { }
