import { Component } from '@angular/core';
import { StorageService } from '../../../../core/services/storage';
import { OrderService } from '../../../../core/services/order';

@Component({
  selector: 'app-order-list',
  imports: [],
  templateUrl: './order-list.html',
  styleUrl: './order-list.scss',
})
export class OrderList {
  orders: any[] = [];

  constructor(private order:OrderService
  ) {}

  ngOnInit() {

    this.orders =
    this.order.getOrders() ?? [];
    // this.storage.get<any[]>(
    //   'orders'
    // ) ?? [];
  }
}

