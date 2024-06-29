import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './app/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CustomerModule } from './customer/customer.module';
import { DashboardComponent } from './app/homepage/dashboard/dashboard.component';
import { CategoryComponent } from './app/homepage/dashboard/category/category.component';
import { AuthService } from './auth.service';
import { ProductsService } from './products.service';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DashboardComponent,
    CategoryComponent
  
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomerModule,
    FormsModule,
    ToastrModule.forRoot({ // ToastrModule added
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  
  
  
  ],
  providers: [AuthService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
