import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './app/homepage/homepage.component';
import { ProductListComponent } from './product-management/product-list/product-list.component';


const routes: Routes = [
  {
    path:"",component:HomepageComponent
  },
  {
    
    path:'Register',loadChildren:()=>import("./customer/customer.module").then(x=>x.CustomerModule)
  },
  {
    path:'products', component:ProductListComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
