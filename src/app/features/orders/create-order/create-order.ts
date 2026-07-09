import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PRODUCTS } from '../../../core/data/products';
import { CUSTOMERS } from '../../../core/data/customers';
import { OrderService } from '../../../core/services/order';
import { MATERIAL_IMPORTS } from '../../../shared/material-imports';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [FormsModule, ...MATERIAL_IMPORTS],
  templateUrl: './create-order.html',
  styleUrl: './create-order.scss',
})


export class CreateOrder {
  customers = CUSTOMERS;

  products = PRODUCTS;

  customerId = 0;

  productId = 0;

  quantity = 1;

  constructor(private order:OrderService,private snackBar:MatSnackBar
  ) {}

  async placeOrder() {

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
  await this.order.getOrders();

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
      new Date().toISOString(),

          syncStatus: 'PENDING'
  };
 await this.order.saveOrder(order);

  // alert('Order Created');
    this.snackBar.open(
  'Order Created',
  'Close',
  {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
        panelClass: ['warning-snackbar']
  },
);
}


}
