import { Injectable } from '@angular/core';
import { Invoice } from 'src/app/models/invoice';
import { RequestStatus } from 'src/app/models/request-status';

@Injectable()
export class InvoiceService {

  invoices: Invoice[] = [];
  getInvoicesStatus = RequestStatus.success();

  constructor() { }

  getInvoices(): Promise<Invoice[]> {
    try {
      this.getInvoicesStatus = RequestStatus.loading();
      return new Promise((resolve) => {
        setTimeout(() => {
          this.invoices = [
            {
              id: '12345',
              items: [],
              number: '12345',
              paid: false,
              total: 10000000,
              total_iva: 90000
            },
            {
              id: '123456',
              items: [],
              number: '123456',
              paid: true,
              total: 1030560000,
              total_iva: 9033000
            },
          ];
          this.getInvoicesStatus = RequestStatus.success();
          resolve(this.invoices);
        }, 1000);
      });
    } catch (e) {
      this.getInvoicesStatus = RequestStatus.error('Ha ocurrido un error. Intenta nuevamente.');
      throw e;
    }
  }
}
