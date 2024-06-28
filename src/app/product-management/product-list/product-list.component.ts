import { Component, OnInit } from '@angular/core';
import { ProductListService, products } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  ProductsList:any;

  constructor(private productservice:ProductListService){}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productservice.getProducts().subscribe(
      (res)=>{
        this.ProductsList=res;
      }
    )
  }
}
