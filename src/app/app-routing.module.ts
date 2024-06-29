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



const routes: Routes = [
  {
    path:"",component:HomepageComponent
  },
  {
    path:"dashboard",component:DashboardComponent
  },
  {
    
    path:'Register',loadChildren:()=>import("./customer/customer.module").then(x=>x.CustomerModule)
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
    path:'mobileinfo', component:MobileInfoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
