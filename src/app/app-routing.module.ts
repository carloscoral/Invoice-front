import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', pathMatch: 'full', redirectTo: '/sign-in' },
  { path: 'sign-in', loadChildren: () => import('./modules/sign-in/sign-in.module').then(m => m.SignInModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
