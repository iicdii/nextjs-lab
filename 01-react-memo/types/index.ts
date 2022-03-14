export interface ProductVoucher {
  title: string;
  products: Product[];
}

export interface Product {
  name: string;
  uid: string;
  amount: number;
  vat: number;
};
