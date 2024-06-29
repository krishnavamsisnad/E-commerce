import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{
  ac:any | undefined;
  book:any | undefined;
  computer:any | undefined;
  fridge:any | undefined;
  furniture:any | undefined;
  kitchen:any | undefined;
  men:any | undefined;
  mobile:any | undefined;
  tv:any | undefined;
  watch:any | undefined;
  woman:any | undefined;

  constructor(private route: ActivatedRoute,private productService: ProductsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ac = this.productService.getAc().find(p => p.id === id);
    this.book = this.productService.getBook().find(p => p.id === id);
    this.computer = this.productService.getComputer().find(p => p.id === id);
    this.fridge = this.productService.getFridge().find(p => p.id === id);
    this.furniture = this.productService.getFurniture().find(p => p.id === id);
    this.kitchen = this.productService.getKitchen().find(p => p.id === id);
    this.men = this.productService.getMen().find(p => p.id === id);
    this.mobile = this.productService.getMobile().find(p => p.id === id);
    this.tv = this.productService.getTv().find(p => p.id === id);
    this.watch = this.productService.getWatch().find(p => p.id === id);
    this.woman = this.productService.getWoman().find(p => p.id === id);
  }
}
