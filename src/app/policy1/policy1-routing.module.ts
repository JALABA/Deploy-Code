import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Policy1Component } from './policy1.component';

const routes: Routes = [
  {path:'', component : Policy1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Policy1RoutingModule { }
