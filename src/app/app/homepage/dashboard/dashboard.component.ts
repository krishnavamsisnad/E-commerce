import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { acData } from 'src/data/ac';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   see=""
  // acInfo=acData;
  ac:any[]=[];
  book:any[]=[];
  computer:any[]=[];
  fridge:any[]=[];
  furniture:any[]=[];
  kitchen:any[]=[];
  men:any[]=[];
  mobile:any;
  tv:any[]=[];
  watch:any[]=[];
  woman:any[]=[];

  constructor(private ps:ProductsService ){}
  ngOnInit(): void {
    this.ac=this.ps.getAc();
    this.book=this.ps.getBook();
    this.computer=this.ps.getComputer();
    this.fridge=this.ps.getFridge();
    this.furniture=this.ps.getFurniture();
    this.kitchen=this.ps.getKitchen();
    this.men=this.ps.getMen();
    this.mobile=this.ps.getMobile();
    this.tv=this.ps.getTv();
    this.watch=this.ps.getWatch();
    this.woman=this.ps.getWoman();
  }

  
  

}
