import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddtocartRoutingModule } from './addtocart-routing.module';
import { BuynowComponent } from './buynow/buynow.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    BuynowComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    AddtocartRoutingModule
  ]
})
export class AddtocartModule { }
