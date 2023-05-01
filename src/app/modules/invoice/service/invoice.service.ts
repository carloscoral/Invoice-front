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
  getInvoiceStatus = RequestStatus.success();
  updateInvoiceStatus = RequestStatus.success();

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
      const result = await firstValueFrom(this.http.post<Invoice>(ApiUrl.invoice, data));
      this.createInvoiceStatus = RequestStatus.success();
      return result;
    } catch (e) {
      this.createInvoiceStatus = RequestStatus.error('Ha ocurrido un error. Intenta nuevamente');
      throw e;
    }
  }

  async getInvoice(id: string): Promise<Invoice> {
    try {
      this.getInvoiceStatus = RequestStatus.loading();
      const result = await firstValueFrom(this.http.get<Invoice>(`${ApiUrl.invoice}/${id}`));
      this.getInvoiceStatus = RequestStatus.success();
      return result;
    } catch (e) {
      this.getInvoiceStatus = RequestStatus.error('Ha ocurrido un error. Intenta nuevamente');
      throw e;
    }
  }

  async updateInvoice(id: string, data: InvoiceInput): Promise<Invoice> {
    try {
      this.updateInvoiceStatus = RequestStatus.loading();
      const result = await firstValueFrom(this.http.put<Invoice>(`${ApiUrl.invoice}/${id}`, data));
      this.updateInvoiceStatus = RequestStatus.success();
      return result;
    } catch (e) {
      this.updateInvoiceStatus = RequestStatus.error('Ha ocurrido un error. Intenta nuevamente.')
      throw e;
    }
  }
}
