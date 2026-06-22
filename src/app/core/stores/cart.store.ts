import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartStore {

  cartItems = signal<CartItem[]>([]);

  totalItems = computed(() =>
    this.cartItems().reduce(
      (sum, item) => sum + item.quantity,
      0
    )
  );

  totalAmount = computed(() =>
    this.cartItems().reduce(
      (sum, item) =>
        sum + (item.product.price * item.quantity),
      0
    )
  );

  addToCart(product: Product) {

    const existing = this.cartItems()
      .find(item => item.product.id === product.id);

    if (existing) {

      this.cartItems.update(items =>
        items.map(item =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );

      return;
    }

    this.cartItems.update(items => [
      ...items,
      {
        product,
        quantity: 1
      }
    ]);
  }

  clearCart() {
    this.cartItems.set([]);
  }

  removeFromCart(productId: number) {

  this.cartItems.update(items =>
    items.filter(
      item => item.product.id !== productId
    )
  );


}

increaseQuantity(productId: number) {

  this.cartItems.update(items =>
    items.map(item =>
      item.product.id === productId
        ? {
            ...item,
            quantity: item.quantity + 1
          }
        : item
    )
  );

}

decreaseQuantity(productId: number) {

  this.cartItems.update(items =>
    items
      .map(item =>
        item.product.id === productId
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      )
      .filter(item => item.quantity > 0)
  );

}
}