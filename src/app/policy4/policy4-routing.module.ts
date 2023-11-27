import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Policy4Component } from './policy4.component';

const routes: Routes = [
  {path:'', component : Policy4Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Policy4RoutingModule { }
