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

  furniture:any[]=[];

  constructor(private productService: ProductsService,private router:Router) { }
// private route: ActivatedRoute
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.furniture = this.productService.getProductById(id);
    //   console.log(this.furniture)
    // }

    this.furniture=this.productService.getFurniture()

  }

  viewFurnitureInfo(id:string){
    this.router.navigate(['/furnitureinfo', id]);
  }
}
