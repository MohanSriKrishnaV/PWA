import { Component, inject, ɵɵviewQuerySignal } from '@angular/core';
import { CartStore } from '../../../core/stores/cart.store';
import { FormsModule } from '@angular/forms';
import { CUSTOMERS } from '../../../core/data/customers';
import { OrderService } from '../../../core/services/order';
import { Order } from '../../../core/models/order.model';
import { MATERIAL_IMPORTS } from '../../../shared/material-imports';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, ...MATERIAL_IMPORTS],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  constructor( private snackBar:MatSnackBar){

  }
    cartStore = inject(CartStore);
selectedCustomerId = 0;
customers=CUSTOMERS;
private orderService = inject(OrderService);
async checkout() {

  if (!this.selectedCustomerId) {
    // alert('Select customer');
     this.snackBar.open(
  'Select Customer',
  'Close',
  {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
        panelClass: ['success-snackbar']
  },
);
    return;
  }

  const customer =
    this.customers.find(
      c => c.id === this.selectedCustomerId
    );

  if (!customer) {
    return;
  }

  const order: Order = {

    id: Date.now(),

    customerId: customer.id,

    customerName: customer.name,

    // items: this.cartStore.cartItems(),

    totalAmount:
      this.cartStore.totalAmount(),

    orderDate:
      new Date().toISOString(),
      quantity: this.cartStore.totalItems(),
      productId: this.cartStore.cartItems().map(item => item.product.id),
      productName: this.cartStore.cartItems().map(item => item.product.name),
      syncStatus: 'PENDING'
  };

  await this.orderService.saveOrder(order);

  this.cartStore.clearCart();

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

