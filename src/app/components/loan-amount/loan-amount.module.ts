import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanAmountComponent } from './loan-amount.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoanAmountComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [LoanAmountModule]
})
export class LoanAmountModule { }
