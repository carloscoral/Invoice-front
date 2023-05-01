import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ApiUrl } from 'src/app/constants/api-url';
import { Invoice, InvoiceInput } from 'src/app/models/invoice';
import { RequestStatus } from 'src/app/models/request-status';

@Injectable()
export class InvoiceService {

  invoices: Invoice[] = [];
  getInvoicesStatus = RequestStatus.success();
  createInvoiceStatus = RequestStatus.success();

  constructor(private http: HttpClient) { }

  async getInvoices(): Promise<boolean> {
    try {
      this.getInvoicesStatus = RequestStatus.loading();
      this.invoices = await firstValueFrom(this.http.get<Invoice[]>(ApiUrl.invoice));
      this.getInvoicesStatus = RequestStatus.success();
      return true;
    } catch (e) {
      this.getInvoicesStatus = RequestStatus.error('Ha ocurrido un error. Intenta nuevamente.');
      return false;
    }
  }

  async createInvoice(data: InvoiceInput): Promise<Invoice> {
    try {
      this.createInvoiceStatus = RequestStatus.loading();
      return await firstValueFrom(this.http.post<Invoice>(ApiUrl.invoice, data));
      this.createInvoiceStatus = RequestStatus.success();
    } catch (e) {
      this.createInvoiceStatus = RequestStatus.error('Ha ocurrido un error. Intenta nuevamente');
      throw e;
    }
  }
}
