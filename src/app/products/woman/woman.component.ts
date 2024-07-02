import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { womanData } from 'src/data/woman';
@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css']
})
export class WomanComponent {
  womanInfo=womanData;

  woman:any[]=[];
  women:any;

  constructor(private productService: ProductsService, private router:Router) { }
// private route: ActivatedRoute
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.woman = this.productService.getProductById(id);
    //   console.log(this.woman)
    // }

    this.woman=this.productService.getWoman()
    this.getWomen();

  }
  getWomen(){
    this.productService.getProducts().subscribe((res)=>{
      this.women=res;
    })
  }

  viewWomanwearInfo(id:string){
    this.router.navigate(['/fashionwomaninfo', id]);
  }
}
