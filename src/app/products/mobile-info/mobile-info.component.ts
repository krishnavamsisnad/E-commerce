import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-mobile-info',
  templateUrl: './mobile-info.component.html',
  styleUrls: ['./mobile-info.component.css']
})
export class MobileInfoComponent implements OnInit {
  mobileInfo:any;

  constructor(private productService: ProductsService, private route:ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mobileInfo = this.productService.getProductById(id);
      console.log(this.mobileInfo)
    }
  }


}
