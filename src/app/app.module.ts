import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './app/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { CustomerModule } from './customer/customer.module';
import { DashboardComponent } from './app/homepage/dashboard/dashboard.component';
import { CategoryComponent } from './app/homepage/dashboard/category/category.component';
import { AuthService } from './auth.service';
import { ProductsService } from './products.service';
import { SearchPipe } from './search.pipe';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CommonModule } from '@angular/common';
import { MobilesComponent } from './products/mobiles/mobiles.component';
import { WatchComponent } from './products/watch/watch.component';
import { MenComponent } from './products/men/men.component';
import { WomanComponent } from './products/woman/woman.component';
import { FurnitureComponent } from './products/furniture/furniture.component';
import { ComputersComponent } from './products/computers/computers.component';
import { MobileInfoComponent } from './products/mobile-info/mobile-info.component';
import { CartService } from './cart.service';
import { BuynowComponent } from './addtocart/buynow/buynow.component';
// import { OrdersModule } from './orders/orders.module';
// import { MyordersComponent } from './orders/myorders/myorders.component';
import { CartComponent } from './addtocart/cart/cart.component';
import { NavbarComponent } from './products/navbar/navbar.component';
import { ComputerinfoComponent } from './products/computerinfo/computerinfo.component';
import { FurnitureinfoComponent } from './products/furnitureinfo/furnitureinfo.component';
import { FashioninfoComponent } from './products/fashioninfo/fashioninfo.component';
import { FashionwomaninfoComponent } from './products/fashionwomaninfo/fashionwomaninfo.component';
import { WatchinfoComponent } from './products/watchinfo/watchinfo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    
    AppComponent,
    HomepageComponent,
    DashboardComponent,
    CategoryComponent,
    SearchPipe,
    ProductdetailsComponent,
    MobilesComponent,
    WatchComponent,
    MenComponent,
    WomanComponent,
    FurnitureComponent,
    ComputersComponent,
   
    BuynowComponent,
    // MyordersComponent,
   
    NavbarComponent,
    ComputerinfoComponent,
    FurnitureinfoComponent,
    FashioninfoComponent,
    FashionwomaninfoComponent,
    WatchinfoComponent

   
   
  ],
  imports: [
    // Angular modules
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
    // Third-party modules
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  
    // Feature modules
    CustomerModule,
  
    // Routing module
    AppRoutingModule,
  ],
  providers: [AuthService,ProductsService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
