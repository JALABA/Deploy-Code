import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Policy2Component } from './policy2.component';

const routes: Routes = [
  {path:'', component : Policy2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Policy2RoutingModule { }
