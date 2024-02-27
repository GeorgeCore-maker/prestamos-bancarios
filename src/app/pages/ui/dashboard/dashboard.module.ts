import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AddClientComponent } from 'src/app/components/add-client/add-client.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StartComponent } from '../../../components/start/start.component';
import { ListClientsComponent } from '../../../components/list-clients/list-clients.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { LoanAmountComponent } from 'src/app/components/loan-amount/loan-amount.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddClientComponent,
    LoanAmountComponent,
    StartComponent,
    HeaderComponent,
    ListClientsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
