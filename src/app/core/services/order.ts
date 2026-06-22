import { Service } from '@angular/core';
import { StorageService } from './storage';
import { Order } from '../models/order.model';
import { Injectable } from '@angular/core';

@Injectable(
    {
       providedIn: "root"
    }
)
export class OrderService {

     private readonly STORAGE_KEY = 'orders';

  constructor(
    private storage: StorageService
  ) {}

  getOrders(): Order[] {
    return this.storage.get<Order[]>(
      this.STORAGE_KEY
    ) ?? [];
  }

  saveOrder(order: Order): void {

    const orders = this.getOrders();

    orders.push(order);

    this.storage.set(
      this.STORAGE_KEY,
      orders
    );
  }

  clearOrders(): void {
    this.storage.set(
      this.STORAGE_KEY,
      []
    );
  }

  createOrder(order: Order) {

  const orders = this.getOrders();

  orders.push(order);

  this.storage.set(
    'orders',
    orders
  );
}
}
