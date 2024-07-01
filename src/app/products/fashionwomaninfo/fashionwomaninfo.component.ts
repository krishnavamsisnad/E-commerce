import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-fashionwomaninfo',
  templateUrl: './fashionwomaninfo.component.html',
  styleUrls: ['./fashionwomaninfo.component.css']
})
export class FashionwomaninfoComponent {

  fashionWomanData:any;

  constructor(private productService: ProductsService, private route:ActivatedRoute, private cs:CartService,
    private router:Router
  ) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fashionWomanData = this.productService.getFashionWomanById(id);
    }
  }

  searchQuery: string = '';

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
    this.cs.addToCart(this.fashionWomanData);
  }

}
