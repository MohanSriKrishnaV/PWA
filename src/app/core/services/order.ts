import { Injectable } from '@angular/core';
import { StorageService } from './storage';
import { Order } from '../models/order.model';
import { OrderDbService } from './db';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly STORAGE_KEY = 'orders';

  constructor(
    private storage: StorageService,
    private db: OrderDbService
  ) {}

  /* =====================================================
     LOCAL STORAGE IMPLEMENTATION (OLD)
     ===================================================== */

  // getOrders(): Order[] {
  //   return this.storage.get<Order[]>(
  //     this.STORAGE_KEY
  //   ) ?? [];
  // }

  // saveOrder(order: Order): void {
  //
  //   const orders = this.getOrders();
  //
  //   orders.push(order);
  //
  //   this.storage.set(
  //     this.STORAGE_KEY,
  //     orders
  //   );
  // }

  // clearOrders(): void {
  //
  //   this.storage.set(
  //     this.STORAGE_KEY,
  //     []
  //   );
  //
  // }

  // createOrder(order: Order) {
  //
  //   const orders = this.getOrders();
  //
  //   orders.push(order);
  //
  //   this.storage.set(
  //     this.STORAGE_KEY,
  //     orders
  //   );
  // }

  // syncOrders() {
  //
  //   const orders = this.getOrders();
  //
  //   orders.forEach(order => {
  //
  //     if (order.syncStatus === 'PENDING') {
  //
  //       setTimeout(() => {
  //
  //         order.syncStatus = 'SYNCED';
  //
  //         this.storage.set(
  //           this.STORAGE_KEY,
  //           orders
  //         );
  //
  //       }, 500);
  //     }
  //   });
  // }

  /* =====================================================
     INDEXED DB IMPLEMENTATION (NEW)
     ===================================================== */

  async getOrders(): Promise<Order[]> {
console.log('Fetching orders from IndexedDB...',this.db.orders);
    return await this.db.orders.toArray();

  }

  async saveOrder(
    order: Order
  ): Promise<void> {

    await this.db.orders.add(order);

  }

  async updateOrder(
    order: Order
  ): Promise<void> {

    await this.db.orders.put(order);

  }

  async getOrderById(
    id: number
  ): Promise<Order | undefined> {

    return await this.db.orders.get(id);

  }

  async getPendingOrders(): Promise<Order[]> {

    return await this.db.orders
      .where('syncStatus')
      .equals('PENDING')
      .toArray();

  }

  async clearOrders(): Promise<void> {

    await this.db.orders.clear();

  }

  async deleteOrder(
    id: number
  ): Promise<void> {

    await this.db.orders.delete(id);

  }

  async syncOrders(): Promise<void> {

    const orders = await this.getPendingOrders();

    for (const order of orders) {

      // setTimeout(async () => {

        order.syncStatus = 'SYNCED';
    

        await this.updateOrder(order);

      // }, 500);

    }

  }

}