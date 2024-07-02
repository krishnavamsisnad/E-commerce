import { NgModule } from '@angular/core';

import { RegitersComponent } from './regiters/regiters.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "Register", component: RegitersComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

