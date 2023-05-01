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
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { EditInvoiceComponent } from './components/edit-invoice/edit-invoice.component';


@NgModule({
  declarations: [
    InvoiceComponent,
    InvoicesListComponent,
    NewInvoiceComponent,
    InvoiceFormComponent,
    EditInvoiceComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    ReactiveFormsModule,
    NzTableModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzGridModule,
    SharedModule,
    IconsProviderModule,
    NzCheckboxModule
  ],
  providers: [
    InvoiceService
  ]
})
export class InvoiceModule { }
