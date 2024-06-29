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
import { AuthService } from './auth.service';
import { ProductsService } from './products.service';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CommonModule } from '@angular/common';
import { MobilesComponent } from './products/mobiles/mobiles.component';
import { WatchComponent } from './products/watch/watch.component';
import { MenComponent } from './products/men/men.component';
import { WomanComponent } from './products/woman/woman.component';
import { FurnitureComponent } from './products/furniture/furniture.component';
import { ComputersComponent } from './products/computers/computers.component';
import { MobileInfoComponent } from './products/mobile-info/mobile-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DashboardComponent,
    ProductdetailsComponent,
    MobilesComponent,
    WatchComponent,
    MenComponent,
    WomanComponent,
    FurnitureComponent,
    ComputersComponent,
    MobileInfoComponent

   
   
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
    CommonModule
  
  
  
  ],
  providers: [AuthService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
