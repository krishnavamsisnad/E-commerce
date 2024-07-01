import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './app/homepage/homepage.component';
import { DashboardComponent } from './app/homepage/dashboard/dashboard.component';
// import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { MobilesComponent } from './products/mobiles/mobiles.component';
import { WatchComponent } from './products/watch/watch.component';
import { MenComponent } from './products/men/men.component';
import { WomanComponent } from './products/woman/woman.component';
import { FurnitureComponent } from './products/furniture/furniture.component';
import { ComputersComponent } from './products/computers/computers.component';
import { MobileInfoComponent } from './products/mobile-info/mobile-info.component';
import { BuynowComponent } from './addtocart/buynow/buynow.component';
// import { RegitersComponent } from './customer/regiters/regiters.component';
import { CartComponent } from './addtocart/cart/cart.component';
import { ComputerinfoComponent } from './products/computerinfo/computerinfo.component';
import { FurnitureinfoComponent } from './products/furnitureinfo/furnitureinfo.component';
import { FashioninfoComponent } from './products/fashioninfo/fashioninfo.component';
import { FashionwomaninfoComponent } from './products/fashionwomaninfo/fashionwomaninfo.component';
import { WatchinfoComponent } from './products/watchinfo/watchinfo.component';



const routes: Routes = [
  {
    path:"dashboard",component:DashboardComponent
  },
  {
    path:"login",component:HomepageComponent
  },
  // {
  //   path:"register",component:RegitersComponent
  // },
  {
    
    path:'Register',loadChildren:()=>import("./customer/customer.module").then(x=>x.CustomerModule)
  },
  {
    
    path:'orders',loadChildren:()=>import("./orders/orders.module").then(x=>x.OrdersModule)
  },
  // { path: 'mobile/:id', component: MobilesComponent },
  {
    path:'mobile', component:MobilesComponent
  },
  {
    path:'watch', component:WatchComponent
  },
  {
    path:'men', component:MenComponent
  },
  {
    path:'woman', component:WomanComponent
  },
  {
    path:'furniture', component:FurnitureComponent
  },
  {
    path:'computer', component:ComputersComponent
  },
  {
    path:'mobileinfo/:id', component:MobileInfoComponent
  },
  {
    path:'buy', component:BuynowComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'computerinfo/:id', component:ComputerinfoComponent
  },
  {
    path:'furnitureinfo/:id', component:FurnitureinfoComponent
  },
  {
    path:'fashioninfo/:id', component:FashioninfoComponent
  },
  {
    path:'fashionwomaninfo/:id', component:FashionwomaninfoComponent
  },
  {
    path:'watchinfo/:id', component:WatchinfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
