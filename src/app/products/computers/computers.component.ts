import { Component } from '@angular/core';
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

  constructor(private productService: ProductsService) { }
// private route: ActivatedRoute
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.computer = this.productService.getProductById(id);
    //   console.log(this.computer)
    // }

    this.computer=this.productService.getComputer()

  }
}
