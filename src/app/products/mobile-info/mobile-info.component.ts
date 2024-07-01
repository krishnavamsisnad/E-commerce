import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-mobile-info',
  templateUrl: './mobile-info.component.html',
  styleUrls: ['./mobile-info.component.css']
})
export class MobileInfoComponent implements OnInit {
  mobileData:any;

  constructor(private productService: ProductsService, private route:ActivatedRoute, private cs:CartService,
    private router:Router
  ) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mobileData = this.productService.getMobileById(id);
      console.log(this.mobileData)
    } else {
      console.error('No ID found in the route'); // Debugging log
    }
  }

  searchQuery: string = '';

  // sortPrice(order: string): void {
  //   if (order === 'highToLow') {
  //     // Implement sorting logic for high to low
  //   } else if (order === 'lowToHigh') {
  //     // Implement sorting logic for low to high
  //   }
  // }

  search(event: Event): void {
    event.preventDefault();
    // Implement search logic
    console.log('Search query:', this.searchQuery);
  }

  // onAddToCart() {
  //   this.cs.addToCart();
  // }

  buyNow(){
    this.router.navigate(['/buy'])
  
  }

  addtoCart() {
    this.cs.addToCart(this.mobileData);
  }



}
