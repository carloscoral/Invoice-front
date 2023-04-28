import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'invoice',
        loadChildren: () => import('../invoice/invoice.module').then(m => m.InvoiceModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard/invoice'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
