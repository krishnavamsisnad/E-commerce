import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  private orders: any[] = [];
  private ordersSubject = new BehaviorSubject<any[]>(this.orders);

  getOrders() {
    return this.ordersSubject.asObservable();
  }

  addOrder(order: any) {
    this.orders.push(order);
    this.ordersSubject.next(this.orders);
  }
}
