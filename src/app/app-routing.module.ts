import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './app/homepage/homepage.component';

const routes: Routes = [
  {
    path:"",component:HomepageComponent
  },
  {
    
    path:'Register',loadChildren:()=>import("./customer/customer.module").then(x=>x.CustomerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
