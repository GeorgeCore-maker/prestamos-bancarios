import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AddClientComponent } from 'src/app/components/add-client/add-client.component';
import { ListClientsComponent } from 'src/app/components/list-clients/list-clients.component';
import { StartComponent } from 'src/app/components/start/start.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'agregar', component: AddClientComponent }, // Ruta para el componente AddClientComponent
      { path: 'listar', component: ListClientsComponent }, // Ruta para el componente ListClientsComponent
      { path: 'start', component: StartComponent }, // Ruta para el componente StartComponent
      { path: '', redirectTo: 'start', pathMatch: 'full' }, // Redirección por defecto a 'start' si no se proporciona ninguna ruta
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
