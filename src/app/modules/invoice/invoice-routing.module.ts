import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice.component';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';
import { NewInvoiceComponent } from './components/new-invoice/new-invoice.component';
import { EditInvoiceComponent } from './components/edit-invoice/edit-invoice.component';

const routes: Routes = [
  {
    path: '',
    component: InvoiceComponent,
    children: [
      { path: '', component: InvoicesListComponent },
      { path: 'new', component: NewInvoiceComponent },
      { path: ':id', component: EditInvoiceComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
