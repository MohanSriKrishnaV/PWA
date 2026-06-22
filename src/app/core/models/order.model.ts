export interface Order {

  id: number;

  customerId: number;

  customerName: string;

  productId: number[];

  productName: string[];

  quantity: number;

  totalAmount: number;

  orderDate: string;
}