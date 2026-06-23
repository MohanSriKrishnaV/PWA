import { Component, signal } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../shared/material-imports';
import { Order } from '../../../core/models/order.model';
import { OrderDbService } from '../../../core/services/db';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './reports.html',
  styleUrl: './reports.scss',
})
export class Reports {

  constructor(private orderService:OrderDbService){

  }


  orders: Order[] = [];

totalOrders = signal<number>(0);

totalRevenue = signal<number>(0);

pendingOrders = signal<number>(0);

syncedOrders = signal<number>(0);


  async ngOnInit() {

  this.orders =
    await this.orderService.getOrders();

  this.calculateMetrics(this.orders);

}
  calculateMetrics(data:any) {
    console.log(data,"reports")
    debugger

  this.totalOrders.set(data.length);

    
    let x=data.reduce(
      (sum:any, order:any) =>
        sum + order.totalAmount,
      0
    );

      this.totalRevenue.set(x)

   

    let y= data.filter(
      (o:any) => o.syncStatus === 'PENDING'
    ).length;
    this.pendingOrders.set(y)
  
    let z=  this.orders.filter(
      o => o.syncStatus === 'SYNCED'
    ).length;
 this.syncedOrders.set(z)

}

}
