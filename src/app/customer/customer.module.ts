import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { RegitersComponent } from './regiters/regiters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ProductManagementModule } from '../product-management/product-management.module';

@NgModule({
  declarations: [
    RegitersComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    ProductManagementModule
   
  ]
})
export class CustomerModule { }
