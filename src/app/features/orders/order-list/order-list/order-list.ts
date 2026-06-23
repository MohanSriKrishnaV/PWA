import { ChangeDetectorRef, Component, inject } from "@angular/core";
import { Order } from "../../../../core/models/order.model";
import { OrderService } from "../../../../core/services/order";
import { SyncService } from "../../../../core/services/sync";
import { MATERIAL_IMPORTS } from "../../../../shared/material-imports";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [...MATERIAL_IMPORTS,CommonModule],
  templateUrl: './order-list.html',
  styleUrl: './order-list.scss',
})
export class OrderList {

  orders: Order[] = [];
  loading = true;

  constructor(
    private order: OrderService,  private cdr: ChangeDetectorRef

  ) {}

  network = inject(SyncService);

  async ngOnInit() {
    // debugger;

    try {

      this.loading = true;

      this.orders = await this.order.getOrders();

      // console.log(
      //   'Orders fetched:',
      //   this.orders
      // );

    } catch (e) {

      console.error(
        'Error fetching orders:',
        e
      );

    } finally {
    // console.log('Loading finished');
      this.loading = false;
      this.cdr.detectChanges();

    }

  }

  async syncOrders() {

    // console.log(this.orders.some((e:any)=>e.syncStatus=="SYNCED"));
    if(this.orders.every((e:any)=>e.syncStatus=="SYNCED")){
      // console.info("nothing to syc")
      return;
    }


    this.loading = true;
    try {

      await this.order.syncOrders();
// console.log("sunced in compo")
      this.orders =await this.order.getOrders();
        // console.log(this.orders,"orders seen")

    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }

  }

  trackByOrderId(
    index: number,
    order: Order
  ): number {

    return order.id;

  }

}