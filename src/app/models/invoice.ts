export interface InvoiceItem {
  baseValue: number;
  iva: number;
  description: string;
  amount: number;
  total: number;
}

export interface Invoice {
  id: string;
  number: string;
  paid: boolean;
  total: number;
  total_iva: number;
  items: InvoiceItem[];
}

export interface InvoiceItemInput {
  baseValue: number;
  iva: number;
  description: number;
  amount: number;
}

export interface InvoiceInput {
  number: string;
  paid: boolean;
  items: InvoiceItemInput[];
}