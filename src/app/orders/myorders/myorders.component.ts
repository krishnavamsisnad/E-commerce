import { Component } from '@angular/core';
import { OrdersService } from 'src/app/orders.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent {

  orders: any[] = [];

  constructor(private os: OrdersService) {}

  ngOnInit() {
    this.os.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }
}
