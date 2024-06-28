import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegitersComponent } from './regiters/regiters.component';

const routes: Routes = [
  {
    path:"",component:RegitersComponent
  },
  // {
  //   path:'product-list',loadChildren:()=>import("./product-management/product-management.module.ts").then(x=>x.ProductManagementModule)
  // }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
