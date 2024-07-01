import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems: any[] = [];

  constructor(private cs: CartService) {}

  ngOnInit() {
    this.cs.currentCartItems.subscribe(items => this.cartItems = items);
  }
}
