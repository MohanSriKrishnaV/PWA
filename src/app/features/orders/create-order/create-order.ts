import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PRODUCTS } from '../../../core/data/products';
import { CUSTOMERS } from '../../../core/data/customers';
import { OrderService } from '../../../core/services/order';

@Component({
  selector: 'app-create-order',
  imports: [FormsModule],
  templateUrl: './create-order.html',
  styleUrl: './create-order.scss',
  standalone: true
})


export class CreateOrder {
  customers = CUSTOMERS;

  products = PRODUCTS;

  customerId = 0;

  productId = 0;

  quantity = 1;

  constructor(private order:OrderService
  ) {}

  placeOrder() {

  const customer =
    this.customers.find(
      c => c.id == this.customerId
    );

  const product =
    this.products.find(
      p => p.id == this.productId
    );

  if (!customer || !product) {
    return;
  }

  const orders =
  this.order.getOrders() ?? [];

  const order: any = {

    id: Date.now(),

    customerId: customer.id,

    customerName: customer.name,

    productId: product.id,

    productName: product.name,

    quantity: this.quantity,

    totalAmount:
      product.price * this.quantity,

    orderDate:
      new Date().toISOString()
  };

  orders.push(order);

  // this.storage.set(
  //   'orders',
  //   orders
  // );
  this.order.saveOrder(order);

  alert('Order Created');
}
}
