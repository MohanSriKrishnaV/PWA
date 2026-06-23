import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderDbService extends Dexie {

  orders!: Table<Order, number>;

  constructor() {

    super('SalesOrderDB');

    this.version(1).stores({
      orders: `
        id,
        syncStatus,
        customerId,
        customerName,
        productId,
        productName,
        orderDate
      `
    });
  }

  async addOrder(order: Order): Promise<number> {

    return await this.orders.add(order);

  }

  async updateOrder(order: Order): Promise<number> {

    return await this.orders.put(order);

  }

  async getOrders(): Promise<Order[]> {

    return await this.orders.toArray();

  }

  async getPendingOrders(): Promise<Order[]> {

    return await this.orders
      .where('syncStatus')
      .equals('PENDING')
      .toArray();

  }

  async deleteOrder(id: number): Promise<void> {

    await this.orders.delete(id);

  }

  async clearOrders(): Promise<void> {

    await this.orders.clear();

  }

}