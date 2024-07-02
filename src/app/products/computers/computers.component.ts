import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { computerData } from 'src/data/computers';
@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent {
  computerInfo=computerData;

  computer:any[]=[];
  computers:any;
  see="";

  constructor(private productService: ProductsService, private router:Router) { }
// private route: ActivatedRoute
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.computer = this.productService.getProductById(id);
    //   console.log(this.computer)
    // }

    this.computer=this.productService.getComputer()
    this.getComputers();

  }

  getComputers(){
    this.productService.getProducts().subscribe((res)=>{
      this.computers=res;
    })
  }

  viewComputersInfo(id:string){
    this.router.navigate(['/computerinfo', id])
  }

  sortByPriceAsc = false;
  sortByPriceDesc = false;

  sortPriceAsc() {
    this.computer.sort((a, b) => a.price - b.price);
    this.sortByPriceAsc = true;
    this.sortByPriceDesc = false;
  }

  sortPriceDesc() {
    this.computer.sort((a, b) => b.price - a.price);
    this.sortByPriceAsc = false;
    this.sortByPriceDesc = true;
  }
}
