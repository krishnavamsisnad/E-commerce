import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  mobile:any[]=[];
  tv:any[]=[];
  watch:any[]=[];
  woman:any[]=[];

  constructor(private ps:ProductsService,private router: Router){}
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

  // viewProductDetail(id: string): void {
  //   this.router.navigate(['/mobile', id]);
  // }

  viewMobiles():void{
    this.router.navigate(['/mobile'])
  }
  viewWatches():void{
    this.router.navigate(['/watch'])
  }

  viewMen():void{
    this.router.navigate(['/men'])
  }

  viewWoman():void{
    this.router.navigate(['/woman'])
  }

  viewFurniture():void{
    this.router.navigate(['/furniture'])
  }

  viewComputer():void{
    this.router.navigate(['/computer'])
  }

  navigateToRegistrationForm(){
    this.router.navigate(['/Register'])
  }

  navigateToOrders(){
    this.router.navigate(['/orders'])
  }

  navigateToCart(){
    this.router.navigate(['/cart'])
  }

  navigateToLoginPage(){
    this.router.navigate(['/login'])
  }


  
  

}
