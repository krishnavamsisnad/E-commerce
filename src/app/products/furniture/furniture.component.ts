import { Component } from '@angular/core';
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

  constructor(private productService: ProductsService) { }
// private route: ActivatedRoute
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.furniture = this.productService.getProductById(id);
    //   console.log(this.furniture)
    // }

    this.furniture=this.productService.getFurniture()

  }
}
