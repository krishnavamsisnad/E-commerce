import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { menData } from 'src/data/men';
@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  menInfo=menData;
    see=''
  men:any[]=[];
  mens:any;

  constructor(private productService: ProductsService, private router:Router) { }
// private route: ActivatedRoute
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.men = this.productService.getProductById(id);
    //   console.log(this.men)
    // }

    this.men=this.productService.getMen()
    this.getMens();


  }
  getMens(){
    this.productService.getProducts().subscribe((res)=>{
      this.mens=res;
    })
  }
  sortByPriceAsc = false;
  sortByPriceDesc = false;

  sortPriceAsc() {
    this.men.sort((a, b) => a.price - b.price);
    this.sortByPriceAsc = true;
    this.sortByPriceDesc = false;
  }

  sortPriceDesc() {
    this.men.sort((a, b) => b.price - a.price);
    this.sortByPriceAsc = false;
    this.sortByPriceDesc = true;
  }

  viewMenwearInfo(id:string){
    this.router.navigate(['/fashioninfo', id]);
  }
}
