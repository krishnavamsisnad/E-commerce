import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { mobileData } from 'src/data/mobiles';
@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{
  mobileInfo=mobileData;
  see=''
  mobile:any[]=[];
  mobiles:any;
  

  constructor(private productService: ProductsService,private router: Router) { }
// 
  ngOnInit(): void {

    this.mobile=this.productService.getMobile()

    this.getMobiles();

  }
  // ...

  getMobiles(){
    this.productService.getProducts().subscribe((res)=>{
      this.mobiles=res;
    })
  }

 

  sortByPriceAsc = false;
  sortByPriceDesc = false;

  sortPriceAsc() {
    this.mobile.sort((a, b) => a.price - b.price);
    this.sortByPriceAsc = true;
    this.sortByPriceDesc = false;
  }

  sortPriceDesc() {
    this.mobile.sort((a, b) => b.price - a.price);
    this.sortByPriceAsc = false;
    this.sortByPriceDesc = true;
  }

// ...

  searchQuery: string = '';

  sortPrice(order: string): void {
    if (order === 'highToLow') {
      // Implement sorting logic for high to low
    } else if (order === 'lowToHigh') {
      // Implement sorting logic for low to high
    }
  }

  search(event: Event): void {
    event.preventDefault();
    // Implement search logic
    console.log('Search query:', this.searchQuery);
  }

  viewMobileInfo(id:string):void{
    this.router.navigate(['/mobileinfo', id ])
  }
}