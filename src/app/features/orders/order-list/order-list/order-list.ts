import { Component, inject } from '@angular/core';
import { StorageService } from '../../../../core/services/storage';
import { OrderService } from '../../../../core/services/order';
import { MATERIAL_IMPORTS } from '../../../../shared/material-imports';
import { CommonModule } from '@angular/common';
import { SyncService } from '../../../../core/services/sync';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [...MATERIAL_IMPORTS,CommonModule],
  templateUrl: './order-list.html',
  styleUrl: './order-list.scss',
})
export class OrderList {
  orders: any[] = [];

  constructor(private order:OrderService
  ) {}

  network = inject(SyncService);

  ngOnInit() {

    this.orders =
    this.order.getOrders() ?? [];
    // this.storage.get<any[]>(
    //   'orders'
    // ) ?? [];
  }

  syncOrders(){
    this.order.syncOrders();
    this.orders = this.order.getOrders() ?? []; 
  }
}

