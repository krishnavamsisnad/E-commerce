import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegitersComponent } from './regiters/regiters.component';

const routes: Routes = [
  {
    path: "", component: RegitersComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

