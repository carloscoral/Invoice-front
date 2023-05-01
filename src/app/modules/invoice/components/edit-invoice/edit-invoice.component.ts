import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../../service/invoice.service';
import { Invoice } from 'src/app/models/invoice';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.scss']
})
export class EditInvoiceComponent implements OnInit {

  id = '';
  error = '';
  invoice: Invoice|undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.loadInvoice();
  }

  async loadInvoice() {
    this.error = '';
    try {
      this.invoice = await this.invoiceService.getInvoice(this.id);
    } catch (e) {
      this.error = 'Ha ocurrido un error, intenta nuevamente';
    }
  }
}
