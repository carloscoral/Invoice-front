import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/invoice';
import { InvoiceService } from '../../service/invoice.service';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {
  invoices: Invoice[] = [];

  get invoicesStatus() {
    return this.invoiceService.getInvoicesStatus;
  }

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.loadInvoices(); 
  }

  async loadInvoices() {
    this.invoices = await this.invoiceService.getInvoices();
  }
}
