import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  

  // private cartItems = new BehaviorSubject<number>(0);
  // cartItems$ = this.cartItems.asObservable();

  // addToCart() {
  //   this.cartItems.next(this.cartItems.value + 1);
  // }

  private cartItems = new BehaviorSubject<any[]>([]);
  currentCartItems = this.cartItems.asObservable();

  constructor() {}

  addToCart(item: any) {
    const currentItems = this.cartItems.value;
    currentItems.push(item);
    this.cartItems.next(currentItems);
  }

}
