import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Invoice, InvoiceInput, InvoiceItem } from 'src/app/models/invoice';
import { InvoiceService } from '../../service/invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  @Input() invoice: Invoice|undefined;

  error = '';
  form = new FormGroup({
    number: new FormControl('', Validators.required),
    paid: new FormControl(false),
    items: new FormArray<any>([])
  });

  get items() {
    return this.form.controls.items;
  }

  constructor(
    private invoiceService: InvoiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.invoice) {
      this.form = new FormGroup({
        number: new FormControl(this.invoice?.number || '', Validators.required),
        paid: new FormControl(this.invoice?.paid || false),
        items: new FormArray<any>([])
      });
      this.invoice.items.forEach(item => {
        this.addItem(item);
      });
    }
  }

  submit() {
    this.error = '';
    if (this.form.valid) {
      if (this.items.length === 0) {
        this.error = 'Debes añadir al menos un item.'
      } else {
        if (this.invoice) {
          this.updateInvoice();
        } else  {
          this.createInvoice();
        }
      }
    } else {
      this.error = 'El formulario contiene errores';
    }
  }

  async updateInvoice() {
    try {
      if (this.invoice) {
        const data = this.getData();
        await this.invoiceService.updateInvoice(this.invoice.id, data);
        window.location.reload();
      }
    } catch (e) {
      this.error = 'Algo ha salido mal, intenta nuevamente.'
    }
  }

  async createInvoice() {
    try {
      const data = this.getData();
      await this.invoiceService.createInvoice(data);
      this.router.navigate(['/dashboard/invoice']);
    } catch (e) {
      this.error = 'Algo ha salido mal, intenta nuevamente.'
    }
  }

  getData(): InvoiceInput {
    return {
      number: this.form.controls.number.value || '',
      paid: this.form.controls.paid.value || false,
      items: this.items.controls.map(item => {
        const value = item.value;
        return {
          amount: value.amount,
          description: value.description,
          iva: value.iva,
          baseValue: value.included_iva ? this.getBaseValue(value.baseValue, value.iva) : value.baseValue
        }
      })
    };
  }

  getBaseValue(value: number, iva: number): number {
    return Math.round((value / ( 1 + iva )) * 100) / 100;
  }

  addItem(data?: InvoiceItem) {
    this.items.push(new FormGroup({
      description: new FormControl(data?.description || '', Validators.required),
      baseValue: new FormControl(data?.baseValue || 0, [Validators.required, Validators.min(0)]),
      iva: new FormControl(data?.iva || 0.19, [Validators.required, Validators.min(0), Validators.max(1)]),
      included_iva: new FormControl(false),
      amount: new FormControl(data?.amount || 1, [Validators.required, Validators.min(1)])
    }));
  }

  deleteItem(i: number) {
    this.items.removeAt(i);
  }
}
