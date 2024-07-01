import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { RegitersComponent } from './regiters/regiters.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegitersComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ToastrModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }