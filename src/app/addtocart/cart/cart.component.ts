import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems: any[] = [];

  constructor(private cs: CartService, private router:Router) {}

  ngOnInit() {
    this.cs.currentCartItems.subscribe(items => this.cartItems = items);
  }
   buyNow(){
    this.router.navigate(['/buy'])
  
  }
}
