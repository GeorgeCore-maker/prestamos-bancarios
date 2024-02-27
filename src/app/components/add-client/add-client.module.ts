import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientComponent } from 'src/app/components/add-client/add-client.component';
import { LoanAmountModule } from '../loan-amount/loan-amount.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [AddClientComponent],
  imports: [
    CommonModule,
    LoanAmountModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClient
  ]
})
export class AddClientModule { }
