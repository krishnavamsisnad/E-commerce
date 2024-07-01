import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-furnitureinfo',
  templateUrl: './furnitureinfo.component.html',
  styleUrls: ['./furnitureinfo.component.css']
})
export class FurnitureinfoComponent {

  furnitureData:any;

  constructor(private productService: ProductsService, private route:ActivatedRoute, private cs:CartService,
    private router:Router
  ) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.furnitureData = this.productService.getFurnitureById(id);
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

}
