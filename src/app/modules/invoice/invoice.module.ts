import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { InvoiceService } from './service/invoice.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    InvoiceComponent,
    InvoicesListComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    NzTableModule,
    SharedModule
  ],
  providers: [
    InvoiceService
  ]
})
export class InvoiceModule { }
