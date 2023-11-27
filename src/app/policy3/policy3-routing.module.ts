import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Policy3Component } from './policy3.component';

const routes: Routes = [
  {path:'', component : Policy3Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Policy3RoutingModule { }
