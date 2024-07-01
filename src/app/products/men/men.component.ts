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

  men:any[]=[];

  constructor(private productService: ProductsService, private router:Router) { }
// private route: ActivatedRoute
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.men = this.productService.getProductById(id);
    //   console.log(this.men)
    // }

    this.men=this.productService.getMen()

  }

  viewMenwearInfo(id:string){
    this.router.navigate(['/fashioninfo', id]);
  }
}
