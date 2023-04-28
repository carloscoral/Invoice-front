import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { InvoiceService } from './service/invoice.service';
import { SharedModule } from '../shared/shared.module';
import { NewInvoiceComponent } from './components/new-invoice/new-invoice.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IconsProviderModule } from 'src/app/icons-provider.module';


@NgModule({
  declarations: [
    InvoiceComponent,
    InvoicesListComponent,
    NewInvoiceComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    NzTableModule,
    NzButtonModule,
    SharedModule,
    IconsProviderModule
  ],
  providers: [
    InvoiceService
  ]
})
export class InvoiceModule { }
