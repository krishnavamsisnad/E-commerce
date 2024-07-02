import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { furnitureData } from 'src/data/furniture';
@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent {
  furnitureInfo=furnitureData;
  see=""
  furniture:any[]=[];
  furnitures:any;

  constructor(private productService: ProductsService,private router:Router) { }
// private route: ActivatedRoute
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.furniture = this.productService.getProductById(id);
    //   console.log(this.furniture)
    // }

    this.furniture=this.productService.getFurniture()
    this.getFurnitures();

  }

  getFurnitures(){
    this.productService.getProducts().subscribe((res)=>{
      this.furnitures=res;
    })
  }
  sortByPriceAsc = false;
  sortByPriceDesc = false;

  sortPriceAsc() {
    this.furniture.sort((a, b) => a.price - b.price);
    this.sortByPriceAsc = true;
    this.sortByPriceDesc = false;
  }

  sortPriceDesc() {
    this.furniture.sort((a, b) => b.price - a.price);
    this.sortByPriceAsc = false;
    this.sortByPriceDesc = true;
  }

  viewFurnitureInfo(id:string){
    this.router.navigate(['/furnitureinfo', id]);
  }
}
