import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { watchData } from 'src/data/watch'
@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent {
  watchInfo=watchData;
  see=""
  watch:any[]=[];
  watches:any;

  constructor(private productService: ProductsService, private router:Router) { }
// private route: ActivatedRoute
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.watch = this.productService.getProductById(id);
    //   console.log(this.watch)
    // }

    this.watch=this.productService.getWatch()
    this.getWatches();

  }

  getWatches(){
    this.productService.getProducts().subscribe((res)=>{
      this.watches=res;
    })
  }
  sortByPriceAsc = false;
  sortByPriceDesc = false;

  sortPriceAsc() {
    this.watch.sort((a, b) => a.price - b.price);
    this.sortByPriceAsc = true;
    this.sortByPriceDesc = false;
  }

  sortPriceDesc() {
    this.watch.sort((a, b) => b.price - a.price);
    this.sortByPriceAsc = false;
    this.sortByPriceDesc = true;
  }

  viewWatchInfo(id:string){
    this.router.navigate(['/watchinfo', id])
  }
}
