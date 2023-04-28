import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {

  get isHome() {
    return this.location.path() === '/dashboard/invoice';
  }

  constructor(
    private router: Router,
    private location: Location
  ) {}

  goBack() {
    this.location.back();
  }

  createNewInvoice() {
    this.router.navigate(['/dashboard/invoice/new']);
  }
}
