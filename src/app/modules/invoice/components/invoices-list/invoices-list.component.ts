import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/invoice';
import { InvoiceService } from '../../service/invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {

  get invoicesStatus() {
    return this.invoiceService.getInvoicesStatus;
  }

  get invoices(): Invoice[] {
    return this.invoiceService.invoices;
  }

  constructor(
    private invoiceService: InvoiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.invoiceService.getInvoices();
  }

  edit(id: string) {
    this.router.navigate(['/dashboard/invoice', id]);
  }
}
