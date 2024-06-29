import { Component } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { watchData } from 'src/data/watch'
@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent {
  watchInfo=watchData;

  watch:any[]=[];

  constructor(private productService: ProductsService) { }
// private route: ActivatedRoute
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.watch = this.productService.getProductById(id);
    //   console.log(this.watch)
    // }

    this.watch=this.productService.getWatch()

  }
}
