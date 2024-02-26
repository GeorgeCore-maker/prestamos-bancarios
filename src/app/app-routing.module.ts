import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_PATH } from './app.routes.name';


const routes: Routes = [
  { path: APP_PATH.START, loadChildren: () => import('./pages/ui/dashboard/dashboard.module').then(x => x.DashboardModule) },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
